import { createGlobalStyle } from './styled-components'
import { normalize } from 'polished'

const createGlobalStylePismo = (customStyle: '') => createGlobalStyle`
  ${customStyle}
  ${normalize()}
  body {
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.palette.secondary[2]};
  }
`

export default createGlobalStylePismo
