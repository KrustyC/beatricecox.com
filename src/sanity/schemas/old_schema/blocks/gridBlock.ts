import { defineField, defineType } from "sanity";

export const gridBlock = defineType({
  name: "gridBlock",
  title: "Grid Block",
  type: "object",
  fields: [
    defineField({
      name: "spacing",
      title: "Spacing",
      type: "string",
      options: {
        list: [
          { title: "Extra Small", value: "xs" },
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Extra Large", value: "xl" },
          { title: "Extra Extra Large", value: "2xl" },
        ],
      },
      initialValue: "md",
    }),
    defineField({
      name: "gridRows",
      title: "Grid Rows",
      type: "array",
      of: [
        {
          type: "object",
          name: "gridRow",
          title: "Grid Row",
          fields: [
            {
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
            },
          ],
          preview: {
            select: {
              images: "images",
            },
            prepare({ images }) {
              return {
                title: `Row with ${images?.length || 0} images`,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      gridRows: "gridRows",
    },
    prepare({ gridRows }) {
      return {
        title: `Grid Block - ${gridRows?.length || 0} rows`,
        subtitle: "Grid",
      };
    },
  },
});
