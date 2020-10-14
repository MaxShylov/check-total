import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

import { menuItemsActions } from 'services/store/menuItems/actions'
import { usersActions } from 'services/store/users/actions'

export const ButtonDeleteMenuItem = ({ menuItemId, userId }) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(menuItemsActions.delete({ menuItemId }))
    dispatch(usersActions.deleteMenuItem({ userId, menuItemId }))
  }, [dispatch, menuItemId, userId])

  return (
    <Button
      danger
      icon={<DeleteOutlined />}
      shape="circle"
      size="small"
      type="text"
      onClick={handleClick}
    />
  )
}

ButtonDeleteMenuItem.propTypes = {
  menuItemId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
}
