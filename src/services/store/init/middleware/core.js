import { applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const { NODE_ENV, REACT_APP_HIDE_CONSOLE_REDUX } = process.env

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139bfe',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#a47104',
    error: () => '#ff0005',
  },
})

const sagaMiddleware = createSagaMiddleware()
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnchancers = devtools || compose

const enhancedStore =
  NODE_ENV === 'development' && !REACT_APP_HIDE_CONSOLE_REDUX
    ? composeEnchancers(applyMiddleware(sagaMiddleware, loggerMiddleware))
    : composeEnchancers(applyMiddleware(sagaMiddleware))

export { enhancedStore, sagaMiddleware }
