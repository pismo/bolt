import logo from '../assets/logo.png'
import styled from '../styled'

export interface LogoProps {
  height?: string
  width?: string
}

export const Logo = styled.img.attrs<LogoProps>({
  id: 'Logo',
  src: logo,
  alt: 'Pismo Logo',
})`
  border-radius: 50%;
  display: block;
  max-width: 100%;
  height: auto;
  height: ${props => props.height || 'initial'};
  width: ${props => props.width || 'initial'};
`
