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

import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { TechDetailsContext } from "./TechDetails";

export const HiringHighlight = ({
	className,
	children,
	onClick,
}: {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}) => {
	const ctx = useContext(TechDetailsContext);
	const toggle = ctx?.toggle ?? onClick;
	return (
		<button
			className={twMerge(
				"text-nowrap border-transparent text-accent transition duration-500 ease-in-out hover:animate-pulse hover:drop-shadow-[0_1px_2px_var(--color-accent)]",
				toggle ? "cursor-pointer" : "",
				className,
			)}
			onClick={toggle}
			onKeyDown={toggle}
			type="button"
		>
			{children}
		</button>
	);
};
