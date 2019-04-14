import * as React from 'react'

export type UseTimeoutInterface = (callback: () => void, delay?: number) => void

export const useTimeout: UseTimeoutInterface = (callback, delay) => {
  const savedCallback = React.useRef(null)

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    const tick = () => savedCallback.current()

    if (delay === null) return
    if (delay !== null) {
      const id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
