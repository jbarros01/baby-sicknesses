import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchContact } from '../../api/contact'
import { getContactSuccess, getContactError } from '../../../actions'
import { GET_CONTACT } from '../../../constants/action.types'
import saga, { getContact } from '../contact'
import { runGeneratorWith } from '../../run.generator'

describe('contact request', () => {
  it('takes the last action to get the contact', () => {
    const gen = saga()

    expect(gen.next().value).toEqual(takeLatest(GET_CONTACT, getContact))
    expect(gen.next().done).toBeTruthy()
  })

  describe('*getContact', () => {
    it('fetches the contact successfuly', () => {
      const contact = {
        first_name: 'Joe',
        last_name: 'Indio',
        emails: {
          finance: 'joe.indio@toms.com',
          invoices: []
        }
      }
      const effects = [{ key: call(fetchContact), value: contact }]
      const result = runGeneratorWith(getContact(), effects)

      expect(result).toContainEqual(
        put(
          getContactSuccess({
            first_name: contact.first_name,
            last_name: contact.last_name,
            emails: contact.emails
          })
        )
      )
    })

    describe('when there is an error fetching the contact', () => {
      it('fails to fetch the contact', () => {
        const error = new Error('Ups...')
        const effects = [{ key: call(fetchContact), error }]
        const result = runGeneratorWith(getContact(), effects)

        expect(result).toContainEqual(put(getContactError(error)))
      })
    })
  })
})
