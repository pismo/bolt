import { Flex as FlexGrid } from '@rebass/grid'
import * as React from 'react'

import styled from '../styled'
import { ThemeInterface } from '../themePismo'

interface FlexProps {
  theme?: ThemeInterface
  backgroundColor: string
  color?: string
  height: number
}

const Flex: React.SFC<FlexProps> = props => <FlexGrid {...props}>{props.children}</FlexGrid>

export const FlexPismoColor = styled(Flex)`
  background-color: ${({ backgroundColor }) => backgroundColor || '#000'};
  height: ${({ height }) => `${height}px` || '30px'};
  color: #fff;
  text-align: center;
  padding: 0 20px;
`
