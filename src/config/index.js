import { syncHistoryWithStore } from 'react-router-redux'
import {
  createHistory as createBrowserHistory
} from 'history'
import configureStore from './store'

const createHistory = () => {
  return createBrowserHistory()
}

export default () => {
  const history = createHistory()
  const store = configureStore(history)
  const enhancedHistory = syncHistoryWithStore(history, store)

  return { store, history: enhancedHistory }
}
