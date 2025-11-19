import {FaPencilRuler} from 'react-icons/fa'
import {FaList} from 'react-icons/fa6'
import {LuAArrowDown, LuAArrowUp, LuBaseline, LuHeading} from 'react-icons/lu'
import {TbBaselineDensityLarge} from 'react-icons/tb'
import {defineArrayMember, defineField} from 'sanity'

import {BlockListUlWithMargins} from '../../components/portableTextView/BlockListUlWithMargins'
import {BlockMarginsInputPreview} from '../../components/portableTextView/BlockMarginsInputPreview'
import {BlockSmallText} from '../../components/portableTextView/BlockSmallText'
import {BlockSubtitle} from '../../components/portableTextView/BlockSubtitle'
import {BlockSubtitleWithMark} from '../../components/portableTextView/BlockSubtitleWithMark'
import {marginsForBlockType} from '../../constants'

export const portableTextSimpleType = defineField({
  name: 'portableTextSimple',
  type: 'array',
  of: [
    defineArrayMember({
      lists: [
        {title: 'Список ненумерований', value: 'bullet'},
        {
          title: 'Список ненумерований із відступом',
          value: 'bulletWithMargin',
          icon: FaList,
          component: BlockListUlWithMargins,
        },
        {title: 'Список нумерований', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Підзаголовок',
            value: 'subtitle',
            icon: LuHeading,
            component: BlockSubtitle,
          },

          {
            title: 'Маленький текст',
            value: 'small',
            icon: LuAArrowDown,
            component: BlockSmallText,
          },
          {
            title: 'Звичайний текст',
            value: 'medium',
            icon: LuBaseline,
            component: BlockSmallText,
          },
          {
            title: 'Великий текст',
            value: 'large',
            icon: LuAArrowUp,
            component: BlockSmallText,
          },
        ],
        annotations: [
          {
            name: 'linkEmail',
            type: 'linkEmail',
          },
          {
            name: 'linkInternal',
            type: 'linkInternal',
          },
          {
            name: 'linkExternal',
            type: 'linkExternal',
          },
        ],
      },

      styles: [
        {
          title: 'Маленький текст',
          value: 'small',
          component: BlockSmallText,
        },
        {
          title: 'Звичайний текст',
          value: 'normal',
        },
        {
          title: 'Підзаголовок',
          value: 'subtitle',
          component: BlockSubtitle,
        },
        {
          title: 'Підзаголовок з іконкою',
          value: 'subtitleWithIcon',
          icon: FaPencilRuler,
          component: BlockSubtitleWithMark,
        },
      ],

      type: 'block',
    }),
    defineArrayMember({
      type: 'object',
      name: 'margins',
      title: 'Відступ',
      icon: TbBaselineDensityLarge,
      fields: [
        {
          type: 'string',
          name: 'marginValue',
          title: 'Виберіть необхідний відступ',
          initialValue: marginsForBlockType[0].value,
          options: {
            list: marginsForBlockType,
            layout: 'radio',
          },
          components: {
            input: BlockMarginsInputPreview,
          },
        },
      ],
      preview: {
        select: {
          title: 'marginValue',
        },
        prepare(selection) {
          const {title} = selection
          const item = marginsForBlockType.find((m) => m.value === title) || marginsForBlockType[0]
          return {
            title: item ? `${item.title} відступ` : 'Невідомий відступ',
            subtitle: item.margin === 0 ? '⚠ Без відступу — рекомендовано видалити' : undefined,
          }
        },
      },
    }),
  ],
})
