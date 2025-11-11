import {PortableTextBlock, toPlainText} from 'next-sanity'

import {Faq, InternationalizedArrayString, InternationalizedArrayText} from '../../src/sanity/types'
import {getUkrainianTitleFromIntArrays} from './getEnglishTitleFromIntArrays'

const extractUaVersion = (
  input: InternationalizedArrayString | InternationalizedArrayText | undefined,
) => {
  return input ? getUkrainianTitleFromIntArrays(input) : ''
}

export const getAllTextFromFaqText = (faqDoc: Faq) => {
  const {question, shortAnswer, additionalTextShortAnswer, mainContent, orderContent} = faqDoc

  //Get all text from faq document
  const uaQuestion = extractUaVersion(question)
  const uaShortAnswer = extractUaVersion(shortAnswer)
  const uaAdditionalTextShortAnswer = extractUaVersion(additionalTextShortAnswer)

  const uaOrderText = extractUaVersion(orderContent?.orderText)

  const uaMainContent = mainContent
    ? mainContent.reduce(
        (
          texts,
          {
            mainContentTitle,

            mainContentTopText,
            mainContentText,
          },
        ) => {
          const itemTitle = extractUaVersion(mainContentTitle)
          const itemTopText = extractUaVersion(mainContentTopText)

          const itemMainContent = mainContentText
            ? mainContentText.reduce((acc, subitem) => {
                const uaSubtitle = extractUaVersion(subitem.contentBlockTitle)
                const uaTextBlock = toPlainText(
                  subitem.contentBlockText?.find((item) => item._key === 'ua')
                    ?.value as PortableTextBlock[],
                )

                return acc + uaSubtitle + uaTextBlock
              }, '')
            : ''
          return texts + itemTitle + itemTopText + itemMainContent
        },
        '',
      )
    : ''

  return uaQuestion + uaShortAnswer + uaAdditionalTextShortAnswer + uaOrderText + uaMainContent
}
