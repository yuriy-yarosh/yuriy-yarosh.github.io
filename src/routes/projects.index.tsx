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
import { allProjects } from "content-collections";
import { ContentCard } from "#/components/ContentCard";
import { Heading, Paragraph } from "#/components/Typography";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";
import { seoHead } from "#/seo";

export const Route = createFileRoute("/projects/")({
	head: () =>
		seoHead({
			title: m.projects_page(),
			description: m.projects_page(),
			path: "/projects",
			locale: getLocale(),
		}),
	component: Projects,
});

function Projects() {
	const locale = getLocale();
	const projects = allProjects.filter((p) => p.locale === locale);
	const fallbackProjects =
		projects.length > 0
			? projects
			: allProjects.filter((p) => p.locale === "en");

	return (
		<ContentCard
			backTitle={m.projects_page()}
			catchBoundary="projects"
			from="/projects"
			to="/"
		>
			<div className="space-y-12 px-4 md:px-12">
				<Heading>{m.projects_page()}</Heading>

				<nav className="flex h-max flex-col items-center">
					<ul className="flex flex-col space-y-8">
						{fallbackProjects.map((project) => (
							<li
								key={`${project.slug}-${project.locale}`}
								className="flex flex-col flex-wrap"
							>
								<Heading className="flex flex-row justify-between">
									<Link
										className="flex font-semibold text-lg transition-colors hover:text-accent md:text-4xl"
										to="/projects/$slug"
										params={{ slug: project.slug }}
									>
										{project.title}
									</Link>
								</Heading>
								<Paragraph className="flex flex-row pr-4">
									{project.description}
								</Paragraph>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</ContentCard>
	);
}
