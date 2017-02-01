import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as duckActionCreators from 'redux/modules/ducks'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreatores from 'redux/modules/replies'
import { DuckDetails } from 'components'

class DuckDetailsContainer extends Component {
  componentDidMount () {
    this.props.initLikeFetch(this.props.duckId)
    if (this.props.duckAlreadyFetched) {
      this.props.removeFetching()
    } else {
      this.props.fetchAndHandleDuck(this.props.duckId)
    }
  }

  render () {
    const { addAndHandleReply, authedUser, duckId, error, isFetching } = this.props
    return (
      <DuckDetails
        addAndHandleReply={addAndHandleReply}
        authedUser={authedUser}
        duckId={duckId}
        error={error}
        isFetching={isFetching}
      />
    )
  }
}

DuckDetailsContainer.propTypes = {
  addAndHandleReply: PropTypes.func.isRequired,
  authedUser: PropTypes.shape().isRequired,
  duckAlreadyFetched: PropTypes.bool.isRequired,
  duckId: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleDuck: PropTypes.func.isRequired,
  initLikeFetch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  removeFetching: PropTypes.func.isRequired,
}

function mapDispatchToProps (dispatch) {
  const creator = { ...duckActionCreators, ...likeCountActionCreators, ...repliesActionCreatores }
  return bindActionCreators(creator, dispatch)
}

function mapStateToProps ({ ducks, likeCount, users }, props) {
  return {
    authedUser: users[users.authedId].info,
    duckAlreadyFetched: !!ducks[props.routeParams.duckId],
    duckId: props.routeParams.duckId,
    error: ducks.error,
    isFetching: ducks.isFetching || likeCount.isFetching,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckDetailsContainer)
