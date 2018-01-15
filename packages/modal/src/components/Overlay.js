import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${props => props.isOpen ? '.65' : '0'};
`

export default Overlay
