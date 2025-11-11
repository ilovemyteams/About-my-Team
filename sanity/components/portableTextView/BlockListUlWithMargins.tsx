import {Box} from '@sanity/ui'
import {BlockListItemProps} from 'sanity'
import {styled} from 'styled-components'

const StyleBox = styled(Box)({
  position: 'relative',
  marginLeft: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  '&:before': {
    display: 'block',
    content: "''",
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'absolute',
    left: '-18px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})
export const BlockListUlWithMargins = (props: BlockListItemProps) => {
  return <StyleBox>{props.renderDefault(props)}</StyleBox>
}
