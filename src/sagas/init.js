import { put, takeLatest } from 'redux-saga/effects'
import { getBillingDetails } from '../actions'
import { INIT } from '../constants/action.types'

function* init() {
  yield put(getBillingDetails())
}

export default function*() {
  yield takeLatest(INIT, init)
}
