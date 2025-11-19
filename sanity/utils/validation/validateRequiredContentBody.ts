import {Faq} from '../../types'

type MainBlockType = NonNullable<Faq['mainContent']>[number] | undefined

export const validateRequiredContentBody = (value: MainBlockType) => {
  if (!value) return "Заповніть обов'язкові поля для блоку: тип секції і основний контент для блоку"
  const isValid = value.mainContentText && value.mainContentText.length > 0
  if (!isValid) return 'Заповніть основний контент для блоку'
  return true
}
