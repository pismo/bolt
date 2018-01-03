import { css } from 'styled-components'
import common from './common'

const normalWeightStyle = css`
  ${common}
  background-color: #ccc;
  color: #666;
  font-weight: 500;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }
`

export default normalWeightStyle
