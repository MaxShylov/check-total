import { createActions } from 'redux-actions'

export const infoActions = createActions(
  {
    // Sync
    SET_TOTAL_AMOUNT: value => value,
    SET_DISCOUNT: value => value,
  },
  {
    prefix: 'Info',
    namespace: '.',
  },
)
