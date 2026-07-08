/*
 * Copyright (C) 2016-2026 Yuriy Yarosh
 * All rights reserved.
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback, useEffect, useMemo, useState } from "react";

export enum TimeOfDay {
	Night = "night",
	Dawn = "dawn",
	Morning = "morning",
	Noon = "noon",
	Afternoon = "afternoon",
	Evening = "evening",
	Dusk = "dusk",
}

interface SunDialResult {
	timeOfDay: TimeOfDay;
	solarTime: string;
	sunrise: Date;
	sunset: Date;
	solarNoon: Date;
	progress: number;
}

const TIMEZONE_ENTRIES = [
	{ offset: 720, latitude: -12.0, longitude: -176.0, city: "Baker Island" },
	{ offset: 660, latitude: -14.0, longitude: -170.0, city: "Samoa" },
	{ offset: 600, latitude: 21.3, longitude: -157.8, city: "Honolulu" },
	{ offset: 540, latitude: 61.2, longitude: -149.9, city: "Anchorage" },
	{ offset: 480, latitude: 34.0, longitude: -118.2, city: "Los Angeles" },
	{ offset: 420, latitude: 39.7, longitude: -104.9, city: "Denver" },
	{ offset: 360, latitude: 41.9, longitude: -87.6, city: "Chicago" },
	{ offset: 300, latitude: 40.7, longitude: -74.0, city: "New York" },
	{ offset: 240, latitude: 10.5, longitude: -66.9, city: "Caracas" },
	{ offset: 180, latitude: -23.5, longitude: -46.6, city: "Sao Paulo" },
	{ offset: 120, latitude: -54.3, longitude: -36.5, city: "South Georgia" },
	{ offset: 60, latitude: 37.7, longitude: -25.7, city: "Azores" },
	{ offset: 0, latitude: 51.5, longitude: -0.1, city: "London" },
	{ offset: -60, latitude: 52.5, longitude: 13.4, city: "Berlin" },
	{ offset: -120, latitude: 60.2, longitude: 24.9, city: "Helsinki" },
	{ offset: -180, latitude: 41.0, longitude: 29.0, city: "Kyiv" },
	{ offset: -240, latitude: 25.3, longitude: 55.3, city: "Dubai" },
	{ offset: -300, latitude: 24.9, longitude: 67.0, city: "Karachi" },
	{ offset: -360, latitude: 23.8, longitude: 90.4, city: "Dhaka" },
	{ offset: -420, latitude: 13.8, longitude: 100.5, city: "Bangkok" },
	{ offset: -480, latitude: 31.2, longitude: 121.5, city: "Shanghai" },
	{ offset: -540, latitude: 35.7, longitude: 139.7, city: "Tokyo" },
	{ offset: -600, latitude: -33.9, longitude: 151.2, city: "Sydney" },
	{ offset: -660, latitude: -22.3, longitude: 166.4, city: "Noumea" },
	{ offset: -720, latitude: -36.8, longitude: 174.8, city: "Auckland" },
] as const;

const getCoordinatesFromTimezone = (timezoneOffset: number) => {
	const exactMatch = TIMEZONE_ENTRIES.find(
		(entry) => entry.offset === timezoneOffset,
	);
	if (exactMatch)
		return { latitude: exactMatch.latitude, longitude: exactMatch.longitude };

	const closestMatch = TIMEZONE_ENTRIES.map((entry) => ({
		...entry,
		distance: Math.abs(entry.offset - timezoneOffset),
	})).reduce((closest, current) =>
		current.distance < closest.distance ? current : closest,
	);

	return { latitude: closestMatch.latitude, longitude: closestMatch.longitude };
};

const calculateSunTimes = (date: Date, latitude = 50.0, longitude = 0.0) => {
	const dayOfYear = Math.floor(
		(date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000,
	);
	const solarDeclination = Math.asin(
		0.39795 * Math.cos(0.01723 * (dayOfYear - 173)),
	);

	const hourAngle = ((lat: number, decl: number) => {
		const argument = -Math.tan((lat * Math.PI) / 180) * Math.tan(decl);
		return (Math.acos(Math.max(-1, Math.min(1, argument))) * 180) / Math.PI;
	})(latitude, solarDeclination);

	const solarNoonOffset = 12 - longitude / 15;

	return [
		{ type: "solarNoon" as const, hour: solarNoonOffset },
		{ type: "sunrise" as const, hour: solarNoonOffset - hourAngle / 15 },
		{ type: "sunset" as const, hour: solarNoonOffset + hourAngle / 15 },
	].reduce(
		(acc, { type, hour }) => {
			const time = new Date(date);
			time.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);
			acc[type] = time;
			return acc;
		},
		{} as { sunrise: Date; sunset: Date; solarNoon: Date },
	);
};

const getTimeOfDay = (
	now: Date,
	sunrise: Date,
	sunset: Date,
	solarNoon: Date,
): TimeOfDay => {
	const [currentTime, sunriseTime, sunsetTime, noonTime] = [
		now,
		sunrise,
		sunset,
		solarNoon,
	].map((d) => d.getTime());
	const [dawnTime, duskTime] = [sunriseTime - 3600000, sunsetTime + 3600000];

	return (
		[
			{
				condition: currentTime < dawnTime || currentTime > duskTime,
				period: TimeOfDay.Night,
			},
			{ condition: currentTime < sunriseTime, period: TimeOfDay.Dawn },
			{
				condition: currentTime < noonTime - 3600000,
				period: TimeOfDay.Morning,
			},
			{ condition: currentTime < noonTime + 3600000, period: TimeOfDay.Noon },
			{
				condition: currentTime < sunsetTime - 3600000,
				period: TimeOfDay.Afternoon,
			},
			{ condition: currentTime < sunsetTime, period: TimeOfDay.Evening },
		].find((matcher) => matcher.condition)?.period || TimeOfDay.Dusk
	);
};

const calculateSunDialResult = (now: Date): SunDialResult => {
	const { latitude, longitude } = getCoordinatesFromTimezone(
		now.getTimezoneOffset(),
	);
	const { sunrise, sunset, solarNoon } = calculateSunTimes(
		now,
		latitude,
		longitude,
	);
	const timeOfDay = getTimeOfDay(now, sunrise, sunset, solarNoon);

	const [dayStart, dayEnd, currentTime] = [sunrise, sunset, now].map((d) =>
		d.getTime(),
	);
	const rawProgress = Math.max(
		0,
		Math.min(1, (currentTime - dayStart) / (dayEnd - dayStart)),
	);
	const progress = Math.min(90, Math.round(rawProgress * 90));

	return {
		timeOfDay,
		solarTime: now.toLocaleTimeString(),
		sunrise,
		sunset,
		solarNoon,
		progress,
	};
};

export const getCurrentTime = () =>
	typeof document !== "undefined"
		? new Date()
		: new Date("2025-07-04T12:06:00");

export const useSunDial = (): SunDialResult => {
	const [currentTime, setCurrentTime] = useState(() => getCurrentTime());

	const result = useMemo(
		() => calculateSunDialResult(currentTime),
		[currentTime],
	);

	const updateTime = useCallback(() => setCurrentTime(getCurrentTime()), []);

	useEffect(() => {
		const interval = setInterval(updateTime, 5000);
		return () => clearInterval(interval);
	}, [updateTime]);

	return result;
};
