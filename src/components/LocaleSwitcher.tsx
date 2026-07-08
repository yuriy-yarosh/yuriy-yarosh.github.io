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

import { useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Flag } from "#/components/Flags";
import { m } from "#/paraglide/messages";
// Locale switcher refs:
// - Paraglide docs: https://inlang.com/m/gerre34r/library-inlang-paraglideJs
// - Router example: https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#switching-locale
import {
	getLocale,
	locales,
	localizeHref,
	setLocale,
} from "#/paraglide/runtime";

const localeName = (locale: string) => {
	if (locale === "en") return "English";
	if (locale === "de") return "Deutsch";
	if (locale === "fr") return "Français";
	if (locale === "it") return "Italiano";
	if (locale === "es") return "Español";
	if (locale === "pt") return "Português";
	if (locale === "uk") return "Українська";
	if (locale === "cz") return "Čeština";
	if (locale === "pl") return "Polski";
	if (locale === "sv") return "Svenska";
	if (locale === "no") return "Norsk";
	if (locale === "et") return "Eesti";
	if (locale === "lv") return "Latviešu";
	if (locale === "lt") return "Lietuvių";
	if (locale === "fi") return "Suomi";
	return locale;
};

const localeFlag = (locale: string) => (
	<Flag locale={locale} className="size-4 shrink-0" />
);

export default function ParaglideLocaleSwitcher() {
	const currentLocale = getLocale();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		if (!open) return;
		const onClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node))
				setOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, [open]);

	return (
		<div ref={ref} className="group relative text-content">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-label={m.language_label()}
				className={`relative flex cursor-pointer items-center justify-center rounded-full border border-border bg-transparent px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 hover:border-accent hover:text-accent md:text-sm ${open ? "pr-[30px]" : "group-hover:pr-[30px]"}`}
			>
				{localeName(currentLocale)}
				<svg
					className={`absolute right-3 size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 ${open ? "rotate-180 !opacity-100" : ""}`}
					viewBox="0 0 12 12"
					fill="none"
					role="img"
					aria-label={m.language_label()}
				>
					<path
						d="M3 4.5L6 7.5L9 4.5"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			{open && (
				<div className="absolute left-1/2 top-full z-50 mt-1 w-max min-w-[120px] -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-primary/80 shadow-lg backdrop-blur-md">
					{locales.map((locale) => (
						<div key={locale} data-selected={locale === currentLocale}>
							<button
								type="button"
								onClick={async () => {
									await setLocale(locale);
									const localizedHref = localizeHref(window.location.pathname, {
										locale,
									});
									void router.navigate({ to: localizedHref });
									setOpen(false);
								}}
								className={`flex w-full cursor-pointer items-center px-3 py-2 text-xs font-medium tracking-wide transition-colors md:text-sm ${
									locale === currentLocale
										? "text-accent font-bold"
										: "text-content hover:text-accent"
								}`}
							>
								<span className="mr-1.5 flex items-center">
									{localeFlag(locale)}
								</span>
								{localeName(locale)}
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
