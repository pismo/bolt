import * as React from 'react'

import MAvatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles, Theme } from '@material-ui/core/styles'
import * as initials from 'initials'

const { Fragment } = React

const useStyles = makeStyles((theme:Theme) => {
  const extra = (theme.palette as any).extra
  return {
    avatar: {
      border: `2px solid ${extra ? extra.textField.defaultColor: '#fff'}`,
      backgroundColor: extra ? extra.background.main50 : 'transparent',
      color: extra ? extra.textField.defaultColor: '#fff'
    },
    badge: {
      minWidth: '12px',
      height: '12px',
      backgroundColor: extra ? extra.primary.main : 'transparent'
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
