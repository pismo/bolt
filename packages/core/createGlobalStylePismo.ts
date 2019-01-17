import { normalize } from 'polished'
import { ThemedGlobalStyledClassProps } from 'styled-components'

import { createGlobalStyle, withTheme } from './styled'
import { ThemeInterface } from './themePismo'

export type createGlobalStylePismoI = (customStyle: string) => ThemedGlobalStyledClassProps<{}, ThemeInterface>

export const baseStyle = (theme: ThemeInterface) => ({
  fontFamily: theme.fontFamily,
  color: theme.fontColor,
  fontsize: theme.fontSizeBase,
  lineHeight: theme.lineHeightBase,
  backgroundColor: theme.background,
  height: '100%',
})

export const createGlobalStylePismo: createGlobalStylePismoI = (customStyle = '') =>
  withTheme(createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i');

  html, body, #root, #router {
    ${({ theme }) => baseStyle(theme)}
  }
  ${customStyle}
`)
