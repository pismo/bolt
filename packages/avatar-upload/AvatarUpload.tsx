import * as React from 'react'
import * as Croppie from 'croppie'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

import { BoltTheme } from '@pismo/bolt-core'

const { useRef, useEffect, useState, Fragment } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    iconButton: {
      width: '156px',
      height: '156px',
      position: 'relative',
      color: colors.text['50'],
      '&::before': {
        content: '" "',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: -1
      },
      backgroundColor: colors.background['20'],
      '&:hover': {
        backgroundColor: colors.background['20']
      }
    },
    iconButtonLabel: {
      display: 'flex',
      flexDirection: 'column'
    },
    croppieContainer: {
      '& .cr-boundary': {
        position: 'relative',
        width: '156px',
        height: '156px',
        overflow: 'hidden',
        borderRadius: '50%'
      },

      '& .cr-image': {
        position: 'absolute'
      },

      '& .cr-viewport': {
        position: 'absolute'
      },

      '& .cr-overlay': {
        position: 'absolute'
      }
    }
  }
})

export interface AvatarResult {
  getResult: () => Promise<any>
  destroy: () => void
}

interface AvatarUploadProps {
  buttonLabel: string
  resultType?: 'base64' | 'blob' | 'rawcanvas'
  imageUploaded?: (result: AvatarResult) => void
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  buttonLabel,
  imageUploaded,
  resultType
}) => {
  const classes = useStyles({})

  const [image, setImage] = useState(null)
  const [croppieEl, setCroppieEl] = useState(null)
  const [zoom, setZoom] = useState(0)

  const croppieRef = useRef()

  useEffect(() => {
    if (croppieRef.current && image && !croppieEl) {
      let c = new Croppie(croppieRef.current, {
        viewport: {
          width: 156,
          height: 156,
          type: 'circle'
        },
        showZoomer: false
      })
      c.bind({ url: image, zoom: 0, points: [0, 0] })

      setCroppieEl(c)

      if (imageUploaded && resultType) {
        imageUploaded({
          getResult: async () =>
            await c.result({ type: resultType, size: 'viewport' }),
          destroy: () => {
            setImage(null)
            setCroppieEl(null)
          }
        })
      }
    }

    return () => {
      if (croppieEl) {
        try {
          croppieEl.destroy()
        } catch (err) {
          console.log(err)
        }
      }
    }
  }, [croppieRef.current, image, croppieEl])

  const uploadClicked = () => {
    var input = document.createElement('input')
    input.id = 'input-upload'
    input.type = 'file'
    input.addEventListener('change', e => {
      const reader = new FileReader()
      reader.onload = f => {
        setImage(f.target.result)
      }
      reader.readAsDataURL((e.target as any).files[0])
    })

    input.dispatchEvent(new MouseEvent('click'))
  }

  const handleImageZoom = (...args) => {
    const newValue = args[1]
    setZoom(newValue)
    if (croppieEl) {
      croppieEl.setZoom(newValue / 100)
    }
  }

  return (
    <Box
      width='156px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      className='Bolt-AvatarUpload'
    >
      {!image ? (
        <IconButton
          className={`${classes.iconButton} Bolt-AvatarUpload-IconButton`}
          classes={{ label: classes.iconButtonLabel }}
          onClick={uploadClicked}
          data-testid='upload-button'
        >
          <AddAPhotoOutlinedIcon />
          <Typography variant='body1' data-testid='upload-button-label'>
            {buttonLabel}
          </Typography>
        </IconButton>
      ) : (
        <Fragment>
          <div ref={croppieRef} className={classes.croppieContainer} />
          <Box width='100%' mt='15px'>
            <Slider value={zoom} onChange={handleImageZoom} />
          </Box>
        </Fragment>
      )}
    </Box>
  )
}

export { AvatarUpload }
