import { defineField, defineType } from "sanity";

export const carouselBlock = defineType({
  name: "carouselBlock",
  title: "Carousel Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "colorCode",
      title: "Background Color Code",
      type: "string",
      description: "HEX color code for background (e.g., #ffffff)",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },
      ],
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
