import * as React from 'react'
import { animated, useSpring } from 'react-spring'

import { useTimeout } from './useTimeout'

const Ctx = React.createContext(null)

const ToastContainer = ({ direction, onDismiss, delay, ...props }) => {
  const [mounted, setMounted] = React.useState(true)

  useTimeout(() => setMounted(false), delay)

  const toStyle = () => {
    if (direction === 'TopRight') return { position: 'fixed', top: 0, right: 0 }
    if (direction === 'TopLeft') return { position: 'fixed', top: 0, left: 0 }
    if (direction === 'Top') return { position: 'fixed', top: 0, left: '30%' }
    if (direction === 'BottomRight') return { position: 'fixed', bottom: 0, right: 0 }
    if (direction === 'BottomLeft') return { position: 'fixed', bottom: 0, left: 0 }
    if (direction === 'Bottom') return { position: 'fixed', bottom: 0, left: '30%' }

    return { position: 'fixed', top: 0, right: 0 }
  }

  const fromStyle = () => {
    if (direction === 'TopRight') return { position: 'fixed', top: -150, right: 0 }
    if (direction === 'TopLeft') return { position: 'fixed', top: -150, left: 0 }
    if (direction === 'Top') return { position: 'fixed', top: -150, left: '30%' }
    if (direction === 'BottomRight') return { position: 'fixed', bottom: -150, right: 0 }
    if (direction === 'BottomLeft') return { position: 'fixed', bottom: -150, left: 0 }
    if (direction === 'Bottom') return { position: 'fixed', bottom: -150, left: '30%' }

    return { position: 'fixed', top: 0, right: 0 }
  }

  const animatedProps = useSpring({
    to: mounted ? toStyle() : fromStyle(),
    from: mounted ? fromStyle() : toStyle(),
    onRest: () => (mounted ? null : onDismiss()),
  })

  return <animated.div {...props} style={animatedProps} />
}

const Toast = ({ children, onDismiss, style, ...props }) => {
  return (
    <div
      style={{
        cursor: 'pointer',
        ...style,
      }}
      {...props}
      onClick={onDismiss}
    >
      {children}
    </div>
  )
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([])
  const [visible, setVisible] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)

  const add = toast => {
    setToasts([toast])
    setVisible(true)
  }

  const remove = () => {
    setToasts([])
    setVisible(false)
  }

  return (
    <Ctx.Provider value={{ add, remove }}>
      {children}
      <>
        {toasts.map(({ content, id, direction, delay, ...rest }) => {
          return visible ? (
            <ToastContainer key={content} onDismiss={remove} delay={hovered ? null : delay} direction={direction}>
              <Toast
                onMouseOut={() => setHovered(false)}
                onMouseOver={() => setHovered(true)}
                onDismiss={remove}
                {...rest}
              >
                {content}
              </Toast>
            </ToastContainer>
          ) : null
        })}
      </>
    </Ctx.Provider>
  )
}

export const useToastContext = () => React.useContext(Ctx)
