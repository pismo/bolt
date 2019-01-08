import { media, P, styled } from '@pismo/bolt-core'
import * as React from 'react'

import { MdArrowBack } from 'react-icons/md'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.25rem;
  padding-bottom: 2rem;

  ${media.mobile`
    width: auto;
    padding: 0 2rem;
    margin-top: 0;
  `}
`

export const FormArea = styled.form`
  padding: 0;
  ${media.mobile`
    padding: 0 2rem;
  `}
`

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f3f5;
  padding: 0.8125rem 1.25rem;
`

const FormTitle = styled(P)`
  margin: 0;
`

const BackLink = styled.span`
  display: flex;
  align-items: center;
`

const BackIcon = styled(MdArrowBack)`
  color: #2c3644;
  font-size: 1.2rem;
  margin-right: 0.35rem;
`

export interface FormHeaderProps {
  onClickBack?: () => void
  title?: string
  children: React.ReactNode
}

export const Form = ({ onClickBack, title, children }: FormHeaderProps) => {
  return (
    <FormWrapper>
      {title && (
        <FormHeader>
          {onClickBack && (
            <BackLink onClick={onClickBack}>
              <BackIcon />
            </BackLink>
          )}
          <FormTitle fontStyle="bold">{title}</FormTitle>
        </FormHeader>
      )}
      <FormArea>{children}</FormArea>
    </FormWrapper>
  )
}
