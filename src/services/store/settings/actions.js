import { createActions } from 'redux-actions'

export const settingsActions = createActions(
  {
    // Sync
    SET_WITH_MY: value => value,
    SET_WITH_TITLE: value => value,
  },
  {
    prefix: 'Settings',
    namespace: '.',
  },
)
