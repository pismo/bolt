import * as React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

import { BoltTheme } from '@pismo/bolt-core'

const { useState } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    expansionPanel: {
      boxShadow: 'none',

      '&$expanded': {
        margin: 0
      },

      '&::before': {
        all: 'unset'
      }
    },
    sumary: {
      maxHeight: 'auto',
      minHeight: '0px',
      height: '53px',
      padding: '0px 10px',
      backgroundColor: '#fff',
      color: colors.text['50'],
      '&.Mui-expanded': {
        minHeight: '0px'
      },
      '&>.Mui-expanded': {
        margin: '12px 0'
      }
    },
    menuItem: {
      background: '#fff',
      color: colors.text['50'],
      '&:hover': {
        backgroundColor: colors.background['20']
      }
    }
  }
})
interface ExpansionMenuProps {
  data: { [key: string]: any }[]
  getComponent: (item: { [key: string]: any }) => React.ReactNode
  SumaryComponent: React.ReactType
  onChange?: (item: { [key: string]: any }) => void
  expansionMenuClasses?: any
  sumaryClasses?: any
  menuItemClasses?: any
  expandMoreIconClasses?: any
}

const ExpansionMenu: React.FC<ExpansionMenuProps> = ({
  data,
  getComponent,
  SumaryComponent,
  onChange,
  expansionMenuClasses,
  sumaryClasses,
  menuItemClasses,
  expandMoreIconClasses
}: ExpansionMenuProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const classes = useStyles()

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSelect = item => () => {
    setIsExpanded(false)
    if (onChange) {
      onChange(item)
    }
  }

  return (
    <ExpansionPanel
      expanded={isExpanded}
      square={true}
      onChange={toggleExpanded}
      className={`${
        classes.expansionPanel
      } ${expansionMenuClasses} Bolt-ExpansionMenu`}
    >
      <ExpansionPanelSummary
        className={`${
          classes.sumary
        } ${sumaryClasses} Bolt-ExpansionMenu-summary`}
        expandIcon={
          <ExpandMoreIcon
            className={`${expandMoreIconClasses} Bolt-ExpansionMenu-expandMoreIcon`}
          />
        }
      >
        <SumaryComponent />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {data.map((item, index) => (
          <MenuItem
            className={`${
              classes.menuItem
            } ${menuItemClasses} BoltExpansionMenu-menuItem`}
            key={index}
            onClick={handleSelect(item)}
          >
            {getComponent(item)}
          </MenuItem>
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export { ExpansionMenu }
