import { storiesOf } from '@storybook/react'

storiesOf('Grid', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `
        # Grid System
        ## Flex
        ---
        ## Box
        ---
      `,
    },
  })
  .add('Grid System', () => undefined)
