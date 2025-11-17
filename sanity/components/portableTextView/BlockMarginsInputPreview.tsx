import {Card, Grid, Radio} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {set, StringInputProps, StringSchemaType} from 'sanity'
import styled from 'styled-components'

import {marginsForBlockType} from '../../constants'

const StyledLabel = styled('label')({
  '&:hover': {
    cursor: 'pointer',
  },
})

export const BlockMarginsInputPreview = (props: StringInputProps<StringSchemaType>) => {
  const {value, onChange} = props

  // const fieldValue = props?.value;
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      onChange(set(event.currentTarget.value))
    },
    [onChange],
  )

  return (
    <Grid columns={4} gap={2} gapX={2}>
      {marginsForBlockType.map((item) => (
        <StyledLabel htmlFor={item.value} key={item.value}>
          <Card
            border
            shadow={item.value === value ? 2 : 0}
            tone={item.value === value ? 'caution' : 'transparent'}
            style={{
              width: '100%',
              aspectRatio: 2 / 1,
              borderWidth: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            sizing={'border'}
            overflow={'hidden'}
          >
            {item.title}
          </Card>
          <Radio
            checked={item.value === value}
            value={item.value}
            onChange={handleChange}
            name="faq-blocks"
            id={item.value}
            style={{display: 'none'}}
          />
        </StyledLabel>
      ))}
    </Grid>
  )
}
