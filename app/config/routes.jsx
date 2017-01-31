import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import {
  AuthenticateContainer,
  FeedContainer,
  HomeContainer,
  LogoutContainer,
  MainContainer,
  UserContainer,
} from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <Route path="auth" component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path="feed" component={FeedContainer} onEnter={checkAuth} />
        <Route path="logout" component={LogoutContainer} />
        <Route path=":uid" component={UserContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Route>
    </Router>
  )
}
