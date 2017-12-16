import * as actionTypes from '../constants/action.types'

const initialState = {
  first_name: 'First'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BILLING_DETAILS_SUCCESS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
