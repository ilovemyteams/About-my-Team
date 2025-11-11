import {InternationalizedArrayPortableColorTitle} from '../types'

export const getEnglishTitleFromBlocks = (title: InternationalizedArrayPortableColorTitle) => {
  const engTitleBlock = title?.find((block) => block._key === 'en')?.value

  if (engTitleBlock) {
    return (
      engTitleBlock.flatMap(({children}) => children?.map((child) => child.text || '')).join(' ') ||
      'No title'
    )
  }
  return 'No title'
}

export const getUkrainianTitleFromBlocks = (title: InternationalizedArrayPortableColorTitle) => {
  const uaTitleBlock = title?.find((block) => block._key === 'ua')?.value

  if (uaTitleBlock) {
    return (
      uaTitleBlock.flatMap(({children}) => children?.map((child) => child.text || '')).join(' ') ||
      'Не вказано'
    )
  }
  return 'Не вказано'
}
