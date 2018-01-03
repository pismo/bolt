import { css } from 'styled-components'
import common from './common'

const normalWeightStyle = css`
  ${common}
  background-color: orange;
  color: #f4f4f4;
  font-weight: bold;

  &:hover {
    background-color: #ffb123;
  }

  &:active {
    background-color: orange;
  }
`

export default normalWeightStyle
