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
import { allProjects } from "content-collections";
import { ContentCard } from "#/components/ContentCard";
import { Heading } from "#/components/Typography";
import { getLocale } from "#/paraglide/runtime";
import { seoHead } from "#/seo";

export const Route = createFileRoute("/projects/$slug")({
	loader: async ({ params }) => {
		const locale = getLocale();
		const project =
			allProjects.find((p) => p.slug === params.slug && p.locale === locale) ||
			allProjects.find((p) => p.slug === params.slug && p.locale === "en");
		return { project };
	},
	head: ({ loaderData }) => {
		const project = loaderData?.project;
		return seoHead({
			title: project?.title || "Projects",
			description: project?.description || "",
			path: `/projects/${project?.slug ?? ""}`,
			locale: getLocale(),
			image: project?.image,
			keywords: project?.keywords,
		});
	},
	component: ProjectPage,
});

function ProjectPage() {
	const { slug } = Route.useParams();
	const { project } = Route.useLoaderData();

	if (!project) {
		return (
			<ContentCard
				backTitle="Projects"
				catchBoundary="projects-not-found"
				to="/projects"
				from={`/projects/${slug}`}
			>
				<div className="px-4 md:px-12">
					<Heading>Not Found</Heading>
				</div>
			</ContentCard>
		);
	}

	return (
		<ContentCard
			backTitle={project.title}
			catchBoundary={`projects-${slug}`}
			to="/projects"
			from={`/projects/${slug}`}
		>
			<div className="space-y-2 px-4 md:px-12">
				<Heading>{project.title}</Heading>
				<MDXContent code={project.code} />
			</div>
		</ContentCard>
	);
}
