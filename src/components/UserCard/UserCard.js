import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import {
  ButtonDeleteUser,
  InputUserName,
  ValueUserTotal,
} from 'components/controls'
import { UserMenuItems } from 'components/UserMenuItems'

import styles from './UserCard.module.scss'

export const UserCardComponent = ({ id, name, menuItems }) => {
  let buttonDelete = useMemo(
    () => (
      <div className={styles.deleteWrap}>
        <ButtonDeleteUser userId={id} />
      </div>
    ),
    [id],
  )
  let fieldName = useMemo(
    () => <InputUserName style={{ width: 300 }} userId={id} value={name} />,
    [id, name],
  )

  if (id === 1) {
    buttonDelete = null
    fieldName = name
  }

  return (
    <div className={styles.wrap}>
      {buttonDelete}
      <Row gutter={[8, 16]}>
        <Col span={20}>{fieldName}</Col>
        <Col>
          <ValueUserTotal menuItems={menuItems} />
        </Col>
      </Row>
      <UserMenuItems menuItems={menuItems} userId={id} />
    </div>
  )
}

UserCardComponent.defaultProps = {
  name: null,
  menuItems: [],
}

UserCardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  menuItems: PropTypes.array,
}

export const UserCard = React.memo(UserCardComponent)
