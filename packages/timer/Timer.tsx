import * as React from 'react'

import { P, styled } from '@pismo/bolt-core'
import { format } from 'date-fns'

const TimerStyled = styled(P)`
  color: #fff;
  padding: 0 0.5rem;
`

const TIMER = '@pismo/timer'

const timerFormatted = (timerCount: number) => {
  const timeFormat = timerCount > 60 * 60 * 1000 ? 'HH:mm:ss' : 'mm:ss'
  return format(new Date(0, 0, 0, 0, 0, 0, timerCount), timeFormat)
}

export const Timer = () => {
  const [timerCount, setTimer] = React.useState(Number(localStorage.getItem(TIMER)))

  React.useEffect(
    () => {
      const timer = window.setInterval(() => {
        const time = timerCount + 1000
        setTimer(time)
        localStorage.setItem(TIMER, String(time))
      }, 1000)
      return () => window.clearInterval(timer)
    },
    [timerCount],
  )

  return <TimerStyled>{timerFormatted(timerCount)}</TimerStyled>
}
