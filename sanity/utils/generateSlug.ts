import {SanityDocument} from 'next-sanity'

import {InternationalizedArrayString, InternationalizedArrayText} from '../types'

export const generateSlug = (doc: SanityDocument, sourceField: string, maxLength = 100) => {
  const source = doc[sourceField] as InternationalizedArrayString | InternationalizedArrayText

  const pageTitle = source.find((item) => item._key === 'en')?.value || 'title'

  const pageSlug = pageTitle
    .toLowerCase()
    .split('\\n')
    .join('')
    .replace(new RegExp('[.,/#!$%^&*;:{}=\\-_~()?\'"`]', 'g'), '')
    .replace(/\s+/g, '-')

  return pageSlug.slice(0, maxLength)
}
