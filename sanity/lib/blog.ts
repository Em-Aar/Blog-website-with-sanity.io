import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "blog", // name of the document _type = 'blog' : a key in dataset
  type: "document", // document type
  title: "Blog", // title of the document to be called in studio ui
  fields: [
    defineField({
      name: "title",
      type: "string", // type of input you want to use
      title: "Blog Title",
      description: "Enter title of the blog",
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      description: "Summary of the Blog",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember(
        {
          type: "string",
        }
    )],
      title: "Tags",
      options: {
        layout: "tags",
      },

    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "Image of the blog",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
          description: "Caption of the image",
        }),
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember(
        {
          type: "block",
        },
    )],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      description: "Author of the blog",
      to: [
        {
          type: "author",
        },
      ],
    }),
  ],

});
