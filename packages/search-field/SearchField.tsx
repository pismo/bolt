import * as React from 'react'

import { styled } from '@pismo/bolt-core'
import { MdSearch } from 'react-icons/md'

const SearchIcon = styled(MdSearch)`
  position: absolute;
  color: #a3acbc;
  font-size: 2.25rem;
  margin-top: 0.5rem;
  padding: 0 1rem;
`

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-color: #c1c7d4;
  background-color: rgba(236, 238, 242, 0.5);
  color: #151a21;
  padding: 0.75rem;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);
  text-indent: 2em;
  font-size: 1.5rem;
  border-width: 0.125rem;
  border-radius: 0;
  outline: none;
  overflow: visible;
  border-top-width: 0 !important;
  border-left-width: 0 !important;
  border-right-width: 0 !important;

  &:hover {
    border-color: #151a21;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  &:focus {
    background-color: #fff;
  }
  &::placeholder {
    color: #c1c7d4;
  }
`

export interface SearchFieldInterface {
  defaultValue?: string
  placeholder?: string
  onChange: (arg0?: string) => void
}

export const SearchField = ({ defaultValue, onChange, placeholder }: SearchFieldInterface) => (
  <>
    <SearchIcon />
    <SearchInput
      autoFocus
      defaultValue={defaultValue}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </>
)
