/// <reference types="react" />
import * as styledComponents from 'styled-components';
import { ThemeInterface } from './themePismo';
declare const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.BaseThemedCssFunction<ThemeInterface>, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, ThemeInterface>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, ThemeInterface>>[]) => styledComponents.GlobalStyleComponent<P, ThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface, ThemeInterface>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
