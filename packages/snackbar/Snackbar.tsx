import * as React from 'react'

import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import InfoIcon from '@material-ui/icons/Info'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import MuiSnackbar, { SnackbarProps } from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}
interface ContentProps {
  message?: string
  variant: keyof typeof variantIcon
}

interface SnackProps extends SnackbarProps {
  message?: string
  variant: keyof typeof variantIcon
}

const Content: React.FC<ContentProps> = React.forwardRef(
  ({ message, variant }: ContentProps, ref) => {
    const Icon = variantIcon[variant]
    return (
      <SnackbarContent
        ref={ref}
        className={variant}
        message={
          <Box display='flex'>
            <Icon className={`${variant}-icon`} />
            <Box ml='10px'>{message}</Box>
          </Box>
        }
      />
    )
  }
)

const SlideTransition = p => <Slide {...p} direction='up' />

const Snackbar: React.FC<SnackProps> = (props: SnackProps) => {
  let snackProps: SnackProps = { ...props }
  delete snackProps.message
  delete snackProps.variant
  return (
    <MuiSnackbar
      autoHideDuration={6000}
      {...snackProps}
      TransitionComponent={SlideTransition}
    >
      <Content message={props.message} variant={props.variant} />
    </MuiSnackbar>
  )
}

export { Snackbar }
