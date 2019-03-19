import { storiesOf } from '@storybook/react'

storiesOf('Basics/Colors', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `
        # Colors

        The package @pismo/bolt-core export the colors available in the component library

        ## Import
        ---
      `,
    },
  })
  .add('Usage', () => undefined)
