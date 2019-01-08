import * as React from 'react'

import { Small, styled } from '@pismo/bolt-core'

const InputField = styled.input`
  outline: none;
  overflow: visible;
  margin: 0;
  box-sizing: border-box;
  background-color: rgba(236, 238, 242, 0.5);
  color: #151a21;
  padding: 0.75rem 0.75rem 0.75rem 0.2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  border-bottom: 0.125rem solid #c1c7d4;
  border-radius: 0;

  &:hover,
  &:focus {
    border-color: #151a21;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  &:disabled {
    color: #8692a6;
    border-bottom: 1px dashed;
    background-color: rgba(236, 238, 242, 0.5);
    box-shadow: none;
  }
`

const TextWrapper = styled.div<{ flex?: string }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  flex: ${({ flex = '1' }) => flex};
`

const Label = styled(Small)`
  margin-bottom: 0.1875rem;
`

export const TextField = ({ flex, label, ...props }) => {
  return (
    <TextWrapper flex={flex}>
      <Label>{label}</Label>
      <InputField {...props} />
    </TextWrapper>
  )
}
