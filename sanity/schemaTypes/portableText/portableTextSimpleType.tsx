import {FaPencilRuler} from 'react-icons/fa'
import {FaList} from 'react-icons/fa6'
import {LuAArrowDown, LuAArrowUp, LuHeading} from 'react-icons/lu'
import {TbBaselineDensityLarge, TbBaselineDensityMedium} from 'react-icons/tb'
import {defineArrayMember, defineField} from 'sanity'

import {BlockListUlWithMargins} from '../../components/portableTextView/BlockListUlWithMargins'
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
            title: 'Підзаголовок',
            value: 'subtitle',
            icon: LuHeading,
            component: BlockSubtitle,
          },
          {
            title: 'Підзаголовок з іконкою',
            value: 'subtitleWithIcon',
            icon: FaPencilRuler,
            component: BlockSubtitleWithMark,
          },

          {
            title: 'Маленький текст',
            value: 'small',
            icon: LuAArrowDown,
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
          title: 'Нижній відступ маленький',
          value: 'marginBottomSm',
          icon: TbBaselineDensityMedium,
          component: (props) => (
            <div>
              <span>{props.renderDefault(props)}</span>
              <p style={{backgroundColor: 'lightblue', paddingBottom: '12px'}} />
            </div>
          ),
        },
        {
          title: 'Нижній відступ середній',
          value: 'marginBottomMd',
          icon: TbBaselineDensityLarge,
          component: (props) => (
            <div>
              <span>{props.renderDefault(props)}</span>
              <p style={{backgroundColor: 'lightcyan', paddingBottom: '24px'}} />
            </div>
          ),
        },
      ],

      type: 'block',
    }),
  ],
})
