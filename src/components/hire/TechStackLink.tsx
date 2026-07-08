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
import { ContentLink } from "#/components/Typography";

export const TechStackLink = ({
	to,
	external,
	className,
	children,
}: {
	to: string;
	external?: boolean;
	className?: string;
	children: React.ReactNode;
}) => (
	<ContentLink
		to={to}
		external={external}
		from="/hire"
		className={twMerge(
			"text-accent underline hover:border-transparent hover:no-underline",
			className,
		)}
	>
		{children}
	</ContentLink>
);
