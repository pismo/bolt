import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { Button } from './Button'

storiesOf('Button', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('Usage', () => {
    const props = {
      secondary: boolean('Secondary', false),
    }

    return <Button {...props}> My button </Button>
  })
