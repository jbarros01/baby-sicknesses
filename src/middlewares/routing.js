import * as types from '../constants/action.types'
import { routerActions } from 'react-router-redux'
import { ARTICLES_LIST, ARTICLE } from '../constants/routes'

export default store => next => action => {
  next(action)
  switch (action.type) {
    case types.GO_BACK:
      store.dispatch(routerActions.goBack())
      break
    case types.GET_ARTICLES:
    case types.GET_ARTICLE_SEARCH:
      store.dispatch(routerActions.push(ARTICLES_LIST))
      break
    case types.GET_ARTICLE:
      store.dispatch(routerActions.push(ARTICLE))
      break
    default:
      break
  }
}
