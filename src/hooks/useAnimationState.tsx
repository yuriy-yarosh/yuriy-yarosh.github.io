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

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { usePathname } from "#/hooks/usePathname";

class Clock {
	running: boolean;
	oldTime: number;
	elapsedTime: number;
	autoStart: boolean;

	constructor(autoStart = false) {
		this.autoStart = autoStart;
		this.running = false;
		this.oldTime = 0;
		this.elapsedTime = 0;
		if (autoStart) this.start();
	}

	start() {
		this.oldTime = performance.now();
		this.elapsedTime = 0;
		this.running = true;
	}

	stop() {
		this.getDelta();
		this.running = false;
	}

	getDelta() {
		let diff = 0;
		if (this.running) {
			const now = performance.now();
			diff = (now - this.oldTime) / 1000;
			this.oldTime = now;
			this.elapsedTime += diff;
		}
		return diff;
	}

	getElapsedTime() {
		this.getDelta();
		return this.elapsedTime;
	}
}

enum ScenePage {
	Home = 1,
	About = 2,
	Blog = 3,
	Contacts = 4,
	Events = 5,
	Hire = 6,
	Legal = 7,
	Projects = 8,
}

interface AnimationContextType {
	isAnimating: boolean;
	currentScene: ScenePage;
	pauseAnimation: () => void;
	resumeAnimation: () => void;
	animationClock: Clock;
	continuousClock: Clock;
}

const SCENE_MAP: Record<string, ScenePage> = {
	"/": ScenePage.Home,
	"/about": ScenePage.About,
	"/blog": ScenePage.Blog,
	"/contacts": ScenePage.Contacts,
	"/events": ScenePage.Events,
	"/hire": ScenePage.Hire,
	"/legal": ScenePage.Legal,
	"/projects": ScenePage.Projects,
};

const AnimationContext = createContext<AnimationContextType>({
	isAnimating: true,
	currentScene: ScenePage.Home,
	pauseAnimation: () => console.warn("AnimationProvider not found"),
	resumeAnimation: () => console.warn("AnimationProvider not found"),
	animationClock: new Clock(false),
	continuousClock: new Clock(false),
});

export const useAnimationState = () => useContext(AnimationContext);

export const AnimationProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const [manualOverride, setManualOverride] = useState<boolean | null>(null);
	const prevPathnameRef = useRef(pathname);

	const [clocks] = useState(() => {
		const isSSR = typeof window === "undefined";
		return {
			animation: new Clock(false),
			continuous: new Clock(!isSSR),
		};
	});

	useEffect(() => {
		const { continuous } = clocks;
		if (typeof window !== "undefined" && !continuous.running) {
			continuous.oldTime = performance.now();
			continuous.running = true;
		}
	}, [clocks]);

	useEffect(() => {
		if (pathname !== prevPathnameRef.current) {
			setManualOverride(null);
			prevPathnameRef.current = pathname;
		}
	}, [pathname]);

	const strippedPath = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
	const currentScene = SCENE_MAP[strippedPath] || ScenePage.Home;
	const shouldAnimate = strippedPath === "/";
	const isAnimating = manualOverride ?? shouldAnimate;

	useEffect(() => {
		const { animation } = clocks;

		if (isAnimating && !animation.running) {
			animation.oldTime = performance.now();
			animation.running = true;
		} else if (!isAnimating && animation.running) {
			animation.stop();
		}
	}, [isAnimating, clocks]);

	const pauseAnimation = useCallback(() => setManualOverride(false), []);
	const resumeAnimation = useCallback(() => setManualOverride(true), []);

	const value = useMemo(
		() => ({
			isAnimating,
			currentScene,
			pauseAnimation,
			resumeAnimation,
			animationClock: clocks.animation,
			continuousClock: clocks.continuous,
		}),
		[isAnimating, currentScene, pauseAnimation, resumeAnimation, clocks],
	);

	return (
		<AnimationContext.Provider value={value}>
			{children}
		</AnimationContext.Provider>
	);
};

export default useAnimationState;
