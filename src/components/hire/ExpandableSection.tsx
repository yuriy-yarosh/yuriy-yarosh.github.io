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

import { useTechDetails } from "./TechDetails";

export const ExpandableSection = ({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) => {
	const { visible, toggle } = useTechDetails();
	return (
		<>
			<button
				className="text-nowrap border-transparent text-accent transition duration-500 ease-in-out hover:animate-pulse hover:drop-shadow-[0_1px_2px_var(--color-accent)] cursor-pointer"
				onClick={toggle}
				onKeyDown={toggle}
				type="button"
			>
				{label}
			</button>{" "}
			{visible && <span className="text-sm">{children}</span>}
		</>
	);
};
