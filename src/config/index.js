import { syncHistoryWithStore } from 'react-router-redux'
import {
  createHistory as createBrowserHistory,
  createMemoryHistory
} from 'history'
import configureStore from './store'

const createHistory = () => {
  if (process.env.RELEASE_STAGE === 'development') {
    return createBrowserHistory()
  } else {
    return createMemoryHistory()
  }
}

export default () => {
  const history = createHistory()
  const store = configureStore(history)
  const enhancedHistory = syncHistoryWithStore(history, store)

  return { store, history: enhancedHistory }
}
