import * as React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'

import { ApplicationButtonProps } from './interfaces'

const useStyles = makeStyles((theme: Theme) => {
  const { extra } = theme.palette as any
  return {
    appButton: ({ isSelected }: any) => {
      return {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        background:
          isSelected && extra
            ? `linear-gradient(161.78deg, ${extra.primary.main} 9.17%, ${
                extra.primary.mainDark
              } 126.68%)`
            : 'unset',
        color: isSelected
          ? '#fff'
          : extra
          ? extra.textField.defaultColor
          : 'initial',
        boxShadow: isSelected ? theme.shadows[4] : 'unset',
        transition: 'box-shadow 0.5s',
        '&:hover': {
          boxShadow: theme.shadows[4],
          transition: 'box-shadow 0.5s'
        }
      }
    },
    appButtonIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: extra ? extra.background.main20 : 'fff',
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
