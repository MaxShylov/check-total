import { createActions } from 'redux-actions'

export const menuItemsActions = createActions(
  {
    // Sync
    ADD: data => data,
    SET_NAME: data => data,
    SET_PRICE: data => data,
    SET_AMOUNT: data => data,
    SET_DIVIDE_BY: data => data,
    DELETE: data => data,
  },
  {
    prefix: 'Products',
    namespace: '.',
  },
)
