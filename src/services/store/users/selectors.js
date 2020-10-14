import { createSelector } from 'reselect'

import { getMenuItems } from 'services/store/menuItems/selectors'

export const getData = state => state.users

export const getUsers = createSelector(
  getData,
  getMenuItems,
  (users, menuItems) => {
    const newUsers = {}
    // eslint-disable-next-line guard-for-in
    for (const key in users) {
      newUsers[key] = {
        ...users[key],
        menuItems: users[key].menuItems.map(i => menuItems[i]),
      }
    }
    return newUsers
  },
)
