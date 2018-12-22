import React from 'react'
import { withTheme } from 'styled-components'
import { baseStyle } from '../createGlobalStylePismo'
import styled, { ThemeProvider } from '../styled'
import { themePismo } from '../themePismo'

const Wrapper = styled.div`
  ${({ theme }) => baseStyle(theme)}
  background-color: #fff;
`

const PassStyle = withTheme(Wrapper)

export const WrapperPismoTheme = ({ children }) => (
  <ThemeProvider theme={themePismo}>
    <PassStyle>{children}</PassStyle>
  </ThemeProvider>
)
