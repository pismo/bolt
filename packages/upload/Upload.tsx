import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined'

import { BoltTheme } from '@pismo/bolt-core'

const { useRef, useEffect, useState } = React

const useStyles = makeStyles((theme: BoltTheme) => ({
  container: {
    '& #Pismo-Bolt-upload-input-file': {
      width: '0.1px',
      height: '0.1px',
      opacity: 0
    },

    '& .Pismo-Bolt-upload-dropzone': {
      width: '100%',
      height: '12rem',
      border: `2px dashed ${theme.palette.colors.background['50']}`,
      backgroundColor: theme.palette.colors.background['5'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .Pismo-Bolt-upload-dropzone-icon': {
        fontSize: '4rem'
      },

      '& .Pismo-Bolt-upload-dropzone-message': {
        fontWeight: 'bold'
      }
    },

    '& .Pismo-Bolt-upload-dropzone.Pismo-Bolt-upload-dropzone-active': {
      backgroundColor: theme.palette.colors.background['20']
    }
  }
}))

export interface UploadProps {
  dropzone?: boolean
  multiple?: boolean
  accept?: string
  className?: string
  title?: string
  buttonLabel?: React.ReactNode
  onChange?: (files: FileList) => void
}

const Upload: React.FC<UploadProps> = ({
  dropzone = true,
  multiple = true,
  accept,
  className = '',
  title = '',
  buttonLabel = 'upload',
  onChange
}: UploadProps) => {
  const classes = useStyles()

  const [activeDropzone, setActiveDropzone] = useState(false)

  const dropRef = useRef<any>()

  useEffect(() => {
    if (dropRef.current) {
      const dp = dropRef.current

      dp.ondragover = dp.ondragenter = evt => {
        setActiveDropzone(true)
        evt.preventDefault()
        evt.stopPropagation()
      }

      dp.ondragout = dp.ondragleave = evt => {
        setActiveDropzone(false)
        evt.preventDefault()
        evt.stopPropagation()
      }

      dp.ondrop = evt => {
        if (onChange) {
          onChange(evt.dataTransfer.files)
        }
        evt.preventDefault()
        evt.stopPropagation()
      }
    }
  }, [dropRef.current])

  const handleChange = evt => {
    if (onChange) {
      onChange(evt.target.files)
    }
  }

  return (
    <div className={`${classes.container} ${className}`}>
      <input
        id='Pismo-Bolt-upload-input-file'
        type='file'
        onChange={handleChange}
        multiple={multiple}
        accept={accept}
      />
      {dropzone ? (
        <div
          ref={dropRef}
          className={`Pismo-Bolt-upload-dropzone ${
            activeDropzone ? 'Pismo-Bolt-upload-dropzone-active' : ''
          }`}
        >
          <Box display='flex' alignItems='center' flexDirection='column'>
            <Box>
              <CloudUploadOutlinedIcon className='Pismo-Bolt-upload-dropzone-icon' />
            </Box>
            <Box>
              <Typography
                className='Pismo-Bolt-upload-dropzone-message'
                variant='h5'
                color='secondary'
                align='center'
              >
                {title}
              </Typography>
            </Box>
          </Box>
        </div>
      ) : (
        <Button
          className='Pismo-Bolt-upload-button'
          component='label'
          variant='contained'
          color='secondary'
          htmlFor='Pismo-Bolt-upload-input-file'
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  )
}

export { Upload }
