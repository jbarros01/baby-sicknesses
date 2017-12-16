import saga from '../init'
import { createSagaRunner } from '../../helpers/specs/saga.runner'
import { init, getInvoices } from '../../actions'

describe('*init', () => {
  let runner

  beforeEach(() => {
    runner = createSagaRunner()
    runner.run(saga)
    runner.dispatch(init())
  })

  it('puts an action to get the invoices', () => {
    expect(runner.didPut(getInvoices())).toBeTruthy()
  })
})
