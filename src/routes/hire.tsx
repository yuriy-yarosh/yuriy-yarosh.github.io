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

import { createFileRoute } from "@tanstack/react-router";
import {
	ExpandablePolitics,
	ExpandableSection,
	HireIntro,
	HiringHighlight,
	TechDetails,
	TechDetailsContent,
	TechDetailsToggle,
	TechStackLink,
} from "#/components/hire";
import { createPageHead, PageView } from "#/components/PageView";
import { ContentLink, Paragraph } from "#/components/Typography";

export const Route = createFileRoute("/hire")({
	head: createPageHead("hire", "/hire"),
	component: () => (
		<PageView
			slug="hire"
			path="/hire"
			mdxComponents={{
				HiringHighlight,
				TechStackLink,
				ExpandableSection,
				ExpandablePolitics,
				HireIntro,
				ContentLink,
				Paragraph,
				TechDetails,
				TechDetailsContent,
				TechDetailsToggle,
			}}
		/>
	),
});
