import * as React from 'react'

import { format } from 'date-fns'

import Box from '@material-ui/core/Box'

import { RangeBarButton } from './RangeBarButton'

const { useState } = React

export interface RangeBarProps {
  startDate: Date
  endDate: Date
  formatType: string
  locale: Locale
  startLabel?: string
  endLabel?: string
  initialRangeSelected?: string
  onChange?: (current: string) => void
}

const RangeBar: React.FC<RangeBarProps> = ({
  startLabel = 'start',
  endLabel = 'end',
  startDate,
  endDate,
  formatType,
  locale,
  onChange,
  initialRangeSelected
}: RangeBarProps) => {
  const [selected, setSelected] = useState(initialRangeSelected)

  const clicked = (name: 'start' | 'end') => () => {
    setSelected(name)

    if (onChange) onChange(name)
  }

  return (
    <Box px='5px' display='flex' width={1}>
      <Box width={1 / 2}>
        <RangeBarButton
          label={startLabel}
          date={format(startDate, formatType, { locale })}
          selected={selected === 'start'}
          onClick={clicked('start')}
        />
      </Box>
      <Box width={1 / 2}>
        <RangeBarButton
          label={endLabel}
          date={format(endDate, formatType, { locale })}
          selected={selected === 'end'}
          onClick={clicked('end')}
        />
      </Box>
    </Box>
  )
}

export { RangeBar }
