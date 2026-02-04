import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Homepage",
      readOnly: true,
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "blockContent",
      description: "Quote displayed in the hero section",
    }),
    defineField({
      name: "mainText",
      title: "Main Text",
      type: "blockContent",
      description: "Main text displayed in the hero section",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage",
      };
    },
  },
});

