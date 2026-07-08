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

import { useEffect, useState } from "react";

export const usePathname = () => {
	const [pathname, setPathname] = useState(() =>
		typeof window !== "undefined" ? window.location.pathname : "/",
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const updatePathname = () => setPathname(window.location.pathname);

		window.addEventListener("popstate", updatePathname);
		updatePathname();

		return () => window.removeEventListener("popstate", updatePathname);
	}, []);

	return pathname;
};

export default usePathname;
