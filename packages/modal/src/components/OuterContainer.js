import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  z-index: 9999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isOpen ? '1' : '0'};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
`

export default OuterContainer
