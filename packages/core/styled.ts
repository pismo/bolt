import * as styledComponents from 'styled-components'
import { StyledComponentBase, ThemedStyledComponentsModule } from 'styled-components'

import { ThemeInterface } from './themePismo'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export { css, createGlobalStyle, keyframes, ThemeInterface, ThemeProvider, StyledComponentBase }
export default styled
