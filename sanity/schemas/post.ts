import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
      validation: (Rule) => Rule.required(),
      options: {
        imageUrl: (imageAsset) => `${imageAsset.url}?w=600`,
      },
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      validation: (Rule) => Rule.required(),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
  },
})
