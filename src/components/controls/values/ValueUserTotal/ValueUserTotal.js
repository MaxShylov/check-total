import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { ValueMoney } from 'components/controls/values/ValueMoney'

import styles from './ValueUserTotal.module.scss'

const ValueUserTotalComponent = ({ menuItems }) => {
  const total = useMemo(
    () =>
      menuItems.reduce(
        (acc, item) => acc + (item.price * item.amount) / item.divideBy,
        0,
      ),
    [menuItems],
  )

  return (
    <div>
      <div className={styles.label}>Total:</div>
      <div className={styles.value}>
        <ValueMoney value={total} />
      </div>
    </div>
  )
}

ValueUserTotalComponent.propTypes = {
  menuItems: PropTypes.array.isRequired,
}

export const ValueUserTotal = React.memo(ValueUserTotalComponent)
