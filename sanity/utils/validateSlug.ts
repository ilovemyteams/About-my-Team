import {Slug} from '../types'

export const validateSlug = (maxLength: number) => {
  return (value: Slug | undefined) => {
    const currentSlug = value && value.current
    if (!currentSlug) {
      return true
    }

    if (currentSlug.length >= maxLength) {
      return `Посилання повинно бути не більше ${maxLength} символів`
    }

    return true
  }
}

export function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    // case "project":
    //     return slug ? `/projects/${slug}` : undefined;
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
