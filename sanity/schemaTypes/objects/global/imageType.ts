import {defineField, defineType} from 'sanity'

import {validateIsRequired} from '../../../utils/validateIsRequired'

export const imageType = defineType({
  name: 'imageType',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Зображення',
      description: 'Додайте зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'internationalizedArrayString',
      title: 'Опис',
      description: 'Додайте опис, що зображено на картинці на трьох мовах',
      validation: (rule) => rule.custom(validateIsRequired),
    }),
  ],
})
