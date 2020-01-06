import * as React from 'react'

import { ApplicationToolbar } from './components/ApplicationToolbar'

const PismoUserBar: React.FC = () => {
  return (
    <ApplicationToolbar
      name='Abraão Bueno'
      email='abraaobueno@hotmail.com.br'
      notification
    />
  )
}

export { PismoUserBar }
