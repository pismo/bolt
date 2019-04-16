import { Flex, styled } from '@pismo/bolt-core'
import * as React from 'react'

export const StyledFormButtons = styled(Flex)`
  margin-top: 1.5rem;
`

export interface FormButtonsProps {
  children?: React.ReactNode
}

export const FormButtons = (props: FormButtonsProps) => <StyledFormButtons>{props.children}</StyledFormButtons>
