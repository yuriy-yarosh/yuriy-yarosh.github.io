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

import { createFileRoute, Link } from "@tanstack/react-router";
import { allBlogPosts } from "content-collections";
import { ContentCard } from "#/components/ContentCard";
import { Heading, Paragraph } from "#/components/Typography";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";
import { seoHead } from "#/seo";

export const Route = createFileRoute("/blog/")({
	head: () =>
		seoHead({
			title: m.blog_page(),
			description: m.blog_subtitle(),
			path: "/blog",
			locale: getLocale(),
		}),
	component: Blog,
});

function Blog() {
	const locale = getLocale();
	const posts = allBlogPosts.filter((p) => p.locale === locale);
	const fallbackPosts =
		posts.length > 0 ? posts : allBlogPosts.filter((p) => p.locale === "en");

	return (
		<ContentCard
			backTitle={m.blog_page()}
			catchBoundary="blog"
			from="/blog"
			to="/"
		>
			<div className="space-y-2 px-4 md:px-12">
				<Heading>{m.blog_page()}</Heading>
				<Paragraph className="mt-4 md:mt-8">{m.blog_subtitle()}</Paragraph>
				<Paragraph>{m.blog_disclaimer()}</Paragraph>
				<nav className="my-8 flex h-max flex-col md:my-12">
					<ul className="flex flex-col space-y-4 md:space-y-8">
						{fallbackPosts.map((post) => (
							<li
								key={`${post.slug}-${post.locale}`}
								className="flex flex-col flex-wrap"
							>
								<Heading className="flex flex-row justify-between">
									<Link
										className="flex text-wrap font-semibold text-sm transition-colors hover:text-accent md:text-2xl lg:text-4xl"
										to="/blog/$slug"
										params={{ slug: post.slug }}
									>
										{post.title}
									</Link>
									<span className="flex text-sm md:text-md">
										{post.lastUpdated || post.status || m.draft_status()}
									</span>
								</Heading>
								<Paragraph className="flex flex-row pr-4">
									{post.description}
								</Paragraph>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</ContentCard>
	);
}
