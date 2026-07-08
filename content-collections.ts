import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const pages = defineCollection({
	name: "pages",
	directory: "content/pages",
	include: "**/*.mdx",
	schema: z.object({
		slug: z.string(),
		locale: z.enum([
			"en",
			"de",
			"fr",
			"it",
			"es",
			"pt",
			"uk",
			"cz",
			"pl",
			"sv",
			"no",
			"et",
			"lv",
			"lt",
			"fi",
		]),
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		keywords: z.array(z.string()).optional(),
		content: z.string(),
	}),
	transform: async (document, context) => {
		const code = await compileMDX(context, document);
		return { ...document, code };
	},
});

const blogPosts = defineCollection({
	name: "blogPosts",
	directory: "content/blog",
	include: "**/*.mdx",
	schema: z.object({
		slug: z.string(),
		locale: z.enum([
			"en",
			"de",
			"fr",
			"it",
			"es",
			"pt",
			"uk",
			"cz",
			"pl",
			"sv",
			"no",
			"et",
			"lv",
			"lt",
			"fi",
		]),
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		keywords: z.array(z.string()).optional(),
		status: z.string().optional(),
		lastUpdated: z.string().optional(),
		content: z.string(),
	}),
	transform: async (document, context) => {
		const code = await compileMDX(context, document);
		return { ...document, code };
	},
});

const projects = defineCollection({
	name: "projects",
	directory: "content/projects",
	include: "**/*.mdx",
	schema: z.object({
		slug: z.string(),
		locale: z.enum([
			"en",
			"de",
			"fr",
			"it",
			"es",
			"pt",
			"uk",
			"cz",
			"pl",
			"sv",
			"no",
			"et",
			"lv",
			"lt",
			"fi",
		]),
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		keywords: z.array(z.string()).optional(),
		content: z.string(),
	}),
	transform: async (document, context) => {
		const code = await compileMDX(context, document);
		return { ...document, code };
	},
});

export default defineConfig({
	content: [pages, blogPosts, projects],
});
