import * as React from 'react'
import Croppie from 'croppie'

import Box from '@material-ui/core/Box'

const { useRef, useEffect, useState } = React

const AvatarUpload = () => {
  const el = useRef()
  const [c, setC] = useState(null)
  const [imgData, setImgData] = useState(null)

  return (
    <Box>
      <Box />
    </Box>
  )
}

export { AvatarUpload }
