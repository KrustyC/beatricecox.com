import { defineField, defineType } from "sanity";

export const twoTitlesAndParagraphBlock = defineType({
  name: "twoTitlesAndParagraphBlock",
  title: "Two Titles and Paragraph Block",
  type: "object",
  fields: [
    defineField({
      name: "title1",
      title: "First Title",
      type: "string",
    }),
    defineField({
      name: "description1",
      title: "First Description",
      type: "text",
    }),
    defineField({
      name: "title2",
      title: "Second Title",
      type: "string",
    }),
    defineField({
      name: "description2",
      title: "Second Description",
      type: "text",
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
