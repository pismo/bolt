import React from 'react'
import styled from 'styled-components'
import colors from '@pismo/bolt-colors'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 3.5rem;
  font-weight: bold;
  color: ${colors.gray800};
`

const Title = styled.div`
  text-align: center;
  width: 100%;
  text-indent: 3.5rem;
`

const CloseIcon = styled.div`
  width: 3.5rem;
  text-align: center;
  height: 100%;
  line-height: 3.5rem;
  margin-left: auto;
  cursor: pointer;
`

const Header = ({ children, closeIcon, onClose }) => (
  <HeaderContainer>
    <Title>{children}</Title>
    <CloseIcon onClick={onClose}>{closeIcon}</CloseIcon>
  </HeaderContainer>
)

export default Header
