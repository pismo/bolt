import { Flex, styled } from '@pismo/bolt-core'
import * as React from 'react'

export const StyledFormButtons = styled(Flex)`
  margin-top: 1.5rem;
`

export const FormButtons = (props: { children?: React.ReactNode }) => (
  <StyledFormButtons> {props.children} </StyledFormButtons>
)
