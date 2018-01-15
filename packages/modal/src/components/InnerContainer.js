import React from 'react'
import styled from 'styled-components'

const InnerContainer = styled.div`
  width: 26rem;
  height: 33rem;
  border-radius: .125rem;
  background-color: white;
  box-sizing: border-box;
  transition: all 150ms ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '.3'};
  transform: scale(${props => props.isOpen ? '1' : '.5'});
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);
`

export default InnerContainer
