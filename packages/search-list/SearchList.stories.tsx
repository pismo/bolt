import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SearchList } from './SearchList'

storiesOf('SearchList', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `# SearchList`,
    },
  })
  .add('Usage', () => {
    const props = {
      hits: [],
      listItem: () => <></>,
    }

    return <SearchList {...props} />
  })
