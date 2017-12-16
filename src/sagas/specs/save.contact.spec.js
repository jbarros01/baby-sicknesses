import { initSaga } from '../save.contact'
import * as actions from '../../actions'
import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

describe('saga#saveContact', function() {
  let contact
  let generator

  describe('.initSaga', () => {
    beforeEach(function() {
      contact = {
        first_name: 'First'
      }
      generator = initSaga(actions.saveContact(contact))
    })
    it('behaves as expected', function() {
      let next = generator.next()
      expect(next.value).toEqual(call(delay, 5000))

      // const devicesMock = { input: [], output: [] }
      // next = this.generator.next(devicesMock)
      // expect(next.value).toEqual(put(actions.setAvailableDevices(devicesMock)))

      next = generator.next()
      expect(next.value).toEqual(put(actions.saveContactSuccess(contact)))

      next = generator.next()
      expect(next.done).toEqual(true)
    })
  })
})
