import { colors, styled } from '@pismo/bolt-core'
import * as React from 'react'

const Wrapper = styled.div`
  display: flex;
`

const Input = styled.input`
  visibility: hidden;
`

const LabelWrapper = styled.label<{ checked: boolean }>`
  padding: 2px;
  width: 40px;
  height: 20px;
  background-color: #ddd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  &:before {
    position: absolute;
    content: '';
    top: 1px;
    right: 1px;
    left: 1px;
    bottom: 1px;
    background-color: ${props => (props.checked ? '#F9CAAF' : '#F1F1F1')};
    border-radius: 20px;
    transition: background 0.4s;
  }
  &:after {
    position: absolute;
    content: '';
    top: 1px;
    left: 1px;
    bottom: 1px;
    width: 22px;
    background-color: ${props => (props.checked ? '#EC8246' : '#FFF')};
    margin-left: ${props => (props.checked ? '20px' : null)};
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: margin 0.4s;
  }
`

const Label = styled.span<{ checked: boolean }>`
  margin-left: 3rem;
  color: ${props => (props.checked ? colors.grey800 : '#A3ACBC')};
  font-size: 0.875rem;
`

export interface Props {
  name?: string
  checked?: boolean
  children?: string
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void
}

export const Checkbox = ({ name, onChange, checked, children }: Props) => (
  <Wrapper>
    <Input type={'checkbox'} id={`checkbox-toggle-${name}`} name={name} onChange={onChange} checked={checked} />
    <LabelWrapper htmlFor={`checkbox-toggle-${name}`} checked={checked}>
      <Label checked={checked}>{children}</Label>
    </LabelWrapper>
  </Wrapper>
)
