import * as styledComponents from 'styled-components'
import * as theme from './themePismo'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<theme.ThemeInterface>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
