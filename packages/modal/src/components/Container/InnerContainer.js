import React from 'react'
import styled from 'styled-components'

const InnerContainer = styled.div`
  left: 0;
  right: 0;
  margin: auto;
  width: 26.5rem;
  height: 33rem;
  padding: 2rem;
  border-radius: .1rem;
  box-sizing: border-box;
  background-color: white;
  transition: all 200ms ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform: scale(${props => props.isOpen ? '1' : '.5'});
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12);
`

export default InnerContainer
