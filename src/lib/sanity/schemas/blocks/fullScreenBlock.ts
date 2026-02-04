import { defineField, defineType } from "sanity";

export const fullScreenBlockType = defineType({
  type: "document",
  name: "fullScreenBlock",
  title: "Full Screen Block",
  description: "Block to add a full screen image block",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      hidden: false,
      description:
        "This field does not appear but otherwise it's unclear on Contentful what it is",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      hidden: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Full Screen Block",
        subtitle: "Full Screen",
        media,
      };
    },
  },
});
