import { createActions } from 'redux-actions'

import noop from 'lodash/noop'

export const usersActions = createActions(
  {
    // Sync
    ADD: noop,
    SET_NAME: data => data,
    SET_MENU_ITEM: data => data,
    DELETE_MENU_ITEM: data => data,
    DELETE: data => data,
  },
  {
    prefix: 'Users',
    namespace: '.',
  },
)
