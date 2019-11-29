import * as React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import * as Color from 'color'

import { ApplicationButtonProps } from './interfaces'

const useStyles = makeStyles((theme: Theme) => {
  const { extra } = theme.palette as any
  return {
    appButton: {
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: ({ isSelected }: any) =>
        isSelected && extra ? extra['background'].main : 'unset',
      '&:hover': {
        backgroundColor: ({ isSelected }: any) =>
          isSelected && extra
            ? extra.background.main
            : extra
            ? Color(extra['background'].special)
                .lighten(0.8)
                .hex()
            : 'transparent'
      }
    },
    appButtonIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: '#4F5A69',
      borderRadius: '50%'
    }
  }
})

const ApplicationButton: React.FC<ApplicationButtonProps> = ({
  data,
  isSelected,
  onClick
}: ApplicationButtonProps) => {
  const classes = useStyles({ isSelected })

  const clickHandler = () => {
    if (onClick) {
      onClick({ url: data.url })
    }
  }

  return (
    <Grid item xs={6}>
      <ButtonBase className={`${classes.appButton}`} onClick={clickHandler}>
        <Box
          width={1}
          display='flex'
          flexDirection='column'
          alignItems='center'
          py='15px'
        >
          <Box className={classes.appButtonIcon} mb='8px' />
          <Typography variant='body1'>{data.name}</Typography>
        </Box>
      </ButtonBase>
    </Grid>
  )
}

export { ApplicationButton }
