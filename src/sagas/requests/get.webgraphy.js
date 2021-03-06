import { put, takeLatest } from 'redux-saga/effects'
import { getWebgraphySuccess, getWebgraphyError } from '../../actions'
import { GET_WEBGRAPHY } from '../../constants/action.types'

function readArticlesFile() {
  const data = require('../data/index.json')
  const articlesByType = data.baby_sicknesses.map(articleType => {
    return articleType.articles
  })

  const sicks = articlesByType.reduce(function(prev, curr) {
    return prev.concat(curr);
  })

  return sicks.sort((sick, nextSick) => sick.name.localeCompare(nextSick.name))
}

export function* getWebgraphy() {
  try {   
    const articles = readArticlesFile()

    yield put(getWebgraphySuccess({ articles }))
  } catch (err) {
    yield put(getWebgraphyError(err))
  }
}

export default function*() {
    yield takeLatest(GET_WEBGRAPHY, getWebgraphy)
}
