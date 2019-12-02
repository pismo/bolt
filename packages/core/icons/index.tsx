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

export const DashboardIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox='0 0 18 18'>
    <path
      d='M0 0H8V10H0V0ZM18 0H10V6H18V0ZM6 8V2H2V8H6ZM16 4V2H12V4H16ZM16 10V16H12V10H16ZM6 16V14H2V16H6ZM18 8H10V18H18V8ZM0 12H8V18H0V12Z'
      fill='currentColor'
    />
  </SvgIcon>
)

export const SellerIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox='0 0 18 16'>
    <path
      d='M1 0H17V2H1V0ZM15.96 8L15.36 5H2.64L2.04 8H15.96ZM17 3H1L0 8V10H1V16H11V10H15V16H17V10H18V8L17 3ZM3 10V14H9V10H3Z'
      fill='currentColor'
    />
  </SvgIcon>
)

export const CreditorsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox='0 0 20 20'>
    <path
      d='M0.5 5L10 0L19.5 5V7H0.5V5ZM10 2.26L15.21 5H4.79L10 2.26ZM3 9H5V16H3V9ZM11 9V16H9V9H11ZM0.5 18V20H19.5V18H0.5ZM15 9H17V16H15V9Z'
      fill='currentColor'
    />
  </SvgIcon>
)
