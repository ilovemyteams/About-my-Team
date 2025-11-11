import {useEffect, useState} from 'react'
import {DocumentActionProps, useDocumentOperation} from 'sanity'

const getReadingTimeEstimation = (text: string): number => {
  return Math.ceil(text.split(' ').length / 180)
}

import {Faq} from '../../src/sanity/types'
import {getAllTextFromFaqText} from '../utils/getAllTextFromFaqDoc'

export function SetEstimateTimeAndPublishAction(props: DocumentActionProps) {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.draft])

  return {
    disabled: !!publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish & Update',
    onHandle: () => {
      const document = props.draft || props.published

      const allText = document ? getAllTextFromFaqText(document as Faq) : ''

      const estimateTime = getReadingTimeEstimation(allText)

      setIsPublishing(true)

      patch.execute([{set: {estimateReadTime: estimateTime}}])

      publish.execute()

      props.onComplete()
    },
  }
}
