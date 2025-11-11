import {FaList} from 'react-icons/fa6'
import {LiaTextHeightSolid} from 'react-icons/lia'
import {LuPencilRuler} from 'react-icons/lu'
import {TbBaselineDensityLarge, TbBaselineDensityMedium} from 'react-icons/tb'
import {defineArrayMember, defineField} from 'sanity'

import {BlockListUlWithMargins} from '../../components/portableTextView/BlockListUlWithMargins'
import {BlockNormalText} from '../../components/portableTextView/BlockNormalText'
import {BlockSmallText} from '../../components/portableTextView/BlockSmallText'
import {BlockSubtitle} from '../../components/portableTextView/BlockSubtitle'
import {BlockSubtitleWithMark} from '../../components/portableTextView/BlockSubtitleWithMark'

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
            title: 'Курсив',
            value: 'em',
          },
          {
            title: 'Жирний',
            value: 'strong',
          },
          {
            title: 'Шрифт для заголовка',
            value: 'caviar',
            icon: LiaTextHeightSolid,
            component: BlockSubtitle,
          },

          {
            title: 'Нижній відступ маленький',
            value: 'marginBottomSm',
            icon: TbBaselineDensityMedium,
            component: (props) => <span style={{color: 'green'}}>{props.children}</span>,
          },
          {
            title: 'Нижній відступ середній',
            value: 'marginBottomMd',
            icon: TbBaselineDensityLarge,
            component: (props) => <span style={{color: 'purple'}}>{props.children}</span>,
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
          title: 'Звичаний текст',
          value: 'medium',
          component: BlockNormalText,
        },
        {
          title: 'Підзаголовок',
          value: 'subtitle',
          component: BlockSubtitle,
        },
        {
          title: 'Підзаголовок з маркером',
          icon: LuPencilRuler,
          value: 'markered',
          component: BlockSubtitleWithMark,
        },
      ],
      type: 'block',
    }),
  ],
})
