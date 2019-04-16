import { styled } from '@pismo/bolt-core'

export const FormCard = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #fff;
  max-width: 32rem;
  border-radius: 0.125rem;
  align-self: center;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  @media (min-width: 320px) and (max-width: 480px) {
    width: 85vw;
    height: 100vh;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 375px) and (max-width: 823px) and (orientation: landscape) {
    height: 80vh;
    width: 100vw;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
