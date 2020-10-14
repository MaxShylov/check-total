import { handleActions } from 'redux-actions'

import { usersActions } from './actions'

const initialState = {
  1: {
    id: 1,
    name: 'My',
    menuItems: [],
  },
}

export const usersReducer = handleActions(
  {
    [usersActions.add]: state => {
      const newUser = {
        id: +new Date(),
        name: 'Name',
        menuItems: [],
      }
      return {
        ...state,
        [newUser.id]: newUser,
      }
    },
    [usersActions.setName]: (state, { payload }) => {
      const { userId, name } = payload
      return {
        ...state,
        [userId]: {
          ...state[userId],
          name,
        },
      }
    },
    [usersActions.setMenuItem]: (state, { payload }) => {
      const { userId, menuItemId } = payload
      return {
        ...state,
        [userId]: {
          ...state[userId],
          menuItems: [...state[userId].menuItems, menuItemId],
        },
      }
    },
    [usersActions.deleteMenuItem]: (state, { payload }) => {
      const { userId, menuItemId } = payload
      const menuItems = state[userId].menuItems.filter(
        item => item !== menuItemId,
      )
      return {
        ...state,
        [userId]: {
          ...state[userId],
          menuItems,
        },
      }
    },
    [usersActions.delete]: (state, { payload }) => {
      delete state[payload.userId]
      return { ...state }
    },
  },
  initialState,
)
