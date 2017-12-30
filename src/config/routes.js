import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import { ArticlesType, ArticlesList, Article } from '../containers'
import { HOME, ARTICLES_LIST, ARTICLE } from '../constants/routes'

export default () => (
  <div>
    <Route path={HOME} component={App}>
      <IndexRoute component={ArticlesType} />
    </Route>
    <Route path={ARTICLES_LIST} component={ArticlesList} />
    <Route path={ARTICLE} component={Article} />
  </div>
)
