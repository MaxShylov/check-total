import { handleActions } from 'redux-actions'

import { infoActions } from './actions'

const initialState = {
  totalAmount: null,
  discount: 0,
}

export const infoReducer = handleActions(
  {
    [infoActions.setTotalAmount]: (state, { payload }) => ({
      ...state,
      totalAmount: payload,
    }),
    [infoActions.setDiscount]: (state, { payload }) => ({
      ...state,
      discount: payload,
    }),
  },
  initialState,
)
