import { colors, styled } from '@pismo/bolt-core'

export const SubmitButton = styled.button`
  line-height: 1.15;
  font-family: inherit;
  overflow: visible;
  border-style: none;
  border-radius: 0.25rem;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.873rem;
  transition: all 0.15s ease-in-out;
  width: 100%;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  color: ${props => (props.disabled ? colors.grey300 : '#FFF')};
  background-color: ${props => (props.disabled ? '#E1E5ED' : '#EC8246')};
  margin: 0 0 2rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`
