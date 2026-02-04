import { defineField, defineType } from "sanity";
import { validateIn } from "./utils";


export const projectType = defineType({
    type: "document",
    name: "project",
    title: "Project",
    description:
        "Project with title, slug, year, main image, thumbnailImage, intro (short text), description and a list of blocks. All blocks can be quite different and they should have their own content type and be linked back to the main project",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            hidden: false,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            hidden: false,
            validation: (Rule) => Rule.required(),
            options: { source: "title" },
        }),
        defineField({
            name: "metaDescription",
            type: "string",
            title: "Meta Description",
            hidden: false,
        }),
        defineField({
            name: "intro",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
            title: "Intro",
            hidden: false,
        }),
        defineField({
            name: "order",
            type: "number",
            title: "Order",
            hidden: false,
            validation: (Rule) => Rule.integer().min(1).max(30),
        }),
        defineField({
            name: "category",
            type: "string",
            title: "Category",
            hidden: false,
            validation: (Rule) =>
                Rule.custom((value) =>
                    validateIn(
                        ["Packaging", "UX/UI", "Industrial", "Packaging & UI", "OTHER"],
                        value
                    )
                ),
            options: {
                list: ["Packaging", "UX/UI", "Industrial", "Packaging & UI", "OTHER"],
                layout: "radio",
            },
        }),
        defineField({
            name: "categoryText",
            type: "string",
            title: "Category Text",
            hidden: false,
        }),
        defineField({
            name: "thumbnailImage",
            type: "image",
            title: "Thumbnail image",
            hidden: false,
        }),
        defineField({
            name: "mainImage",
            type: "image",
            title: "Main image",
            hidden: false,
        }),
        defineField({
            name: "isPasswordProtected",
            type: "boolean",
            title: "Is password protected?",
            hidden: false,
            description: "Should this project only be visible behind a password?",
            initialValue: false,
        }),
        defineField({
            name: "protectionPassword",
            type: "string",
            title: "Protection Password",
            hidden: false,
            description:
                'This only works if "is password protected?" is set to true and it is used as a password to show the page',
        }),
        defineField({
            name: "comingSoon",
            type: "boolean",
            title: "Coming Soon",
            hidden: false,
            initialValue: false,
        }),
        defineField({
            name: "blocks",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        { type: "carouselBlock" },
                        { type: "titleTextBlock" },
                        { type: "fullScreenBlock" },
                        { type: "titlesWithSideParagraphsBlock" },
                        { type: "projectInfoBlock" },
                        { type: "gridBlock" },
                    ],
                },
            ],
            title: "Blocks",
            hidden: false,
            options: { layout: "grid" },
        }),
    ],
    preview: { select: { title: "title" } },
});

