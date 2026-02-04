import { defineField, defineType } from "sanity";

export const projectInfoBlockType = defineType({
    type: "document",
    name: "projectInfoBlock",
    title: "Project Info Block",
    description: "Block containing all the basic project infos",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            hidden: false,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subtitle",
            type: "string",
            title: "Subtitle",
            hidden: false,
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
        defineField({ name: "team", type: "string", title: "Team", hidden: false }),
        defineField({
            name: "client",
            type: "string",
            title: "Client",
            hidden: false,
        }),
        defineField({ name: "role", type: "string", title: "Role", hidden: false }),
        defineField({
            name: "skills",
            type: "string",
            title: "Skills",
            hidden: false,
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title || "Project Info Block",
                subtitle: "Project Info",
            };
        },
    },
});
