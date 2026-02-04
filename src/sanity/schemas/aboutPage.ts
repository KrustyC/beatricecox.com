import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  type: "document",
  name: "aboutPage",
  title: "👩🏼\u200d💼 About Page",
  description: "Where you can change the copy about the about page",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      hidden: false,
    }),
    defineField({
      name: "headerText",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
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
                to: [{ type: "project" }],
              },
            ],
          },
        },
      ],
      title: "Header Text",
      hidden: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: { select: { title: "title" } }
});
