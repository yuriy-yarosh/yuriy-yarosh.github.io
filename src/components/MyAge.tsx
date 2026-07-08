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

import { getCurrentTime } from "#/hooks/useSunDial";
import { m } from "#/paraglide/messages";

export const myAgeText = () => {
	const age = getCurrentTime().getFullYear() - 1991;
	if (age > 80) return m.age_dead();
	return m.age_suffix({ age });
};

export const MyAge = () => <>{myAgeText()}</>;
