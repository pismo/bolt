import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  display: table;
  position: fixed;
  background-color: #202732;
  transition: opacity 100ms ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
`

export default Overlay
