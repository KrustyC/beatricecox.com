import { defineField, defineType } from "sanity";
import { validateIn } from "../utils";

export const titleAndTextBlockType = defineType({
    type: "document",
    name: "titleTextBlock",
    title: "Title & Text Block",
    description: "Block containing only a title and text",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            hidden: false,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Heading 1", value: "h1" },
                        { title: "Heading 2", value: "h2" },
                        { title: "Heading 3", value: "h3" },
                        { title: "Heading 4", value: "h4" },
                        { title: "Heading 5", value: "h5" },
                        { title: "Heading 6", value: "h6" },
                        { title: "Quote", value: "blockquote" },
                    ],
                    lists: [
                        { title: "Bullet", value: "bullet" },
                        { title: "Numbered", value: "number" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Strong", value: "strong" },
                            { title: "Emphasis", value: "em" },
                            { title: "Code", value: "code" },
                            { title: "Underline", value: "underline" },
                        ],
                        annotations: [
                            {
                                type: "object",
                                name: "link",
                                title: "url",
                                fields: [
                                    defineField({
                                        type: "string",
                                        name: "href",
                                        title: "URL",
                                        validation: (Rule) => Rule.required(),
                                    }),
                                    defineField({
                                        type: "string",
                                        name: "target",
                                        title: "Target",
                                        options: {
                                            list: [
                                                { value: "_blank", title: "Blank" },
                                                { value: "_parent", title: "Parent" },
                                            ],
                                        },
                                    }),
                                ],
                            },
                            {
                                type: "reference",
                                name: "reference",
                                title: "Reference",
                                to: [
                                    { type: "project" },
                                    { type: "titleTextBlock" },
                                    { type: "carouselBlock" },
                                    { type: "fullScreenBlock" },
                                    { type: "titlesWithSideParagraphsBlock" },
                                    { type: "projectInfoBlock" },
                                    { type: "gridBlock" },
                                    { type: "gridImages" },
                                    { type: "homepage" },
                                    { type: "aboutPage" },
                                ],
                            },
                            { type: "image" },
                            { type: "file" },
                        ],
                    },
                    of: [
                        {
                            type: "reference",
                            title: "Reference",
                            to: [
                                { type: "project" },
                                { type: "titleTextBlock" },
                                { type: "carouselBlock" },
                                { type: "fullScreenBlock" },
                                { type: "titlesWithSideParagraphsBlock" },
                                { type: "projectInfoBlock" },
                                { type: "gridBlock" },
                                { type: "gridImages" },
                                { type: "homepage" },
                                { type: "aboutPage" },
                            ],
                        },
                    ],
                },
                {
                    type: "reference",
                    title: "Reference",
                    to: [
                        { type: "project" },
                        { type: "titleTextBlock" },
                        { type: "carouselBlock" },
                        { type: "fullScreenBlock" },
                        { type: "titlesWithSideParagraphsBlock" },
                        { type: "projectInfoBlock" },
                        { type: "gridBlock" },
                        { type: "gridImages" },
                        { type: "homepage" },
                        { type: "aboutPage" },
                    ],
                },
                { type: "image" },
                { type: "file" },
                { type: "break" },
            ],
            title: "Description",
            hidden: false,
        }),
        defineField({
            name: "colorCode",
            type: "string",
            title: "Color Code",
            hidden: false,
            initialValue: "#FFFFFF",
            validation: (Rule) =>
                Rule.custom((value) => validateIn(["#FFFFFF", "#EDB8B8"], value)),
            options: { list: ["#FFFFFF", "#EDB8B8"], layout: "radio" },
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title || "Title and Text Block",
                subtitle: "Title & Text",
            };
        },
    },

});
