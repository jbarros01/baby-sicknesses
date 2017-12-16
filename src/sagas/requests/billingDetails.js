import { call, put, takeLatest } from 'redux-saga/effects'
import { getBillingDetailsSuccess, getBillingDetailsError } from '../../actions'
import { GET_BILLING_DETAILS } from '../../constants/action.types'

export function deserializeContact() {
  return {
    first_name: 'José'
  }
}

export function* getBillingDetails() {
  try {
    const data = deserializeContact()
    yield put(getBillingDetailsSuccess({ ...data }))
  } catch (err) {
    yield put(getBillingDetailsError(err))
  }
}

export default function*() {
  yield takeLatest(GET_BILLING_DETAILS, getBillingDetails)
}
