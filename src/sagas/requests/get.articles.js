import { put, takeLatest } from 'redux-saga/effects'
import { getArticlesSuccess, getArticlesError } from '../../actions'
import { GET_ARTICLES } from '../../constants/action.types'

export function readArticlesFile(typeId) {
  const data = require('../data/index.json')
  return data.baby_sicknesses.find(articleType => articleType._id === typeId).articles
}

export function* getArticles(action) {
  try {
    const articlesList = readArticlesFile(action.payload.typeId)

    yield put(getArticlesSuccess({ articlesList }))
  } catch (err) {
    yield put(getArticlesError(err))
  }
}

export default function*() {
    yield takeLatest(GET_ARTICLES, getArticles)
}
