import * as React from 'react'
import AppBar, { AppBarProps } from '@material-ui/core/AppBar'
import Toolbar, { ToolbarProps } from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import { MenuIcon } from './components/MenuIcon'

interface PismoBarProps {
  AppBarProps: AppBarProps
  ToolbarProps: ToolbarProps
}

const PismoBar: React.FC<PismoBarProps> = ({
  AppBarProps,
  ToolbarProps
}: PismoBarProps) => {
  return (
    <AppBar {...AppBarProps}>
      <Toolbar {...ToolbarProps}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export { PismoBar }
