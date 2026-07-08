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
import { createFileRoute } from "@tanstack/react-router";
import { allBlogPosts } from "content-collections";
import { ContentCard } from "#/components/ContentCard";
import { Heading } from "#/components/Typography";
import { getLocale } from "#/paraglide/runtime";
import { seoHead } from "#/seo";

export const Route = createFileRoute("/blog/$slug")({
	loader: async ({ params }) => {
		const locale = getLocale();
		const post =
			allBlogPosts.find((p) => p.slug === params.slug && p.locale === locale) ||
			allBlogPosts.find((p) => p.slug === params.slug && p.locale === "en");
		return { post };
	},
	head: ({ loaderData }) => {
		const post = loaderData?.post;
		return seoHead({
			title: post?.title || "Blog",
			description: post?.description || "",
			path: `/blog/${post?.slug ?? ""}`,
			locale: getLocale(),
			type: "article",
			image: post?.image,
			keywords: post?.keywords,
			publishedAt: post?.lastUpdated,
		});
	},
	component: BlogPost,
});

function BlogPost() {
	const { slug } = Route.useParams();
	const { post } = Route.useLoaderData();

	if (!post) {
		return (
			<ContentCard
				backTitle="Blog"
				catchBoundary="blog-not-found"
				to="/blog"
				from={`/blog/${slug}`}
			>
				<div className="px-4 md:px-12">
					<Heading>Not Found</Heading>
				</div>
			</ContentCard>
		);
	}

	return (
		<ContentCard
			backTitle={post.title}
			catchBoundary={`blog-${slug}`}
			to="/blog"
			from={`/blog/${slug}`}
		>
			<div className="space-y-2 px-4 md:px-12">
				<Heading>{post.title}</Heading>
				<MDXContent code={post.code} />
			</div>
		</ContentCard>
	);
}
