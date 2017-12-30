import { createStore, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createReducer from './reducer'
import createMiddleware from './middleware'
import createSagaMiddleware from 'redux-saga'
import runSagas from './saga'

function enableHotReload(store, reducers) {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default(reducers)
      store.replaceReducer(nextReducer())
    })
  }
}

function configureStore(history) {
  const reducers = { routing: routerReducer }
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createReducer(reducers),
    undefined,
    compose(
      createMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'DoencasInfantis' })
        : f => f
    )
  )

  runSagas(sagaMiddleware)

  enableHotReload(store, reducers)

  return store
}

export default configureStore
