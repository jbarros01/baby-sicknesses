import { put, takeLatest } from 'redux-saga/effects'
import { getArticlesType } from '../actions'
import { INIT } from '../constants/action.types'

function* init() {
  yield put(getArticlesType())
}

export default function*() {
  yield takeLatest(INIT, init)
}
