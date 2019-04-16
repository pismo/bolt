import { styled } from '@pismo/bolt-core'
import { TextField } from '@pismo/bolt-text-field'

export const Input = styled(TextField)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0.75rem 0.75rem 0.7rem 0.75rem;
  @media (min-width: 481px) and (max-width: 767px) {
    line-height: 1;
    padding: 0.55rem 0.55rem 0.5rem 0.55rem;
  }
`
