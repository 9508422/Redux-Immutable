import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/usersDucks'
import { User } from 'components'
import { staleDucks, staleUser } from 'helpers/utils'

class UserContainer extends Component {
  componentDidMount () {
    const uid = this.props.routeParams.uid
    if (this.props.noUser || staleDucks(this.props.lastUpdatedDucks)) {
      this.props.fetchAndHandleUsersDucks(uid)
    }

    if (this.props.noUser || staleUser(this.props.lastUpdatedUser)) {
      this.props.fetchAndHandleUser(uid)
    }
  }

  render () {
    return (
      <User
        duckIds={this.props.duckIds}
        error={this.props.error}
        fetchAndHandleUser={this.props.fetchAndHandleUser}
        fetchAndHandleUsersDucks={this.props.fetchAndHandleUsersDucks}
        isFetching={this.props.isFetching}
        name={this.props.name}
        noUser={this.props.noUser}
      />
    )
  }
}

UserContainer.propTypes = {
  duckIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleUser: PropTypes.func.isRequired,
  fetchAndHandleUsersDucks: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdatedDucks: PropTypes.number.isRequired,
  lastUpdatedUser: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  noUser: PropTypes.bool.isRequired,
  routeParams: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...usersActionCreators, ...usersDucksActionCreators }, dispatch)
}

function mapStateToProps ({ users, usersDucks }, props) {
  const thisUsersDucks = usersDucks[props.routeParams.uid]
  const user = users[props.routeParams.uid]
  const noUser = typeof user === 'undefined'
  return {
    duckIds: thisUsersDucks ? thisUsersDucks.duckIds : [],
    error: users.error || usersDucks.error,
    isFetching: users.isFetching || usersDucks.isFetching,
    lastUpdatedDucks: thisUsersDucks ? thisUsersDucks.lastUpdated : 0,
    lastUpdatedUser: user ? user.lastUpdated : 0,
    name: user ? user.info.name : '',
    noUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
