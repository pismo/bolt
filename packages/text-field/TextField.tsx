import { Small, styled } from '@pismo/bolt-core'
import * as React from 'react'
import * as InputMask from 'react-input-mask'

const inputStyle = `
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

const InputField = styled.input`
  ${inputStyle}
`

const InputMaskedField = styled(InputMask)`
  ${inputStyle}
`

const TextWrapper = styled.div<{ flex?: string }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  flex: ${({ flex = '1' }) => flex};
`

const Label = styled(Small)<{ hasError?: boolean }>`
  margin-bottom: 0.1875rem;
  ${({ hasError }) => hasError && `color: red`};
`

export interface TextieldProps {
  flex?: string
  label: string
  field?: any
  form?: any
  error?: string
  mask: string
  value: string | number
  onChange: (evt: any) => void
  placeholder: string
}

export const TextField = ({ flex, label, field, mask, error, form, ...props }: TextieldProps) => (
  <TextWrapper flex={flex}>
    <Label hasError={Boolean(error)}>
      {label} {error && <> ({error})</>}
    </Label>
    {mask ? <InputMaskedField mask={mask} {...field} {...props} /> : <InputField {...field} {...props} />}
  </TextWrapper>
)
