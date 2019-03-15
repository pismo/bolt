import { Flex, media, styled } from '@pismo/bolt-core'
import * as React from 'react'

export const StyledFormSection = styled(Flex)`
  justify-content: space-between;

  ${media.mobile`
    justify-content: center;
    flex-direction: column;
  `}
`

export const FormSection = (props: { children?: React.ReactNode }) => (
  <StyledFormSection> {props.children} </StyledFormSection>
)
