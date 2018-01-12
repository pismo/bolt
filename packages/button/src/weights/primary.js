import { css } from 'styled-components'
import colors from '@pismo/bolt-colors'
import common from './common'

const normalWeightStyle = css`
  ${common}
  background-color: ${colors.blue};
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: ${colors.blue200};
  }

  &:active {
    background-color: ${colors.blue700};
  }
`

export default normalWeightStyle
