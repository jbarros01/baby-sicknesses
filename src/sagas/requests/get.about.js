import { put, takeLatest } from 'redux-saga/effects'
import { getAboutSuccess, getAboutError } from '../../actions'
import { GET_ABOUT } from '../../constants/action.types'

function readAbout() {
  const data = require('../data/index.json')
  return data.about
}

export function* getAbout() {
  try {   
    const about = readAbout()

    yield put(getAboutSuccess({ about }))
  } catch (err) {
    yield put(getAboutError(err))
  }
}

export default function*() {
    yield takeLatest(GET_ABOUT, getAbout)
}
