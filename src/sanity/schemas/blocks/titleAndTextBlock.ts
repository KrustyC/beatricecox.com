import { defineField, defineType } from "sanity";

export const titleAndTextBlock = defineType({
  name: "titleAndTextBlock",
  title: "Title and Text Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "blockContent",
    }),
    defineField({
      name: "colorCode",
      title: "Background Color Code",
      type: "string",
      description: "HEX color code for background (e.g., #ffffff)",
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
