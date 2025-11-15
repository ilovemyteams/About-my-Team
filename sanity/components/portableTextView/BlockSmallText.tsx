import React from 'react'
import {BlockStyleProps} from 'sanity'

export const BlockSmallText = (props: BlockStyleProps) => {
  return <span style={{fontSize: 14}}>{props.children}</span>
}
