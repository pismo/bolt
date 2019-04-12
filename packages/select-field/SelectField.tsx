import * as React from 'react'

import { Small, styled } from '@pismo/bolt-core'
import { MdKeyboardArrowDown } from 'react-icons/md'

const SelectInput = styled.select`
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

const SelectWrapper = styled.div<{ flex?: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 1rem;
  flex: ${({ flex = '1' }) => flex};
`

const Label = styled(Small)<{ hasError?: boolean }>`
  margin-bottom: 0.1875rem;
  ${({ hasError }) => hasError && `color: red`};
`

const ArrowDownIcon = styled(MdKeyboardArrowDown)`
  position: absolute;
  font-size: 1.4rem;
  right: 0.5rem;
  top: 50%;
`

export interface Option {
  label: string
  value: string
}

export interface SelectFieldProps {
  flex?: string
  label: string
  name: string
  error?: string
  value: string | number
  field?: any
  onChange: (evt: any) => void
  placeholder: string
  options: Option[]
}

const renderListOptions = (options: Option[]) =>
  options.map(({ label, value }, index) => (
    <option key={label || index} value={value}>
      {label}
    </option>
  ))

export const SelectField = ({ flex, label, error, field, options, ...props }: SelectFieldProps) => {
  return (
    <SelectWrapper flex={flex}>
      <Label hasError={Boolean(error)}>
        {label} {error && <> ({error})</>}
      </Label>
      <SelectInput {...field} {...props}>
        {renderListOptions(options)}
      </SelectInput>
      <ArrowDownIcon />
    </SelectWrapper>
  )
}
