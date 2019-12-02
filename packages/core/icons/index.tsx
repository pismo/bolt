import * as React from 'react'

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

export const MenuIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox='0 0 16 16'>
    <path
      d='M0 4H4V0H0V4ZM6 16H10V12H6V16ZM4 16H0V12H4V16ZM0 10H4V6H0V10ZM10 10H6V6H10V10ZM12 0V4H16V0H12ZM10 4H6V0H10V4ZM12 10H16V6H12V10ZM16 16H12V12H16V16Z'
      fill='currentColor'
    />
  </SvgIcon>
)
