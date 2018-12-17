import { normalize } from 'polished'
import { ThemedGlobalStyledClassProps } from 'styled-components'

import { createGlobalStyle } from './styled'
import { ThemeInterface } from './themePismo'

export type createGlobalStylePismoI = (customStyle: string) => ThemedGlobalStyledClassProps<{}, ThemeInterface>

export const createGlobalStylePismo: createGlobalStylePismoI = (customStyle = '') => createGlobalStyle`
  ${customStyle}
  ${normalize()}
  body {
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.background};
  }
`
