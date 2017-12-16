import { LOCATION_CHANGE } from 'react-router-redux'

const getAccessToken = state => {
  const { locationBeforeTransitions } = state.routing

  return locationBeforeTransitions && locationBeforeTransitions.hash
}

export default store => next => action => {
  if (process.env.RELEASE_STAGE !== 'development') {
    return next(action)
  }

  const state = store.getState()
  const token = getAccessToken(state)

  if (!token || action.type !== LOCATION_CHANGE) {
    return next(action)
  }

  const payload = { ...action.payload, hash: token }
  const nextAction = { ...action, payload }

  next(nextAction)
}
