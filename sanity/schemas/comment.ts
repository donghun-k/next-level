import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'postRef',
      title: 'PostRef',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(10),
    }),
    defineField({
      name: 'authorId',
      title: 'AuthorId',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: 'createdAt',
      title: 'CreatedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reply',
      title: 'Reply',
      type: 'object',
      fields: [
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          validation: (Rule) => Rule.required().min(10).max(100),
        }),
        defineField({
          name: 'createdAt',
          title: 'CreatedAt',
          type: 'datetime',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
