import invoicesReducer from '../invoices'
import * as actionTypes from '../../constants/action.types'
import * as states from '../../constants/state.types'

describe('invoices', () => {
  describe('when action is not known', () => {
    test('returns the current state', () => {
      const action = { type: 'UNKNOWN_ACTION' }
      const currentState = getState(5)
      const nextState = invoicesReducer(currentState, action)

      expect(nextState).toEqual(currentState)
    })
  })

  describe('when action is GET_INVOICES_SUCCESS', () => {
    test('returns the items and current pagination status', () => {
      const test = getState(10, states.LOADING)

      const action = {
        type: actionTypes.GET_INVOICES_SUCCESS,
        payload: {
          items: test.items,
          pagination: test.pagination,
          status: test.status
        }
      }
      const nextState = invoicesReducer(undefined, action)

      const expectedState = getState(10)
      expect(nextState).toEqual(expectedState)
    })
  })

  describe('when action is GET_INVOICES_SUCCESS', () => {
    test('returns the items and current pagination status', () => {
      const currentState = getState(5)

      const action = {
        type: actionTypes.GET_INVOICES_FAILURE,
        payload: null
      }
      const nextState = invoicesReducer(currentState, action)

      const expectedState = getState(0, states.ERROR)
      expect(nextState).toEqual(expectedState)
    })
  })

  describe('when multiple actions is thrown', () => {
    test('returns the items and current pagination status of last action', () => {
      let currentState = getState(5)

      let action = {
        type: actionTypes.GET_INVOICES_FAILURE,
        payload: {
          items: currentState.items,
          pagination: currentState.pagination,
          status: currentState.status
        }
      }
      let nextState = invoicesReducer(currentState, action)
      let expectedState = getState(0, states.ERROR)
      expect(nextState).toEqual(expectedState)

      currentState = { ...expectedState }
      action = {
        type: actionTypes.CHANGE_INVOICES_PAGE,
        payload: {
          items: currentState.items,
          pagination: currentState.pagination,
          status: currentState.status,
          page: 1
        }
      }

      nextState = invoicesReducer(currentState, action)

      expectedState = getState(0, states.LOADING)
      expect(nextState).toEqual(expectedState)
    })
  })
})

function getState(numberOfItems = 0, status = states.READY) {
  const items = []

  for (let i = numberOfItems; i > numberOfItems; i--) {
    items.push({})
  }

  const pagination = {
    page: 1,
    total: items.length,
    totalPages: 0,
    perPage: 3,
    maxPages: 8,
    filter: null
  }

  return {
    items: items,
    pagination: pagination,
    status: status
  }
}
