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

import { Fragment, useState } from "react";
import { Paragraph } from "#/components/Typography";
import { m } from "#/paraglide/messages";

export const ExpandablePolitics = () => {
	const [visible, setVisible] = useState(false);
	const highlight = m.politics_highlight();

	const renderWithHighlight = (text: string) => {
		const parts = text.split(highlight);
		return parts.map((part, i) => (
			<Fragment key={part}>
				{part}
				{i < parts.length - 1 && (
					<span className="font-bold text-red-600">{highlight}</span>
				)}
			</Fragment>
		));
	};

	if (!visible)
		return (
			<Paragraph
				className="border-transparent border-b-1 transition duration-500 ease-in-out hover:animate-pulse hover:border-accent"
				onClick={() => setVisible(true)}
			>
				{renderWithHighlight(m.politics_short({ highlight }))}
			</Paragraph>
		);

	return (
		<Paragraph onClick={() => setVisible(false)}>
			{renderWithHighlight(m.politics_full({ highlight }))}
		</Paragraph>
	);
};
