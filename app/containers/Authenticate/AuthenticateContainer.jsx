import React, { Component } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

export default class AuthenticateContainer extends Component {
  static handleAuth () {
    auth().then((user) => {
      console.log(user)
    })
  }

  render () {
    return (
      <Authenticate isFetching={false} error="" onAuth={AuthenticateContainer.handleAuth} />
    )
  }
}
