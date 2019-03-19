import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Form } from './Form'

storiesOf('Components/Form', module).add('Usage', () => {
  const props = {
    title: text('Title', 'My Form'),
  }

  return <Form {...props}> My form </Form>
})
