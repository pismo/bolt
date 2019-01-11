import { keyframes, styled } from '@pismo/bolt-core'

interface LoaderProps {
  size?: string
}

const getScaleBySize = size => {
  const scaleBySize = {
    tiny: '0.5',
    small: '0.8',
    large: '1.3',
    default: '1',
  }

  return scaleBySize[size || 'default']
}

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div<LoaderProps>`
  transform: scale(${({ size }) => getScaleBySize(size)});
  color: transparent !important;
  min-height: 2rem;
  margin: 0.5rem;
  pointer-events: none;
  position: relative;

  &::after {
    animation: ${loading} 500ms infinite linear;
    animation-name: ${loading};
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    border: 0.1rem solid ${props => props.color || '#2c3644'};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: 1.6rem;
    width: 1.6rem;
    margin-left: -0.8rem;
    margin-top: -0.8rem;
    left: 50%;
    top: 50%;
    position: absolute;
    z-index: 1;
  }
`
