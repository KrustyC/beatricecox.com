import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Used to sort projects in the list",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Packaging", value: "Packaging" },
          { title: "UX/UI", value: "UX/UI" },
          { title: "Industrial", value: "Industrial" },
          { title: "Packaging & UI", value: "Packaging & UI" },
          { title: "Other", value: "OTHER" },
        ],
      },
    }),
    defineField({
      name: "categoryText",
      title: "Category Text",
      type: "string",
      description: "Custom text to display for category",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      description: "Short intro shown in project cards",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "SEO meta description",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "string",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "isPasswordProtected",
      title: "Password Protected",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "protectionPassword",
      title: "Protection Password",
      type: "string",
      hidden: ({ parent }) => !parent?.isPasswordProtected,
    }),
    defineField({
      name: "comingSoon",
      title: "Coming Soon",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "blocks",
      title: "Content Blocks",
      type: "array",
      of: [
        { type: "projectInfoBlock" },
        { type: "carouselBlock" },
        { type: "fullScreenBlock" },
        { type: "gridBlock" },
        { type: "titleAndTextBlock" },
        { type: "twoTitlesAndParagraphBlock" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      category: "category",
    },
    prepare({ title, media, category }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
