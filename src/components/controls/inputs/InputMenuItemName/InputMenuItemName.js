import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Input from 'antd/lib/input'

import { menuItemsActions } from 'services/store/menuItems/actions'

export const InputMenuItemName = ({ menuItemId, name }) => {
  const dispatch = useDispatch()
  const handleChange = useCallback(
    e => {
      dispatch(menuItemsActions.setName({ menuItemId, name: e.target.value }))
    },
    [dispatch, menuItemId],
  )

  return <Input value={name} onChange={handleChange} />
}

InputMenuItemName.defaultProps = {
  name: null,
}

InputMenuItemName.propTypes = {
  menuItemId: PropTypes.number.isRequired,
  name: PropTypes.string,
}
