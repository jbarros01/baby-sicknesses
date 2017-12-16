import * as types from '../constants/action.types'
import { routerActions } from 'react-router-redux'
import { EDIT_BILLING_DETAILS, LIST } from '../constants/routes'

export default store => next => action => {
  next(action)
  switch (action.type) {
    case types.GO_BACK:
      store.dispatch(routerActions.goBack())
      break
    case types.EDIT_BILLING_DETAILS:
      store.dispatch(routerActions.push(EDIT_BILLING_DETAILS))
      break
    case types.SAVE_TEAM_SUCCESS:
      store.dispatch(routerActions.push(LIST))
      break
    default:
  }
}
