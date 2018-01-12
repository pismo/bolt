import { css } from 'styled-components'
import colors from '@pismo/bolt-colors'
import common from './common'

const normalWeightStyle = css`
  ${common}
  background-color: ${colors.orange};
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: ${colors.orange400};
  }

  &:active {
    background-color: ${colors.orange};
  }
`

export default normalWeightStyle
