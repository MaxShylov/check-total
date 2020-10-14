import React from 'react'
import PropTypes from 'prop-types'

import { ButtonAddMenuItem } from 'components/controls'
import { MenuItem } from 'components/MenuItem'

export const UserMenuItems = ({ userId, menuItems }) => {
  return (
    <div>
      {menuItems.map(menuItem => (
        <MenuItem key={menuItem.id} {...menuItem} userId={userId} />
      ))}
      <ButtonAddMenuItem userId={userId} />
    </div>
  )
}

UserMenuItems.defaultProps = {
  menuItems: [],
}

UserMenuItems.propTypes = {
  menuItems: PropTypes.array,
  userId: PropTypes.number.isRequired,
}
