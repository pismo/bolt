import * as React from 'react'
import { MdCheckCircle, MdError, MdWarning } from 'react-icons/md'

import { useToastContext } from './useToastContext'

const ToastWrapper = ({ children, color }) => (
  <div
    style={{
      width: '40vw',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: color,
      marginRight: '20px',
      marginBottom: ' 10px ',
      borderRadius: '80px',
    }}
  >
    {children}
  </div>
)

const iconStyle = { height: '40px', width: '40px', marginRight: '15px', color: '#FFF' }

const ToastMessage = ({ children }) => (
  <p style={{ color: '#FFF', fontSize: '14px', borderRadius: '80px' }}>{children}</p>
)

export const useToast = () => {
  const { add } = useToastContext()

  return {
    toast: {
      success: (message = 'Success', { delay = 3000 } = {}) =>
        add({
          direction: 'Bottom',
          content: (
            <ToastWrapper color={'#2C3644'}>
              <MdCheckCircle style={iconStyle} />
              <ToastMessage>{message}</ToastMessage>
            </ToastWrapper>
          ),
          delay,
        }),
      error: (message = 'Error', { delay = 3000 } = {}) =>
        add({
          direction: 'Bottom',
          content: (
            <ToastWrapper color={'#EC3A53'}>
              <MdError style={iconStyle} />
              <ToastMessage>{message}</ToastMessage>
            </ToastWrapper>
          ),
          delay,
        }),
      alert: (message = 'Alert', { delay = 3000 } = {}) =>
        add({
          direction: 'Bottom',
          content: (
            <ToastWrapper color={'#EC8246'}>
              <MdWarning style={iconStyle} />
              <ToastMessage>{message}</ToastMessage>
            </ToastWrapper>
          ),
          delay,
        }),
    },
  }
}
