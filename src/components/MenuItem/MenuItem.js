import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Input from 'antd/lib/input'

import {
  ButtonDeleteMenuItem,
  InputAmount,
  InputDivideBy,
  InputPrice,
} from 'components/controls'
import { menuItemsActions } from 'services/store/menuItems/actions'
import { getWithTitle } from 'services/store/settings/selectors'

import styles from './MenuItem.module.scss'

export const MenuItem = ({ id, name, amount, divideBy, price, userId }) => {
  const dispatch = useDispatch()
  const menuItemId = id
  const withTitle = useSelector(getWithTitle)

  const handleChangeName = useCallback(
    e => {
      dispatch(menuItemsActions.setName({ menuItemId, name: e.target.value }))
    },
    [dispatch, menuItemId],
  )
  const handleChangePrice = useCallback(
    value => dispatch(menuItemsActions.setPrice({ menuItemId, price: value })),
    [dispatch, menuItemId],
  )
  const handleChangeAmount = useCallback(
    value =>
      dispatch(menuItemsActions.setAmount({ menuItemId, amount: value })),
    [dispatch, menuItemId],
  )
  const handleChangeDivideBy = useCallback(
    value => {
      dispatch(menuItemsActions.setDivideBy({ menuItemId, divideBy: value }))
    },
    [dispatch, menuItemId],
  )

  return (
    <div className={styles.wrap}>
      {withTitle && (
        <div className={styles.title}>
          <div className={styles.label}>Title</div>
          <Input value={name} onChange={handleChangeName} />
        </div>
      )}
      <div className={`${styles.details} ${!withTitle && styles.detailsFull}`}>
        <div className={styles.price}>
          <div className={styles.label}>Price</div>
          <InputPrice value={price} onChange={handleChangePrice} />
        </div>
        <div className={styles.amount}>
          <div className={styles.label}>Amount</div>
          <InputAmount value={amount} onChange={handleChangeAmount} />
        </div>
        <div className={styles.divideBy}>
          <div className={styles.label}>Divide By</div>
          <InputDivideBy value={divideBy} onChange={handleChangeDivideBy} />
        </div>
        <div className={styles.deleteWrap}>
          <ButtonDeleteMenuItem menuItemId={id} userId={userId} />
        </div>
      </div>
    </div>
  )
}

MenuItem.defaultProps = {
  amount: null,
  divideBy: null,
  price: null,
  name: null,
}

MenuItem.propTypes = {
  amount: PropTypes.number,
  divideBy: PropTypes.number,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  userId: PropTypes.number.isRequired,
}
