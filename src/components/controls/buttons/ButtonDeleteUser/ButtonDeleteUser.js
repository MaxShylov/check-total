import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import Button from 'antd/lib/button'

import { usersActions } from 'services/store/users/actions'

import styles from './ButtonDeleteUser.module.scss'

export const ButtonDeleteUser = ({ userId }) => {
  const dispatch = useDispatch()
  const handleClick = useCallback(() => {
    dispatch(usersActions.delete({ userId }))
  }, [dispatch, userId])

  return (
    <Button
      className={styles.button}
      danger
      icon={<CloseOutlined />}
      shape="circle"
      type="text"
      onClick={handleClick}
    />
  )
}

ButtonDeleteUser.propTypes = {
  userId: PropTypes.number.isRequired,
}
