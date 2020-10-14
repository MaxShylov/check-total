import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import values from 'lodash/values'

import { infoActions } from 'services/store/info/actions'
import { getTotalAmount } from 'services/store/info/selectors'
import { getMenuItems } from 'services/store/menuItems/selectors'
import { InputPrice, ValueMoney } from 'components/controls'

import styles from './Info.module.scss'

export const Info = () => {
  const dispatch = useDispatch()
  const totalAmount = useSelector(getTotalAmount) || 0
  const menuItems = useSelector(getMenuItems)
  const menuItemsTotal = values(menuItems).reduce(
    (acc, item) => acc + (item.price * item.amount) / item.divideBy,
    0,
  )
  const difference = totalAmount - menuItemsTotal

  const handleChangeTotal = useCallback(
    value => dispatch(infoActions.setTotalAmount(value)),
    [dispatch],
  )

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.label}>Total Amount:</div>
        <div className={styles.value}>
          <InputPrice value={totalAmount} onChange={handleChangeTotal} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Users Total:</div>
        <div className={styles.value}>
          <ValueMoney value={menuItemsTotal} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>Difference:</div>
        <div className={styles.value}>
          <ValueMoney value={difference} />
        </div>
      </div>
    </div>
  )
}
