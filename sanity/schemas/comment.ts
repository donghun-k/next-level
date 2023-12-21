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
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required().min(8).max(20),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(100),
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
  preview: {
    select: {
      title: 'postRef.title',
      subtitle: 'content',
    },
  },
})
