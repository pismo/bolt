import { Flex, media, styled } from '@pismo/bolt-core'
import * as React from 'react'

export const StyledFormSection = styled(Flex)`
  justify-content: space-between;

  ${media.mobile`
    justify-content: center;
    flex-direction: column;
  `}
`

export interface FormSectionProps {
  children?: React.ReactNode
}

export const FormSection = (props: FormSectionProps) => <StyledFormSection> {props.children} </StyledFormSection>
