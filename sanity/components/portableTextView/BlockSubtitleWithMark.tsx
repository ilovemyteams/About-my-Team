import {LuPencilRuler} from 'react-icons/lu'
import {BlockStyleProps} from 'sanity'

export const BlockSubtitleWithMark = (props: BlockStyleProps) => {
  return (
    <span style={{fontWeight: 700}}>
      <LuPencilRuler style={{marginRight: '4px'}} />
      {props.children}
    </span>
  )
}
