import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const getArticlesType = actionCreator(actionTypes.GET_ARTICLES_TYPE)

export const getArticlesTypeSuccess = actionCreator(
  actionTypes.GET_ARTICLES_TYPE_SUCCESS,
  articlesType => ({ ...articlesType })
)

export const getArticlesTypeError = actionCreator(
  actionTypes.GET_ARTICLES_TYPE_FAILURE,
  error => ({ ...error })
)

export const getArticles = actionCreator(
  actionTypes.GET_ARTICLES,
  typeId => ({
    typeId
  })
)

export const getArticlesSuccess = actionCreator(
  actionTypes.GET_ARTICLES_SUCCESS,
  articlesList => ({ ...articlesList })
)

export const getArticlesError = actionCreator(
  actionTypes.GET_ARTICLES_FAILURE,
  error => ({ ...error })
)

export const getArticle = actionCreator(
  actionTypes.GET_ARTICLE,
  articleId => ({
    articleId
  })
)

export const getArticleSuccess = actionCreator(
  actionTypes.GET_ARTICLE_SUCCESS,
  article => ({ ...article })
)

export const getArticleError = actionCreator(
  actionTypes.GET_ARTICLE_FAILURE,
  error => ({ ...error })
)

export const getArticleSearch = actionCreator(
  actionTypes.GET_ARTICLE_SEARCH,
  article => ({
    article
  })
)

export const getArticleSearchSuccess = actionCreator(
  actionTypes.GET_ARTICLE_SEARCH_SUCCESS,
  articles => ({ ...articles })
)

export const getArticleSearchError = actionCreator(
  actionTypes.GET_ARTICLE_SEARCH_FAILURE,
  error => ({ ...error })
)