import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const linkInternalType = defineField({
  title: 'Внутрішнє посилання',
  description: 'Впишіть частину посилання без головного домену: www.ilovemyteam.online',
  name: 'linkInternal',
  type: 'object',
  icon: LinkIcon,
  components: {
    annotation: (props) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
    // defineField({
    //     name: "reference",
    //     type: "reference",
    //     weak: true,
    //     validation: Rule => Rule.required(),
    //     to: PAGE_REFERENCES,
    // }),
    defineField({
      name: 'reference',
      type: 'string',
      title: 'Повне посилання на сторінку на сайті',
    }),
  ],
})
