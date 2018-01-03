import React from 'react'
import OuterContainer from './OuterContainer'
import InnerContainer from './InnerContainer'

const Container = ({ isOpen, children }) => (
  <OuterContainer>
    <InnerContainer isOpen={isOpen}>
      {children}
    </InnerContainer>
  </OuterContainer>
)

export default Container
