import * as React from 'react'
import styled from './styled'

const stylesToWeight = (style: string): string => {
  const stylestoWeightMap = {
    light: 300,
    regular: 400,
    bold: 700,
    black: 900,
    default: 400,
  }

  return stylestoWeightMap[style.split(' ')[0] || 'default']
}

export interface BasicProps {
  children: React.ReactNode
  fontStyle?: string
  style?: object
}

export const StyledH1 = styled.h1<BasicProps>`
  font-size: 2.075rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const H1 = (props: BasicProps) => (
  <StyledH1 fontStyle={props.fontStyle} style={props.style}>
    {props.children}
  </StyledH1>
)

export const StyledH2 = styled.h2<BasicProps>`
  font-size: 1.725rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const H2 = (props: BasicProps) => <StyledH2 fontStyle={props.fontStyle}> {props.children} </StyledH2>

export const StyledH3 = styled.h3<BasicProps>`
  font-size: 1.4375rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const H3 = (props: BasicProps) => <StyledH3 fontStyle={props.fontStyle}> {props.children} </StyledH3>

export const StyledH4 = styled.h4<BasicProps>`
  font-size: 1.2rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const H4 = (props: BasicProps) => <StyledH4 fontStyle={props.fontStyle}> {props.children} </StyledH4>

export const StyledP = styled.p<BasicProps>`
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const P = (props: BasicProps) => (
  <StyledP fontStyle={props.fontStyle} style={props.style}>
    {props.children}
  </StyledP>
)

export const StyledSmall = styled.small<BasicProps>`
  font-size: 0.83125rem;
  color: ${({ theme }) => theme.fontColorSmall};
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const Small = (props: BasicProps) => <StyledSmall fontStyle={props.fontStyle}> {props.children} </StyledSmall>

export const StyledTiny = styled.small<BasicProps>`
  font-size: 0.69375rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
export const Tiny = (props: BasicProps) => <StyledTiny fontStyle={props.fontStyle}> {props.children} </StyledTiny>
