import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import { AuthenticateContainer, HomeContainer, MainContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <Route path="auth" component={AuthenticateContainer} />
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

export default routes
