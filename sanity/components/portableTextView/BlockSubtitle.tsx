import React from 'react'
import {BlockStyleProps} from 'sanity'

export const BlockSubtitle = (props: BlockStyleProps) => {
  return <span style={{fontSize: 16, fontWeight: 700}}>{props.children}</span>
}
