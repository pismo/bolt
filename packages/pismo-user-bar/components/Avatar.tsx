import * as React from 'react'

import MAvatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'
import * as initials from 'initials'

import {BoltTheme} from '@pismo/bolt-core'

const { Fragment } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  const extra = (theme.palette as any).extra
  const colors = theme.palette.colors
  return {
    avatar: {
      border: `2px solid ${colors.text['50']}`,
      backgroundColor: colors.background['50'],
      color: colors.text['50']
    },
    badge: {
      minWidth: '12px',
      height: '12px',
      backgroundColor: colors.main['50']
    }
  }
})

export interface AvatarProps {
  notification?: boolean
  name: string
  src?: string
}

const Avatar: React.FC<AvatarProps> = ({
  notification,
  name,
  src
}: AvatarProps) => {
  const classes = useStyles({})
  return (
    <Fragment>
      <Badge
        classes={{ badge: classes.badge }}
        overlap='circle'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        badgeContent={' '}
        color='error'
        invisible={!notification}
      >
        <MAvatar className={classes.avatar} src={src}>
          {initials(name).substring(0, 2)}
        </MAvatar>
      </Badge>
    </Fragment>
  )
}

export { Avatar }
