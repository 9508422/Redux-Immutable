import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'
import { Navigation } from 'components'
import { firebaseAuth } from 'config/constants'
import { formatUserInfo } from 'helpers/utils'
import { container, inner } from './styles'

class MainContainer extends Component {
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if (this.props.location.pathname === '/') {
          this.props.router.replace('feed')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  render () {
    return this.props.isFetching
      ? null
      : <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={inner}>
          {this.props.children}
        </div>
      </div>
  }
}

MainContainer.propTypes = {
  authUser: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  removeFetchingUser: PropTypes.func.isRequired,
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(
  ({ users }) => ({ isAuthed: users.isAuthed, isFetching: users.isFetching }),
  dispatch => bindActionCreators(userActionCreators, dispatch)
)(MainContainer)
