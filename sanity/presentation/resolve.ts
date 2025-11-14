import {defineLocations, PresentationPluginOptions} from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    faq: defineLocations({
      select: {
        slug: 'pageSlug.current',
      },
      resolve: (doc) => ({
        locations: [
          {title: 'Сторінка зі списком питань', href: `/faq`},
          {
            title: 'Сторінка з розкритим питанням',
            href: `/faq/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
}
