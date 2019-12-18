import * as React from 'react'
import * as Croppie from 'croppie'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

import * as Color from 'color'

const { useRef, useEffect, useState, Fragment } = React

const useStyles = makeStyles((theme: Theme) => {
  const extra = (theme.palette as any).extra
  return {
    iconButton: {
      width: '156px',
      height: '156px',
      backgroundColor: extra
        ? Color(extra.background.main)
            .fade(0.6)
            .toString()
        : 'transparent',
      '&:hover': {
        backgroundColor: extra
          ? Color(extra.background.main)
              .fade(0.5)
              .toString()
          : 'transparent'
      }
    },
    iconButtonLabel: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        color: extra
          ? Color(extra.textField.defaultColor)
              .fade(0.5)
              .toString()
          : 'transparent'
      }
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
    >
      {!image ? (
        <IconButton
          className={classes.iconButton}
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
