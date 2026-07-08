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

import { locales } from "#/paraglide/runtime";

const SITE_URL = "https://yarosh.dev";

type SeoArgs = {
	title: string;
	description: string;
	path: string;
	locale: string;
	type?: "website" | "article";
	image?: string;
	keywords?: string[];
	publishedAt?: string;
};

export const seoHead = ({
	title,
	description,
	path,
	locale,
	type = "website",
	image,
	keywords,
	publishedAt,
}: SeoArgs) => {
	const url = `${SITE_URL}/${locale}${path === "/" ? "" : path}`;
	const fullTitle = `${title} | Yuriy Yarosh`;

	return {
		meta: [
			{ title: fullTitle },
			{ name: "description", content: description },
			...(keywords?.length
				? [{ name: "keywords", content: keywords.join(", ") }]
				: []),
			{ property: "og:site_name", content: "Yuriy Yarosh" },
			{ property: "og:type", content: type },
			{ property: "og:locale", content: locale },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: url },
			...(image ? [{ property: "og:image", content: image }] : []),
			{
				name: "twitter:card",
				content: image ? "summary_large_image" : "summary",
			},
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			...(image ? [{ name: "twitter:image", content: image }] : []),
		],
		links: [
			{ rel: "canonical", href: url },
			...locales.map((l) => ({
				rel: "alternate" as const,
				hrefLang: l,
				href: `${SITE_URL}/${l}${path === "/" ? "" : path}`,
			})),
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: `${SITE_URL}/en${path === "/" ? "" : path}`,
			},
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": type === "article" ? "Article" : "WebPage",
					name: title,
					description,
					url,
					inLanguage: locale,
					...(publishedAt ? { datePublished: publishedAt } : {}),
					author: {
						"@type": "Person",
						name: "Yuriy Yarosh",
					},
				}),
			},
		],
	};
};
