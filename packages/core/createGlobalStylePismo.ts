import { normalize } from 'polished'
import { ThemedGlobalStyledClassProps } from 'styled-components'

import { createGlobalStyle } from './styled'
import { ThemeInterface } from './themePismo'

export type createGlobalStylePismoI = (customStyle: string) => ThemedGlobalStyledClassProps<{}, ThemeInterface>

export const createGlobalStylePismo: createGlobalStylePismoI = (customStyle = '') => createGlobalStyle`
  ${normalize()}
  html, body {
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.fontColor};
    font-size: ${({ theme }) => theme.fontSizeBase};
    line-height: ${({ theme }) => theme.lineHeightBase};
    background-color: ${({ theme }) => theme.background};
  }
  ${customStyle}
`
