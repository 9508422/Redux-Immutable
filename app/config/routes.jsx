import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import { HomeContainer, MainContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

export default routes
