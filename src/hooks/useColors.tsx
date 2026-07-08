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

import { createContext, useContext, useEffect, useState } from "react";
import {
	type Colors,
	generateSemanticColors,
	initialBlack,
} from "#/hooks/semanticColors";
import { type TimeOfDay, useSunDial } from "#/hooks/useSunDial";

type ColorsContextType = {
	isDark: boolean;
	colors: Colors;
	timeOfDay: TimeOfDay;
	toggleTimeOfDay: () => void;
};

const DARK_TIME_PERIODS = ["dusk", "night"] as const;
const TIME_OF_DAY_VALUES = [
	"night",
	"dawn",
	"morning",
	"noon",
	"afternoon",
	"evening",
	"dusk",
] as TimeOfDay[];

export const BASE_RGB_COLORS = {
	afternoon: [200, 120, 80],
	dawn: [180, 160, 200],
	dusk: [80, 60, 120],
	evening: [200, 120, 100],
	morning: [240, 210, 140],
	night: [30, 20, 80],
	noon: [120, 160, 200],
} as const;

const applyTheme = (timeOfDay: string) => {
	const html = document.documentElement;
	const isDark = DARK_TIME_PERIODS.includes(
		timeOfDay as (typeof DARK_TIME_PERIODS)[number],
	);

	isDark ? html.classList.add("dark") : html.classList.remove("dark");
	TIME_OF_DAY_VALUES.forEach((cls) => {
		if (cls !== timeOfDay) {
			html.classList.remove(cls);
		}
	});
	html.classList.add(timeOfDay);

	const rgbColor = BASE_RGB_COLORS[timeOfDay as keyof typeof BASE_RGB_COLORS];
	if (!rgbColor) {
		throw new Error(`Invalid time of day: ${timeOfDay}`);
	}

	const colors: Colors = generateSemanticColors(rgbColor);

	const cssVars = [
		["--color-primary", colors.primary],
		["--color-secondary-accent", colors.secondaryAccent],
		["--color-content", colors.content],
		["--color-accent", colors.accent],
		["--color-neutral", colors.neutral],
		["--color-border", colors.border],
		["--color-card-background", colors.cardBackground],
	];

	cssVars.forEach(([key, value]) => {
		html.style.setProperty(key, value);
	});

	return colors;
};

const ColorsContext = createContext<ColorsContextType | undefined>(undefined);

export const useColors = (): ColorsContextType => {
	const ctx = useContext(ColorsContext);
	if (!ctx) throw new Error("useColors must be used within ColorsProvider");
	return ctx;
};

export const ColorsProvider = ({ children }: { children: React.ReactNode }) => {
	const sunDialData = useSunDial();
	const [manualTimeOfDay, setManualTimeOfDay] = useState<string | null>(null);

	const [colors, setColors] = useState(initialBlack());

	const timeOfDay = manualTimeOfDay || sunDialData.timeOfDay;

	useEffect(() => {
		const colors = applyTheme(timeOfDay);
		setColors(colors);
	}, [timeOfDay]);

	const toggleTimeOfDay = () => {
		const currentIndex = TIME_OF_DAY_VALUES.indexOf(
			timeOfDay as (typeof TIME_OF_DAY_VALUES)[number],
		);
		const nextIndex = (currentIndex + 1) % TIME_OF_DAY_VALUES.length;
		setManualTimeOfDay(TIME_OF_DAY_VALUES[nextIndex]);
	};

	return (
		<ColorsContext.Provider
			value={{
				colors,
				isDark: DARK_TIME_PERIODS.includes(
					timeOfDay as (typeof DARK_TIME_PERIODS)[number],
				),
				timeOfDay: timeOfDay as TimeOfDay,
				toggleTimeOfDay,
			}}
		>
			{children}
		</ColorsContext.Provider>
	);
};

export default useColors;
