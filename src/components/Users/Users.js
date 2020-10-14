import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import values from 'lodash/values'

import { getUsers } from 'services/store/users/selectors'
import { getWithMy } from 'services/store/settings/selectors'
import { ButtonAddUser } from 'components/controls'
import { UserCard } from 'components/UserCard'

import styles from './Users.module.scss'

export const Users = () => {
  const users = useSelector(getUsers)
  const withMy = useSelector(getWithMy)

  const arrUsers = useMemo(
    () =>
      values(users).filter(item => {
        if (!withMy) return item.id !== 1
        return true
      }),
    [users, withMy],
  )

  return (
    <div className={styles.wrap}>
      {arrUsers.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
      <ButtonAddUser />
    </div>
  )
}
