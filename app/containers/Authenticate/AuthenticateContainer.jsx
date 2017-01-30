import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Authenticate } from 'components'
import { bindActionCreators } from 'redux'
import * as userActionsCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {
  handleAuth () {
    this.props.fetchAndHandleAuthedUser()
  }

  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={() => this.handleAuth()}
      />
    )
  }
}

AuthenticateContainer.propTypes = {
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionsCreators, dispatch)
}

function mapStateToProps (state) {
  return {
    error: state.error,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
