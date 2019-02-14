import { styled } from '@pismo/bolt-core'

import cleanButton from './polished/cleanButton'

export interface TypeButtonProps {
  secondary?: boolean
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

export const Button = styled.button<TypeButtonProps>`
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
