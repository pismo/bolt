import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Timer } from './Timer'

// Story source displays 'unknown'
storiesOf('Timer', module).add('Usage', () => <Timer />)
