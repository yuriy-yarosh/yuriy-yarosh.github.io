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

import { twMerge } from "tailwind-merge";
import { TimeOfDayIcons } from "#/components/TimeOfDayIcons";
import { useColors } from "#/hooks";
import type { TimeOfDay } from "#/hooks/useSunDial";

export const TimeOfDayToggle = ({ className }: { className?: string }) => {
	const { timeOfDay, toggleTimeOfDay } = useColors();

	return (
		<button
			type="button"
			onClick={toggleTimeOfDay}
			className={twMerge(
				"group flex cursor-pointer items-center text-secondary-accent transition delay-100 duration-300 ease-in-out hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)]",
				className,
			)}
			aria-label={`Switch from ${timeOfDay} to next time of day`}
		>
			{TimeOfDayIcons[timeOfDay as TimeOfDay]}
		</button>
	);
};

export default TimeOfDayToggle;
