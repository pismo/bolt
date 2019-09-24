import * as React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MenuItem from '@material-ui/core/MenuItem'

const { useState } = React

interface ExpansionMenuProps {
  data: { [key: string]: any }[]
  getComponent: (item: { [key: string]: any }) => React.ReactNode
  SumaryComponent: React.ReactType
  onChange?: (item: { [key: string]: any }) => void
}

const ExpansionMenu: React.FC<ExpansionMenuProps> = ({
  data,
  getComponent,
  SumaryComponent,
  onChange
}: ExpansionMenuProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

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
      className='ExpansionMenu'
    >
      <ExpansionPanelSummary
        className='ExpansionMenu-summary'
        expandIcon={<ExpandMoreIcon className='ExpansionMenu-expandMoreIcon' />}
      >
        <SumaryComponent />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {data.map((item, index) => (
          <MenuItem key={index} onClick={handleSelect(item)}>
            {getComponent(item)}
          </MenuItem>
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export { ExpansionMenu }
