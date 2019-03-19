import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Button } from './Button'

storiesOf('Components.Button', module)
  .addParameters({
    info: {
      text: `# Button`,
    },
  })
  .add('Usage', () => {
    const props = {
      secondary: boolean('Secondary', false),
    }

    return <Button {...props}> My button </Button>
  })
