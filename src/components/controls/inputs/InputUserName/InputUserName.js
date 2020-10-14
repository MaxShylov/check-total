import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Input from 'antd/lib/input'

import { usersActions } from 'services/store/users/actions'

export const InputUserName = ({ value, userId }) => {
  const dispatch = useDispatch()

  const handleChange = useCallback(
    e => dispatch(usersActions.setName({ userId, name: e.target.value })),
    [dispatch, userId],
  )

  return <Input value={value} onChange={handleChange} />
}

InputUserName.defaultProp = {
  value: null,
}

InputUserName.propTypes = {
  value: PropTypes.string,
  userId: PropTypes.number.isRequired,
}
