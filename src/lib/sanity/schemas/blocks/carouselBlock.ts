import { defineField, defineType } from "sanity";

import { validateIn } from "../utils";

export const carouselBlockType = defineType({
  type: "document",
  name: "carouselBlock",
  title: "Carousel Block",
  description: "A block used to display a carousel of images",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      hidden: false,
    }),
    defineField({
      name: "carouselDescription",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      title: "Description",
      hidden: false,
    }),
    defineField({
      name: "colorCode",
      type: "string",
      title: "Color Code",
      hidden: false,
      validation: (Rule) =>
        Rule.custom((value) => validateIn(["#FFFFFF", "#EDB8B8"], value)),
      options: { list: ["#FFFFFF", "#EDB8B8"], layout: "dropdown" },
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      title: "Images",
      hidden: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
    prepare({ title, media }) {
      return {
        title: title || "Carousel Block",
        subtitle: "Carousel",
        media,
      };
    },
  },
});
