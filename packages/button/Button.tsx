import { styled } from '@pismo/bolt-core'
import * as React from 'react'

import cleanButton from './polished/cleanButton'

export interface TypeButtonProps {
  /**
   * Set the button color theme to secondary
   * @default false
   */
  secondary?: boolean
  children?: React.ReactNode
}

const getColorByType = (props: TypeButtonProps) => {
  const colors = {
    secondary: {
      backgroundColor: '#586374',
      backgroundColorHover: '#373e49',
    },
    default: {
      backgroundColor: '#ff9800',
      backgroundColorHover: '#cc7a00',
    },
  }

  if (props.secondary) return colors.secondary

  return colors.default
}

const StyledButton = styled.button<TypeButtonProps>`
  ${cleanButton()};
  border-radius: 4px;
  background-color: ${props => getColorByType(props).backgroundColor};
  padding: 0.625rem 2rem;
  color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => getColorByType(props).backgroundColorHover};
  }

  &:disabled {
    cursor: wait;
    background-color: ${props => getColorByType(props).backgroundColorHover};
  }
`

export const Button = (props: TypeButtonProps) => (
  <StyledButton secondary={props.secondary}> {props.children} </StyledButton>
)
