import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import * as reducers from 'redux/modules'
import getRoutes from 'config/routes'
import { checkIfAuthed } from 'helpers/auth'
import 'sanitize.css/sanitize.css'

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

function checkAuth (nextState, replace) {
  if (store.getState().users.isFetching) {
    return
  }

  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed) {
      replace('/feed')
    }
  } else if (!isAuthed) {
    replace('/auth')
  }
}

ReactDOM.render(
  <Provider store={store}>{getRoutes(checkAuth)}</Provider>,
  document.getElementById('app')
)
