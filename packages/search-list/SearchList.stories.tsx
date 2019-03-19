import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SearchList } from './SearchList'

storiesOf('Components/SearchList', module)
  .addParameters({
    info: {
      header: false,
      source: false,
      text: `# Components/SearchList`,
    },
  })
  .add('Usage', () => {
    const props = {
      hits: [],
      listItem: () => <></>,
    }

    return <SearchList {...props} />
  })
