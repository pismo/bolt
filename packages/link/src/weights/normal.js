import { css } from 'styled-components'
import colors from '@pismo/bolt-colors'
import common from './common'

const normalWeightStyle = css`
  ${common}
  color: ${colors.blue};
  background-color: ${colors.gray100};
  font-weight: bold;

  &:hover {
    background-color: ${colors.gray50};
  }

  &:active {
    color: ${colors.blue700};
    background-color: ${colors.gray200};
  }
`

export default normalWeightStyle
