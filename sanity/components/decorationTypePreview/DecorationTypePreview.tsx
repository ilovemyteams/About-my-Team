import {Card, Flex, Radio} from '@sanity/ui'
import {FormEvent, useCallback} from 'react'
import {set, StringInputProps, StringSchemaType} from 'sanity'
import styled from 'styled-components'

import {DECORATION_TYPE_LIST} from '../../constants'

const StyledLabel = styled('label')({
  '&:hover': {
    cursor: 'pointer',
  },
})

export const DecorationTypePreview = (props: StringInputProps<StringSchemaType>) => {
  const {value, onChange} = props

  // const fieldValue = props?.value;
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      onChange(set(event.currentTarget.value))
    },
    [onChange],
  )

  return (
    <Flex gap={2}>
      {DECORATION_TYPE_LIST.map((item) => (
        <StyledLabel htmlFor={item.value} key={item.value}>
          <Card
            border
            shadow={item.value === value ? 2 : 0}
            tone={item.value === value ? 'caution' : 'transparent'}
            style={{
              width: '100%',
              aspectRatio: 1 / 1,
              borderWidth: '4px',
            }}
            sizing={'border'}
            overflow={'hidden'}
          >
            <img
              src={`/images/decoration/${item.value}.jpg`}
              alt={item.title}
              width={150}
              height={150}
              style={{
                display: 'block',
                aspectRatio: '1/1',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
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
    </Flex>
  )
}
