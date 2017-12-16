import { all } from 'redux-saga/effects'
import * as sagas from '../sagas'

function* rootSaga() {
  yield all([...Object.values(sagas).map(saga => saga())])
}

export default sagaMiddleware => sagaMiddleware.run(rootSaga)
