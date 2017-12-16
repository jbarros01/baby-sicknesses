import reducer from '../contact'
import * as actions from '../../actions'

describe('contact', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      first_name: 'First',
      last_name: 'Last',
      company_name: 'Company',
      vat: '123456789',
      emails: {
        finance: 'f@mail.com',
        invoices: []
      }
    }
  })

  describe('when action is not known', () => {
    test('returns the current state', () => {
      const action = { type: 'UNKNOWN_ACTION' }
      const currentState = {
        name: null,
        address: { street: null, country: null, state: null }
      }
      const nextState = reducer(currentState, action)

      expect(nextState).toEqual(currentState)
    })
  })

  describe('when action is SAVE_CONTACT', () => {
    test('status is set to saving, without changing data', () => {
      const contact = {
        first_name: 'NFirst',
        last_name: 'LLast',
        company_name: 'NCompany',
        vat: '123456789',
        emails: {
          finance: 'f@mail.com',
          invoices: []
        }
      }

      const action = actions.saveContact(contact)
      const nextState = reducer(initialState, action)
      const expectedState = {
        ...initialState,
        saving: true
      }

      expect(nextState).toEqual(expectedState)
    })
  })

  describe('when action is SAVE_CONTACT_SUCCESS', () => {
    test('data is updated', () => {
      const contact = {
        first_name: 'NFirst',
        last_name: 'LLast',
        company_name: 'NCompany',
        vat: '123456789',
        emails: {
          finance: 'f@mail.com',
          invoices: []
        }
      }

      const action = actions.saveContactSuccess(contact)
      const nextState = reducer(initialState, action)
      const expectedState = {
        ...contact,
        saving: false
      }

      expect(nextState).toEqual(expectedState)
    })
  })

  describe('when action is SAVE_CONTACT_ERROR', () => {
    test('error is set and data is not updated', () => {
      const error = {
        code: '123',
        message: 'error'
      }

      const action = actions.saveContactError(error)
      const nextState = reducer(initialState, action)
      const expectedState = {
        ...initialState,
        saving: false,
        error: error
      }

      expect(nextState).toEqual(expectedState)
    })
  })

  describe('when action is GET_CONTACT_SUCCESS', () => {
    it('updates the contact info', () => {
      const contact = {
        first_name: 'Tom',
        last_name: 'Sawyer',
        emails: {
          finance: 'tom@toms.com',
          invoices: []
        }
      }
      const action = actions.getContactSuccess(contact)

      const currentState = {
        first_name: 'Joe',
        last_name: 'Indio',
        emails: {
          finance: 'joe.indio@toms.com',
          invoices: []
        }
      }

      const nextState = reducer(currentState, action)

      const expectedState = {
        first_name: 'Tom',
        last_name: 'Sawyer',
        emails: {
          finance: 'tom@toms.com',
          invoices: []
        },
        saving: false
      }

      expect(nextState).toEqual(expectedState)
    })
  })
})
