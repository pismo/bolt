/// <reference types="react" />
import * as styledComponents from 'styled-components'
import * as theme from './themePismo'
declare const styled: styledComponents.ThemedBaseStyledInterface<theme.ThemeInterface>,
  css: styledComponents.BaseThemedCssFunction<theme.ThemeInterface>,
  createGlobalStyle: <P extends object = {}>(
    first:
      | styledComponents.CSSObject
      | TemplateStringsArray
      | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, theme.ThemeInterface>>,
    ...interpolations: Array<
      styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, theme.ThemeInterface>>
    >
  ) => styledComponents.GlobalStyleComponent<P, theme.ThemeInterface>,
  keyframes: (
    strings: TemplateStringsArray | styledComponents.CSSKeyframes,
    ...interpolations: styledComponents.SimpleInterpolation[]
  ) => styledComponents.Keyframes,
  ThemeProvider: import('react').ComponentClass<
    styledComponents.ThemeProviderProps<theme.ThemeInterface, theme.ThemeInterface>,
    any
  >,
  withTheme: styledComponents.BaseWithThemeFnInterface<theme.ThemeInterface>
export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme }
export default styled
