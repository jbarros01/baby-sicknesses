import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import BillingDetails from '../containers/BillingDetails'
import { HOME } from '../constants/routes'

export default () => (
  <div>
    <Route path={HOME} component={App}>
      <Route component={BillingDetails} />
    </Route>
  </div>
)
