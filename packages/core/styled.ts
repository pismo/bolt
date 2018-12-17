import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

import { ThemeInterface } from './themePismo'

const { default: styled, css, createGlobalStyle, keyframes } = styledComponents as ThemedStyledComponentsModule<
  ThemeInterface
>

export { css, createGlobalStyle, keyframes }
export default styled
