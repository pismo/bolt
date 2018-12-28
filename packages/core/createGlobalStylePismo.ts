import { normalize } from 'polished'
import { ThemedGlobalStyledClassProps } from 'styled-components'

import { createGlobalStyle } from './styled'
import { ThemeInterface } from './themePismo'

export type createGlobalStylePismoI = (customStyle: string) => ThemedGlobalStyledClassProps<{}, ThemeInterface>

export const baseStyle = (theme: ThemeInterface) => `
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i');
  font-family: ${theme.fontFamily};
  color: ${theme.fontColor};
  font-size: ${theme.fontSizeBase};
  line-height: ${theme.lineHeightBase};
  background-color: ${theme.background};
  height: 100%;
`

export const createGlobalStylePismo: createGlobalStylePismoI = (customStyle = '') => createGlobalStyle`
  ${normalize()}
  html, body, #root, #router {
    ${({ theme }) => baseStyle(theme)}
  }
  ${customStyle}
`
