import { handleActions } from 'redux-actions'

import { menuItemsActions } from './actions'

const initialState = {}

export const menuItemsReducer = handleActions(
  {
    [menuItemsActions.add]: (state, { payload }) => {
      const newMenuItems = {
        id: payload.menuItemId,
        amount: null,
        divideBy: 1,
        name: null,
        price: null,
      }
      return {
        ...state,
        [newMenuItems.id]: newMenuItems,
      }
    },
    [menuItemsActions.setName]: (state, { payload }) => {
      const { menuItemId, name } = payload
      return {
        ...state,
        [menuItemId]: {
          ...state[menuItemId],
          name,
        },
      }
    },
    [menuItemsActions.setPrice]: (state, { payload }) => {
      const { menuItemId, price } = payload
      return {
        ...state,
        [menuItemId]: {
          ...state[menuItemId],
          price,
        },
      }
    },
    [menuItemsActions.setAmount]: (state, { payload }) => {
      const { menuItemId, amount } = payload
      return {
        ...state,
        [menuItemId]: {
          ...state[menuItemId],
          amount,
        },
      }
    },
    [menuItemsActions.setDivideBy]: (state, { payload }) => {
      const { menuItemId, divideBy } = payload
      return {
        ...state,
        [menuItemId]: {
          ...state[menuItemId],
          divideBy,
        },
      }
    },
    [menuItemsActions.delete]: (state, { payload }) => {
      delete state[payload.menuItemId]
      return { ...state }
    },
  },
  initialState,
)
