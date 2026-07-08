import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import contentCollections from "@content-collections/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url));

const locales = JSON.parse(
	fs.readFileSync(path.join(dirname, "project.inlang/settings.json"), "utf-8"),
).locales;

const collectSlugs = (collection: string): string[] =>
	fs.existsSync(`${dirname}/content/${collection}`)
		? fs.readdirSync(`${dirname}/content/${collection}`).flatMap((locale) =>
				fs
					.readdirSync(`${dirname}/content/${collection}/${locale}`)
					.filter((f) => f.endsWith(".mdx"))
					.map((f) => `/${collection}/${f.replace(/\.mdx$/, "")}`),
			)
		: [];

const pages = locales.flatMap((locale: string) => [
	{ path: `/${locale}` },
	...["/about", "/contacts", "/hire", "/legal", "/blog", "/projects"].map(
		(r: string) => ({
			path: `/${locale}${r}`,
		}),
	),
	...[...collectSlugs("blog"), ...collectSlugs("projects")].map((s) => ({
		path: `/${locale}${s}`,
	})),
]);

export default defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/paraglide",
			outputStructure: "message-modules",
			cookieName: "PARAGLIDE_LOCALE",
			strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
			urlPatterns: [
				{ pattern: "/", localized: locales.map((l: string) => [l, `/${l}`]) },
				{
					pattern: "/:path(.*)?",
					localized: locales.map((l: string) => [l, `/${l}/:path(.*)?`]),
				},
			],
		}),
		nitro({ rollupConfig: { external: [/^@sentry\//] } }),
		contentCollections(),
		tailwindcss(),
		tanstackStart({
			prerender: {
				enabled: true,
				autoSubfolderIndex: true,
				autoStaticPathsDiscovery: true,
				crawlLinks: true,
				concurrency: 4,
				retryCount: 2,
				retryDelay: 1000,
				failOnError: false,
			},
			sitemap: {
				enabled: true,
				host: "https://yarosh.dev",
			},
			pages,
		}),
		viteReact(),
	],
});
