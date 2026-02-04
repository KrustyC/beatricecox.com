import { defineField, defineType } from "sanity";
import { validateIn } from "../utils";

export const titlesWithSideParagraphsBlockType = defineType({
    type: "document",
    name: "titlesWithSideParagraphsBlock",
    title: "Titles with Side Paragraphs Block",
    description: "",
    fields: [
        defineField({
            name: "title1",
            type: "string",
            title: "Title 1",
            hidden: false,
        }),
        defineField({
            name: "description1",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
            title: "Description 1",
            hidden: false,
        }),
        defineField({
            name: "title2",
            type: "string",
            title: "Title 2",
            hidden: false,
        }),
        defineField({
            name: "description2",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
            title: "Description 2",
            hidden: false,
        }),
        defineField({
            name: "colorCode",
            type: "string",
            title: "Color Code",
            hidden: false,
            validation: (Rule) =>
                Rule.custom((value) => validateIn(["#FFFFFF", "#EDB8B8"], value)),
            options: { list: ["#FFFFFF", "#EDB8B8"], layout: "radio" },
        }),
    ],
    preview: {
        select: {
            title1: "title1",
            title2: "title2",
        },
        prepare({ title1, title2 }) {
            return {
                title: `${title1 || "..."} / ${title2 || "..."}`,
                subtitle: "Two Titles & Paragraph",
            };
        },
    },
});
