import React from 'react'
import { hashHistory, IndexRoute, Router } from 'react-router'
import { HomeContainer, MainContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Router path="/" component={MainContainer}>
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
