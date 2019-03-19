import { storiesOf } from '@storybook/react'

storiesOf('Basics/Typography', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `
        # Typography

        ## Global settings
        ---

        All elements of Bolt have defaults that comes from the theme:
      `,
    },
  })
  .add('Usage', () => undefined)
