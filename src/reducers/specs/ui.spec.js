import reducer from '../ui'
import * as actions from '../../actions'

describe('ui', () => {
  describe('when action is not known', () => {
    test('returns the current state', () => {
      const action = { type: 'UNKNOWN_ACTION' }
      const currentState = { editing_customer: false }
      const nextState = reducer(currentState, action)

      expect(nextState).toEqual(currentState)
    })
  })

  describe('when action is START_EDITING_CONTACT', () => {
    test('editing_contact is true', () => {
      const action = actions.startEditingContact()
      const currentState = { editing_contact: false }
      const nextState = reducer(currentState, action)

      const expectedState = { editing_contact: true }
      expect(nextState).toEqual(expectedState)
    })
  })
})
