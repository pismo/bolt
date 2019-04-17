import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Box, Flex } from '@rebass/grid'

storiesOf('Components/Grid System', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `# Components/Box`,
    },
  })
  .add('Box', () => <Box />)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `# Components/Flex`,
    },
  })
  .add('Flex', () => <Flex />)
