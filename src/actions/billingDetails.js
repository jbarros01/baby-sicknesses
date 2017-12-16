import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const editBillingDetails = actionCreator(
  actionTypes.EDIT_BILLING_DETAILS
)

export const getBillingDetails = actionCreator(
  actionTypes.GET_BILLING_DETAILS,
  () => ({})
)

export const getBillingDetailsSuccess = actionCreator(
  actionTypes.GET_BILLING_DETAILS_SUCCESS,
  billingDetails => ({ ...billingDetails })
)

export const getBillingDetailsError = actionCreator(
  actionTypes.GET_BILLING_DETAILS_ERROR,
  error => ({ ...error })
)
