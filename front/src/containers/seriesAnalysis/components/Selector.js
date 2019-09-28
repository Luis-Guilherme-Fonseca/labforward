import React from 'react'
import { Dropdown } from 'semantic-ui-react'

function Selector({ text, data, onSelect }) {
  return (
    <Dropdown text={ text }>
      <Dropdown.Menu>
        {data.map((item, index) => 
          <Dropdown.Item key={index} text={item.name} onClick={() => onSelect(item)} />
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Selector