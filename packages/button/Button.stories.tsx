import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Button } from './Button'

storiesOf('Components.Button', module).add('Usage', () => {
  const props = {
    secondary: boolean('Secondary', false),
    onClick: action('onClick'),
    onMouseOver: action('onMouseOver'),
  }

  return <Button {...props}> My button </Button>
})
