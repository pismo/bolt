import { Flex, media, styled } from '@pismo/bolt-core'

export const FormSection = styled(Flex)`
  justify-content: space-between;

  ${media.mobile`
    justify-content: center;
    flex-direction: column;
  `}
`
