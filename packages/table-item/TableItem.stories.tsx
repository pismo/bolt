import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { TableItem } from './TableItem'

storiesOf('Components/TableItem', module).add('Usage', () => {
  const props = {
    isSuspended: boolean('isSuspended', false),
  }

  return <TableItem {...props}> My TableItem </TableItem>
})
