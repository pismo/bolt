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
  fontStyle?: string
}

export const H1 = styled.h1<BasicProps>`
  font-size: 2.075rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`

export const H2 = styled.h2<BasicProps>`
  font-size: 1.725rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`

export const H3 = styled.h3<BasicProps>`
  font-size: 1.4375rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`

export const H4 = styled.h4<BasicProps>`
  font-size: 1.2rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`

export const P = styled.p<BasicProps>`
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`

export const Small = styled.small<BasicProps>`
  font-size: 0.83125rem;
  color: ${({ theme }) => theme.fontColorSmall};
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`

export const Tiny = styled.small<BasicProps>`
  font-size: 0.69375rem;
  font-weight: ${({ fontStyle = '' }) => stylesToWeight(fontStyle)};
  font-style: ${({ fontStyle = '' }) => fontStyle.split(' ')[1] || 'normal'};
`
