import { put, takeLatest } from 'redux-saga/effects'
import { 
  getArticlesSuccess, 
  getArticlesError
} from '../../actions'
import { GET_ARTICLES, GET_ARTICLE_SEARCH } from '../../constants/action.types'

const data = require('../data/index.json')

function readArticlesFile(typeId) {
  const sicks = data.baby_sicknesses.find(articleType => articleType._id === typeId).articles
  return sicks.sort((sick, nextSick) => sick.name.localeCompare(nextSick.name))
}

function searchArticles(valueToSearch) {
  const search = valueToSearch.toLowerCase()

  const articlesByType = data.baby_sicknesses.map(articleType => {
    return articleType.articles
  })
  const articles = articlesByType.reduce(function(prev, curr) {
    return prev.concat(curr);
  })

  const articlesFound = []
  // eslint-disable-next-line
  articles.map(article => {
    const name = article.name.toLowerCase()
    if(name.includes(search)){
      articlesFound.push(article)
    }
  })
  
  return articlesFound.sort((sick, nextSick) => sick.name.localeCompare(nextSick.name))
}

export function* getArticles(action) {
  try {
    const articlesList = readArticlesFile(action.payload.typeId)

    yield put(getArticlesSuccess({ articlesList }))
  } catch (err) {
    yield put(getArticlesError(err))
  }
}

export function* getArticleSearch(action) {
  try {
    const articlesList = searchArticles(action.payload.article)

    yield put(getArticlesSuccess({ articlesList }))
  } catch (err) {
    yield put(getArticlesError(err))
  }
}

export default function*() {
    yield takeLatest(GET_ARTICLES, getArticles)
    yield takeLatest(GET_ARTICLE_SEARCH, getArticleSearch)
}
