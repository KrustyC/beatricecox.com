import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "About Page",
      readOnly: true,
    }),
    defineField({
      name: "headerText",
      title: "Header Text",
      type: "blockContent",
      description: "The main header text for the about page",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Page",
      };
    },
  },
});
