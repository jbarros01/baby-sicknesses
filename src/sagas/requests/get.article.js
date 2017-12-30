import { put, takeLatest } from 'redux-saga/effects'
import { getArticleSuccess, getArticleError } from '../../actions'
import { GET_ARTICLE } from '../../constants/action.types'

export function readArticleFile(typeId) {
  return require('../data/index.json')
  // return data.baby_sicknesses.find(articleType => articleType._id === typeId).articles
}

export function* getArticle(action) {
  try {
    const article = readArticleFile(action.payload.typeId)

    yield put(getArticleSuccess({ article }))
  } catch (err) {
    yield put(getArticleError(err))
  }
}

export default function*() {
    yield takeLatest(GET_ARTICLE, getArticle)
}
