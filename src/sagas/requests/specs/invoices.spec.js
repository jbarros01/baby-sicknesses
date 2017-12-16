import saga from '../invoices'
import { createSagaRunner } from '../../../helpers/specs/saga.runner'
import {
  getInvoices,
  getInvoicesSuccess,
  getInvoicesFailure
} from '../../../actions/invoices'

function createResponse() {
  return {
    _embedded: {
      invoices: [
        {
          id: 1,
          number: 1,
          total: {
            amount: 10,
            currency: '€'
          },
          balance: {
            amount: 20,
            currency: '€'
          },
          due_date: new Date(2000, 1, 1, 0, 0, 0, 0),
          _links: {
            pdf: {
              href: null
            }
          }
        }
      ]
    },
    total: 1,
    page: 1,
    per_page: 5,
    totalPages: 10
  }
}

const defaultState = {
  invoices: {
    items: [],
    pagination: {
      page: 1,
      perPage: 5
    }
  }
}

describe('invoices request', () => {
  describe('when no options are provided', () => {
    it('makes a request to fetch the invoices with the default options', () => {
      const sagaRunner = createSagaRunner({ initialState: defaultState })
      const result = createResponse()
      const request = jest.fn()
      request.mockReturnValueOnce(result)

      sagaRunner.run(saga, { request })
      sagaRunner.dispatch(getInvoices())

      expect(request).toHaveBeenCalledWith({
        page: defaultState.invoices.pagination.page,
        perPage: defaultState.invoices.pagination.perPage
      })
    })
  })

  describe('when success', () => {
    it('puts a success action with all the invoices', () => {
      const sagaRunner = createSagaRunner({ initialState: defaultState })
      const result = createResponse()
      const request = jest.fn()
      request.mockReturnValueOnce(result)

      sagaRunner.run(saga, { request })
      sagaRunner.dispatch(getInvoices())

      const resultSerialized = {
        pagination: {
          page: 1,
          perPage: 5,
          total: 1,
          totalPages: 1,
          maxPages: 8
        },
        items: [
          {
            id: 1,
            number: 1,
            total: '10 €',
            balance: '20 €',
            due_date: new Date(2000, 1, 1, 0, 0, 0, 0),
            url: null
          }
        ]
      }
      expect(request).toHaveBeenCalledTimes(1)
      expect(
        sagaRunner.didPut(getInvoicesSuccess(resultSerialized))
      ).toBeTruthy()
    })
  })

  describe('when an error is thrown', () => {
    it('puts a failure action', () => {
      const sagaRunner = createSagaRunner({ initialState: defaultState })
      const error = new Error('Oups....')
      const request = () => {
        throw error
      }

      sagaRunner.run(saga, { request })
      sagaRunner.dispatch(getInvoices())

      expect(sagaRunner.didPut(getInvoicesFailure(error))).toBeTruthy()
    })
  })
})
