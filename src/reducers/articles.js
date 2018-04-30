import * as actionTypes from '../constants/action.types'
import * as states from '../constants/state.types'

const initialState = {
  articlesType: {
    type: '',
    name: ''
  },
  status: states.LOADING
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_TYPE:
      return {
        ...state,
        status: states.LOADING
      }
    case actionTypes.GET_ARTICLES_TYPE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: states.READY
      }
    case actionTypes.GET_ARTICLES_TYPE_FAILURE:
      return {
        ...state,
        status: states.ERROR
      }
    case actionTypes.GET_ARTICLES:
      return {
        ...state,
        status: states.LOADING
      }
    case actionTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: states.READY
      }
    case actionTypes.GET_ARTICLES_FAILURE:
      return {
        ...state,
        status: states.ERROR
      }
    case actionTypes.GET_ARTICLE:
      return {
        ...state,
        status: states.LOADING
      }
    case actionTypes.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: states.READY
      }
    case actionTypes.GET_ARTICLE_FAILURE:
      return {
        ...state,
        status: states.ERROR
      }
    case actionTypes.GET_ARTICLE_SEARCH:
      return {
        ...state,
        status: states.LOADING
      }
    case actionTypes.GET_ARTICLE_SEARCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: states.READY
      }
    case actionTypes.GET_ARTICLE_SEARCH_FAILURE:
      return {
        ...state,
        status: states.ERROR
      }
    case actionTypes.GET_ABOUT:
      return {
        ...state,
        status: states.LOADING
      }
    case actionTypes.GET_ABOUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: states.READY
      }
    case actionTypes.GET_ABOUT_FAILURE:
      return {
        ...state,
        status: states.ERROR
      }
    default:
      return state
  }
}
