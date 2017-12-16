import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { SAGA_ACTION } from 'redux-saga/utils'
import { isEqual } from 'lodash'

const effectsReducer = (state = {}, action) => {
  const isSagaAction = action[SAGA_ACTION]

  if (isSagaAction) {
    return { ...state, [action.type]: { action, timestamp: Date.now() } }
  }

  return state
}

const getEffects = state => state._effects

export const createSagaRunner = ({ initialState = {} } = {}) => {
  const defaultReducer = initState => (state = initState, action) => state
  const sagaMiddleware = createSagaMiddleware()
  const reducers = Object.keys(initialState).reduce((rx, k) => {
    return { ...rx, [k]: defaultReducer(initialState[k]) }
  }, {})
  const store = createStore(
    combineReducers({
      ...reducers,
      _effects: effectsReducer
    }),
    initialState,
    applyMiddleware(sagaMiddleware)
  )

  return {
    dispatch: store.dispatch,
    run: (saga, ...args) => {
      sagaMiddleware.run(saga, ...args)
    },
    didPut: action => {
      const state = store.getState()
      const effects = getEffects(state)

      return isEqual(effects[action.type].action, action)
    }
  }
}
