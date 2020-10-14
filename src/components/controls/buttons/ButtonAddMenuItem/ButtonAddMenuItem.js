import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from 'antd/lib/button'

import { menuItemsActions } from 'services/store/menuItems/actions'
import { usersActions } from 'services/store/users/actions'

export const ButtonAddMenuItem = ({ userId }) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    const menuItemId = +new Date()
    dispatch(menuItemsActions.add({ menuItemId }))
    dispatch(usersActions.setMenuItem({ userId, menuItemId }))
  }, [dispatch, userId])

  return <Button onClick={handleClick}>Add Menu Item</Button>
}

ButtonAddMenuItem.propTypes = {
  userId: PropTypes.number.isRequired,
}
