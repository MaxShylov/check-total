import React from 'react'
import { useSelector } from 'react-redux'

import values from 'lodash/values'

import { getUsers } from 'services/store/users/selectors'
import { ButtonAddUser } from 'components/controls'
import { UserCard } from 'components/UserCard'

import styles from './Users.module.scss'

export const Users = () => {
  const users = useSelector(getUsers)

  return (
    <div className={styles.wrap}>
      {values(users).map(user => (
        <UserCard key={user.id} {...user} />
      ))}
      <ButtonAddUser />
    </div>
  )
}
