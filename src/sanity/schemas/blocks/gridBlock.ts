import { defineField, defineType } from "sanity";

import { validateIn } from "../utils";

export const gridBlockType = defineType({
    type: "document",
    name: "gridBlock",
    title: "Grid Block",
    description: "",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            hidden: false,
            description:
                "This field won't appear on screen but is useful for Contentful",
        }),
        defineField({
            name: "spacing",
            type: "string",
            title: "Spacing",
            hidden: false,
            validation: (Rule) =>
                Rule.custom((value) =>
                    validateIn(["xs", "sm", "md", "lg", "xl", "2xl"], value)
                ),
            options: {
                list: ["xs", "sm", "md", "lg", "xl", "2xl"],
                layout: "dropdown",
            },
        }),
        defineField({
            name: "images",
            type: "array",
            of: [{ type: "reference", to: [{ type: "gridImages" }] }],
            title: "Images",
            hidden: false,
        }),

    ],
    preview: {
        select: { title: "title", images: "images" },
        prepare({ title, images }) {
            return {
                title: title || "Grid Block",
                subtitle: `Grid Images - ${images?.length || 0} images`,
            };
        },
    },
});

export const gridImagesType = defineType({
    type: "document",
    name: "gridImages",
    title: "Grid Images",
    description: "",
    fields: [
        defineField({
            name: "images",
            type: "array",
            of: [{ type: "image" }],
            title: "Images",
            hidden: false,
        }),
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            hidden: false,
            description: "This won't appear on screen but it's useful for Contentful",
        }),
    ],
    preview: {
        select: {
            images: "images",
        },
        prepare({ images }) {
            return {
                title: `Grid Images - ${images?.length || 0} images`,
            };
        },
    },
});

export const breakType = defineType({
    name: "break",
    title: "Break",
    type: "object",
    fields: [
        defineField({
            name: "style",
            type: "string",
            options: {
                list: [
                    { title: "Line break", value: "lineBreak" },
                    { title: "Read more", value: "readMore" },
                ],
            },
        }),
    ],
});