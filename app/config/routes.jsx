import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import {
  AuthenticateContainer,
  FeedContainer,
  HomeContainer,
  LogoutContainer,
  MainContainer,
} from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <Route path="auth" component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path="feed" component={FeedContainer} onEnter={checkAuth} />
        <Route path="logout" component={LogoutContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Route>
    </Router>
  )
}
