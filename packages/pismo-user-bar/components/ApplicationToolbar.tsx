import * as React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles, Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Avatar, AvatarProps } from './Avatar'

export const maxWidth = '240px'
export const mobileMaxWidth = '68px'

const useStyles = makeStyles((theme: Theme) => {
  const extra: any = (theme.palette as any).extra
  return {
    appBar: ({ full, contract }: any) => {
      const style = {
        width: maxWidth,
        color: '#fff',
        backgroundColor: extra ? extra.background.special : null
      }

      if (!full) {
        Object.assign(style, {
          [theme.breakpoints.down('xs')]: {
            width: mobileMaxWidth,
            paddingLeft: 0,
            paddingRight: 0,
            justifyContent: 'center'
          }
        })
      }

      if (contract) {
        Object.assign(style, {
          width: mobileMaxWidth,
          paddingLeft: 0,
          paddingRight: 0,
          justifyContent: 'center'
        })
      }

      return style
    },
    text: {
      textOverflow: 'ellipsis',
      width: '150px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textAlign: 'left'
    },
    email: {
      opacity: 0.6
    }
  }
})

export interface ApplicationToolbarProps extends AvatarProps {
  email: string
  full?: boolean
  contract?: boolean
  onClick?: () => void
}

const ApplicationToolbar: React.FC<ApplicationToolbarProps> = ({
  name,
  notification,
  src,
  email,
  onClick,
  contract = false,
  full = false
}: ApplicationToolbarProps) => {
  const classes = useStyles({ full, contract })
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))

  const clicked = () => {
    if (onClick) onClick()
  }

  return (
    <ButtonBase onClick={clicked} data-testid='toolbar-button'>
      <Toolbar className={classes.appBar} data-testid='toolbar-container'>
        <Avatar name={name} notification={notification} src={src} />
        {(matches && !full) || contract ? null : (
          <Box ml='10px' flexDirection='column'>
            <Typography variant='body1' className={`${classes.text}`}>
              {name}
            </Typography>
            <Typography
              variant='body1'
              className={`${classes.email} ${classes.text}`}
            >
              {email}
            </Typography>
          </Box>
        )}
      </Toolbar>
    </ButtonBase>
  )
}

export { ApplicationToolbar }
