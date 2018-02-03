import { put, takeLatest } from 'redux-saga/effects'
import { getArticleSuccess, getArticleError } from '../../actions'
import { GET_ARTICLE } from '../../constants/action.types'

export function readArticle(articleId) {
  const data = require('../data/index.json')
  const articlesByType = data.baby_sicknesses.map(articleType => {
    return articleType.articles
  })
  const articles = articlesByType.reduce(function(prev, curr) {
    return prev.concat(curr);
  })
  return articles.find(article => article._id === articleId)
}

export function* getArticle(action) {
  try {
    const article = readArticle(action.payload.articleId)

    yield put(getArticleSuccess({ article }))
  } catch (err) {
    yield put(getArticleError(err))
  }
}

export default function*() {
    yield takeLatest(GET_ARTICLE, getArticle)
}
