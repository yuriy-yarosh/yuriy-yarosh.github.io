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

import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	redirect,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { FacebookLink } from "#/components/FacebookLink";
import { FooterLink } from "#/components/FooterLink";
import { GithubLink } from "#/components/GitHubLink";
import { LinkedInLink } from "#/components/LinkedInLink";
import ParaglideLocaleSwitcher from "#/components/LocaleSwitcher";
import { NavbarHomeLink } from "#/components/NavbarHomeLink";
import { Scene } from "#/components/Scene";
import { TimeOfDayToggle } from "#/components/TimeOfDayToggle";
import { isCrawler } from "#/crawlerDetector";
import { AnimationProvider, ColorsProvider, useColors } from "#/hooks";
import { getCurrentTime } from "#/hooks/useSunDial";
import { m } from "#/paraglide/messages";

import { getLocale, shouldRedirect } from "#/paraglide/runtime";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	beforeLoad: async () => {
		if (typeof window !== "undefined") {
			const decision = await shouldRedirect({
				url: window.location.href,
			});
			if (decision.redirectUrl) {
				throw redirect({ href: decision.redirectUrl.href });
			}
		}
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Yuriy Yarosh | Personal Site" },
			{ name: "description", content: m.author_name() },
			{ property: "og:site_name", content: "Yuriy Yarosh" },
			{ property: "og:type", content: "website" },
		],
		links: [
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Monoton&family=Doto:wght@100..900&family=Play:wght@400;700&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument() {
	return (
		<html lang={getLocale()} suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="font-display antialiased [overflow-wrap:anywhere]">
				<AnimationProvider>
					<ColorsProvider>
						<AppShell />
					</ColorsProvider>
				</AnimationProvider>
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}

function AppShell() {
	const { colors } = useColors();
	const isBot = isCrawler();

	if (typeof document !== "undefined") {
		document.body.style.backgroundColor = colors.rgb.primary;
	}

	const year = getCurrentTime().getFullYear();

	return (
		<>
			{!isBot && (
				<div className="fixed inset-0 z-0 h-screen w-screen">
					<Scene />
				</div>
			)}
			<div className="relative z-1 mx-auto flex min-h-screen w-full min-w-[240px] max-w-[1920px] flex-col p-6 font-display text-content transition-all duration-100">
				<header className="flex items-center justify-between pb-2 lg:pb-4">
					<div className="flex flex-1 justify-start">
						<NavbarHomeLink />
					</div>

					<div className="flex flex-1 justify-center max-[360px]:justify-end">
						<TimeOfDayToggle />
					</div>

					<div className="flex flex-1 items-center justify-end gap-2 max-[360px]:hidden md:gap-4 xl:gap-6">
						<ParaglideLocaleSwitcher />
						<GithubLink />
						<FacebookLink />
						<LinkedInLink />
					</div>
				</header>

				<div className="mx-auto w-full flex-1">
					<Outlet />
				</div>

				<footer className="flex w-full text-sm">
					<p className="flex flex-1 cursor-default flex-col justify-start font-extralight text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]">
						<span>
							&copy; {year}{" "}
							<a
								className="hover:animate-pulse hover:text-accent hover:drop-shadow-[0_1px_2px_var(--color-accent)]"
								href="mailto:yuriy@yarosh.dev"
							>
								{m.author_name()}
							</a>
						</span>
						<br />
						<span>{m.all_rights_reserved()}</span>
					</p>

					{getLocale() !== "en" && getLocale() !== "uk" && (
						<p className="flex flex-1 items-center justify-center text-center font-extralight text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]">
							{m.translation_notice()}
						</p>
					)}

					<nav className="flex flex-1 justify-end max-[360px]:hidden md:gap-2">
						<FooterLink to="/about">{m.about_page()}</FooterLink>
						<FooterLink to="/contacts">{m.contacts_page()}</FooterLink>
						<FooterLink to="/legal">{m.legal_page()}</FooterLink>
					</nav>
				</footer>
			</div>
		</>
	);
}
