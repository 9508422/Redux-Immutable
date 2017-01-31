import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionsCreators from 'redux/modules/users'
import { Authenticate } from 'components'

class AuthenticateContainer extends Component {
  handleAuth (event) {
    event.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.props.router.replace('feed'))
  }

  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={event => this.handleAuth(event)}
      />
    )
  }
}

AuthenticateContainer.propTypes = {
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionsCreators, dispatch)
}

function mapStateToProps ({ users }) {
  return {
    error: users.error,
    isFetching: users.isFetching,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
