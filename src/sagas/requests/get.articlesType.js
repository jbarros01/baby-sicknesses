import { put, takeLatest } from 'redux-saga/effects'
import { getArticlesTypeSuccess, getArticlesTypeError } from '../../actions'
import { GET_ARTICLES_TYPE } from '../../constants/action.types'

export function readArticlesTypeFile() {
  return require('../data/index.json')
}

export function deserializeArticleType(data) {
  return data.baby_sicknesses.map(sick => ({
    _id: sick._id,
    name: sick.article_type,
  }))
}

export function* getArticlesType() {
  try {
    const data = readArticlesTypeFile()
    const articlesType = deserializeArticleType(data)

    yield put(getArticlesTypeSuccess({ articlesType }))
  } catch (err) {
    yield put(getArticlesTypeError(err))
  }
}

export default function*() {
  yield takeLatest(GET_ARTICLES_TYPE, getArticlesType)
}
