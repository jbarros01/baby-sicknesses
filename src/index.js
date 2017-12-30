import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import configure from './config'
import { init } from './actions'
import Root from './Root'

// Restore existing version of lodash
_.noConflict()

document.onreadystatechange = () => {
  startApp()
}

function startApp() {
  const rootElement = document.getElementById('root')
  const { store, history } = configure()

  setup(store.dispatch)

  ReactDOM.render(<Root store={store} history={history} />, rootElement)
}

function setup(dispatch) {
  dispatch(init())
}
