import React from 'react'
import styled from '../styled'
import cleanButton from './polished/cleanButton'

export interface ButtonProps {
  onClick(event: React.FormEvent<EventTarget>): void
}

export const Button = styled.button<ButtonProps>`
  ${cleanButton()};
  border-radius: 4px;
  border: solid 2px #3cb4e0;
  background-color: transparent;
  color: #3cb4e0;
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  padding: 0 2rem;
  transition: 0.45s;
  height: 48px;

  &:hover {
    background-color: #3cb4e0;
    color: #fff;
  }

  &:active {
    border: solid 2px #11556e;
    background-color: #11556e;
    color: #fff;
  }

  &[disabled='true'] {
    pointer-events: none;
    opacity: 0.6;
  }
`
