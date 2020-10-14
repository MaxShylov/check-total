import React, { useCallback } from 'react'
import Button from 'antd/lib/button'
import { useDispatch } from 'react-redux'

import { usersActions } from 'services/store/users/actions'

export const ButtonAddUser = () => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => dispatch(usersActions.add()), [
    dispatch,
  ])

  return <Button onClick={handleClick}>Add User</Button>
}
