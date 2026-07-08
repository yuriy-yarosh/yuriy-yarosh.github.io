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

const CRAWLER_USER_AGENTS = [
	"googlebot",
	"bingbot",
	"slurp",
	"duckduckbot",
	"baiduspider",
	"yandexbot",
	"sogou",
	"exabot",
	"facebot",
	"facebookexternalhit",
	"twitterbot",
	"linkedinbot",
	"whatsapp",
	"telegrambot",
	"applebot",
	"semrushbot",
	"ahrefsbot",
	"mj12bot",
	"dotbot",
	"aspiegelbot",
];

export function isCrawler(): boolean {
	if (typeof window === "undefined") {
		return false;
	}

	const userAgent = window.navigator.userAgent.toLowerCase();
	return CRAWLER_USER_AGENTS.some((crawler) => userAgent.includes(crawler));
}
