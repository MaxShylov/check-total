import { all } from 'redux-saga/effects'

// import { watchUser } from 'bus/user/saga/watchers';

export function* rootSaga() {
  yield all([
    // call(watchUser),
  ])
}
