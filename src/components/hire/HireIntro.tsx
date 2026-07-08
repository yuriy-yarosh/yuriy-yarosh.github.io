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

import { myAgeText } from "#/components/MyAge";
import { Paragraph } from "#/components/Typography";
import { getCurrentTime } from "#/hooks/useSunDial";
import { m } from "#/paraglide/messages";

export const HireIntro = () => {
	const xp = getCurrentTime().getFullYear() - 2008;

	return (
		<Paragraph className="mt-4 md:mt-8">
			{m.hire_intro({ age: myAgeText(), xp })}
		</Paragraph>
	);
};
