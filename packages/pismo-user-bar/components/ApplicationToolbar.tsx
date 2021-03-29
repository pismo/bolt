import * as React from 'react'
import { useSpring, animated } from 'react-spring'

import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { BoltTheme, Context } from '@pismo/bolt-core'

const AToolbar = animated(Toolbar)

export const maxWidth = '240px'
export const mobileMaxWidth = '68px'

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    appBar: ({ full, contract }: any) => {
      const style = {
        color: colors.text['50'],
        overflow: 'hidden'
      }

      if (!full) {
        Object.assign(style, {
          [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
            justifyContent: 'center'
          }
        })
      }

      if (contract) {
        Object.assign(style, {
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
      textAlign: 'left',
      fontWeight: 'bold'
    },
    email: {
      fontWeight: 'normal',
      color: colors.background['100']
    },
    darken: {
      backgroundColor: colors.background['0']
    },
    lighten: {
      backgroundColor: colors.background['100']
    }
  }
})

export interface ApplicationToolbarProps {
  name: string
  email: string
  Icon?: React.ReactNode | React.FC | string
  full?: boolean
  fullAnimation?: boolean
  contract?: boolean
  onClick?: () => void
}
const ApplicationToolbar: React.FC<ApplicationToolbarProps> = ({
  name,
  email,
  Icon,
  onClick,
  contract = false,
  full = false,
  fullAnimation = false
}: ApplicationToolbarProps) => {
  const classes = useStyles({ full, contract })
  const matches = useMediaQuery((theme: BoltTheme) =>
    theme.breakpoints.down('xs')
  )

  const IconApplication = (): React.ReactNode | React.FC | string => {
    if (Icon && typeof Icon === 'string') return <img src={Icon} alt={name} />
    return Icon
  }
  const animation = useSpring({
    width: !full && (matches || contract) ? mobileMaxWidth : maxWidth,
    from: {
      width:
        !full && (matches || contract)
          ? maxWidth
          : fullAnimation
          ? maxWidth
          : mobileMaxWidth
    }
  })

  const clicked = () => {
    if (onClick) onClick()
  }

  const { currentTheme } = React.useContext(Context)

  return (
    <ButtonBase onClick={clicked} data-testid='toolbar-button'>
      <AToolbar
        className={`${classes.appBar} ${
          currentTheme === 'clean' ? classes.darken : classes.lighten
        }`}
        data-testid='toolbar-container'
        style={animation}
      >
        {IconApplication()}
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
      </AToolbar>
    </ButtonBase>
  )
}

export { ApplicationToolbar }
