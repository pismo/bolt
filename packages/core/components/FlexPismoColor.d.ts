import * as React from 'react'
import { ThemeInterface } from '../themePismo'
interface FlexProps {
  theme?: ThemeInterface
  backgroundColor: string
  color?: string
  height: number
  justifyContent?: string
  alignItems?: string
  flexWrap?: string
  flexDirection?: string
}
export declare const FlexPismoColor: import('styled-components').StyledComponent<
  React.FunctionComponent<FlexProps>,
  ThemeInterface,
  {},
  never
>
export {}
