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

import { MDXContent } from "@content-collections/mdx/react";
import { allPages } from "content-collections";
import type { ComponentType } from "react";
import { ContentCard } from "#/components/ContentCard";
import { Heading } from "#/components/Typography";
import { getLocale } from "#/paraglide/runtime";
import { seoHead } from "#/seo";

type PageConfig = {
	slug: string;
	path: string;
	// biome-ignore lint/suspicious/noExplicitAny: MDX components accept any props
	mdxComponents?: Record<string, ComponentType<any>>;
};

export const createPageHead = (slug: string, path: string) => () => {
	const locale = getLocale();
	const page =
		allPages.find((p) => p.slug === slug && p.locale === locale) ||
		allPages.find((p) => p.slug === slug && p.locale === "en");
	return seoHead({
		title: page?.title || slug,
		description: page?.description || slug,
		path,
		locale,
		image: page?.image,
		keywords: page?.keywords,
	});
};

export const PageView = ({ slug, path, mdxComponents }: PageConfig) => {
	const locale = getLocale();
	const page =
		allPages.find((p) => p.slug === slug && p.locale === locale) ||
		allPages.find((p) => p.slug === slug && p.locale === "en");

	return (
		<ContentCard
			backTitle={page?.title || slug}
			catchBoundary={slug}
			from={path}
			to="/"
		>
			<div className="space-y-2 px-4 md:px-12 lg:space-y-4">
				<Heading>{page?.title || slug}</Heading>
				{page && <MDXContent code={page.code} components={mdxComponents} />}
			</div>
		</ContentCard>
	);
};
