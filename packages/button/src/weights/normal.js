import { css } from 'styled-components'
import colors from '@pismo/bolt-colors'
import common from './common'

const normalWeightStyle = css`
  ${common}
  background-color: ${colors.gray200};
  color: ${colors.gray700};
  font-weight: 600;

  &:hover {
    background-color: ${colors.gray300};
  }

  &:active {
    background-color: ${colors.gray200};
  }
`

export default normalWeightStyle
