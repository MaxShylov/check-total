import { handleActions } from 'redux-actions'

import { settingsActions } from './actions'

const initialState = {
  withMy: true,
  withTitle: true,
}

export const settingsReducer = handleActions(
  {
    [settingsActions.setWithMy]: (state, { payload }) => ({
      ...state,
      withMy: payload,
    }),
    [settingsActions.setWithTitle]: (state, { payload }) => ({
      ...state,
      withTitle: payload,
    }),
  },
  initialState,
)
