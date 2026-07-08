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

import { createContext, type ReactNode, useContext, useState } from "react";
import { m } from "#/paraglide/messages";

export const TechDetailsContext = createContext<{
	visible: boolean;
	toggle: () => void;
} | null>(null);

export const TechDetailsProvider = ({ children }: { children: ReactNode }) => {
	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);
	return (
		<TechDetailsContext.Provider value={{ visible, toggle }}>
			{children}
		</TechDetailsContext.Provider>
	);
};

export const useTechDetails = () => {
	const ctx = useContext(TechDetailsContext);
	if (!ctx)
		throw new Error("useTechDetails must be used within TechDetailsProvider");
	return ctx;
};

export const TechDetailsToggle = () => {
	const { visible, toggle } = useTechDetails();
	return (
		<button
			className="border-b-1 text-sm transition duration-500 ease-in-out hover:animate-pulse hover:border-accent hover:text-accent"
			onClick={toggle}
			type="button"
		>
			{visible ? m.tech_details_hide() : m.tech_details_show()}
		</button>
	);
};

export const TechDetailsContent = ({ children }: { children: ReactNode }) => {
	const { visible } = useTechDetails();
	return visible ? children : null;
};
