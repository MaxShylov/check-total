import { combineReducers } from 'redux'

import { usersReducer as users } from 'services/store/users/reducer'
import { menuItemsReducer as menuItems } from 'services/store/menuItems/reducer'
import { infoReducer as info } from 'services/store/info/reducer'

export const rootReducer = combineReducers({
  users,
  menuItems,
  info,
})
