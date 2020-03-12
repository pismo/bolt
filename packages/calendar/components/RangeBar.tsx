import * as React from 'react'

import { format } from 'date-fns'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { RangeBarButton } from './RangeBarButton'

const { useState } = React

const useStyles = makeStyles(() => {
  return {
    container: {
      padding: '5px'
    }
  }
})

export interface RangeBarProps {
  startDate: Date
  endDate: Date
  formatType: string
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
  onChange,
  initialRangeSelected
}: RangeBarProps) => {
  const classes = useStyles()
  const [selected, setSelected] = useState('')

  const clicked = (name: 'start' | 'end') => () => {
    setSelected(name)

    if (onChange) onChange(name)
  }

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={6}>
        <RangeBarButton
          label={startLabel}
          date={format(startDate, formatType)}
          selected={selected === 'start'}
          onClick={clicked('start')}
        />
      </Grid>
      <Grid item xs={6}>
        <RangeBarButton
          label={endLabel}
          date={format(endDate, formatType)}
          selected={selected === 'end'}
          onClick={clicked('end')}
        />
      </Grid>
    </Grid>
  )
}

export { RangeBar }
