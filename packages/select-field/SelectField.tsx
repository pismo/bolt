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
  padding: 0.75rem 0.75rem 0.7rem 0.75rem;
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
`

const SelectWrapper = styled.div<{ flex?: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 1rem;
  flex: ${({ flex = '1' }) => flex};
`

const Label = styled(Small)`
  margin-bottom: 0.1875rem;
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
  value: string | number
  onChange: () => void
  placeholder: string
  options: Option[]
}

const renderListOptions = (options: Option[]) =>
  options.map(({ label, value }) => (
    <option key={label} value={value}>
      {label}
    </option>
  ))

export const SelectField = ({ flex, label, name, value, onChange, placeholder, options }: SelectFieldProps) => {
  return (
    <SelectWrapper flex={flex}>
      <Label>{label}</Label>
      <SelectInput name={name} value={value} onChange={onChange} placeholder={placeholder}>
        {renderListOptions(options)}
      </SelectInput>
      <ArrowDownIcon />
    </SelectWrapper>
  )
}
