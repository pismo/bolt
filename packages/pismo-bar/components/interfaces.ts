import { AppBarProps } from '@material-ui/core/AppBar'
import { ToolbarProps } from '@material-ui/core/Toolbar'

export interface PismoBarProps {
  AppBarProps?: AppBarProps
  ToolbarProps?: ToolbarProps
  current: string
  appSelected?: ({ url: string }) => void
  full?: boolean
  contract?: boolean
  Icon?: React.ReactNode | React.FC | string
  statusApp?: boolean
  onClick?: () => void
}

export type ApplicationsName =
  | 'Marketplace'
  | 'Adjustments'
  | 'Customer'
  | 'Backoffice'
  | 'WebPOS'

export interface ApplicationType {
  name: ApplicationsName
  url: string
}

export interface ApplicationsType {
  [k: string]: ApplicationType
}

export interface ApplicationToolbarProps extends PismoBarProps {
  onClick?: () => void
  applications: ApplicationsType
  app?: boolean
}

export interface ApplicationButtonProps {
  data: ApplicationType
  isSelected?: boolean
  onClick?: ({ url: string }) => void
}

export const maxWidth = '240px'
export const mobileMaxWidth = '68px'
