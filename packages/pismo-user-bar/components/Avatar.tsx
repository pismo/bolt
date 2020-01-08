import * as React from 'react'

import MAvatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles'
import * as initials from 'initials'

const { Fragment } = React

const useStyles = makeStyles(() => {
  return {
    avatar: {
      border: `1px solid #4F5A69`
    },
    badge: {
      minWidth: '12px',
      height: '12px'
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
          {initials(name).substring(0,2)}
        </MAvatar>
      </Badge>
    </Fragment>
  )
}

export { Avatar }
