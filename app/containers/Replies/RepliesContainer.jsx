import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as repliesActionCreators from 'redux/modules/replies'
import { Replies } from 'components'
import { staleReplies } from 'helpers/utils'

class RepliesContainer extends Component {
  componentDidMount () {
    if (staleReplies(this.props.lastUpdated)) {
      this.props.fetchAndHandleReplies(this.props.duckId)
    }
  }

  render () {
    const { error, isFetching, lastUpdated, replies } = this.props
    return (
      <Replies error={error} isFetching={isFetching} lastUpdated={lastUpdated} replies={replies} />
    )
  }
}

RepliesContainer.defaultProps = {
  lastUpdated: 0,
  replies: {},
}

RepliesContainer.propTypes = {
  duckId: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleReplies: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  replies: PropTypes.shape(),
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(repliesActionCreators, dispatch)
}

function mapStateToProps (state, { duckId }) {
  const duckRepliesInfo = state.replies[duckId] || {}
  const { lastUpdated, replies } = duckRepliesInfo
  return {
    error: state.replies.error,
    isFetching: state.replies.isFetching,
    lastUpdated,
    replies,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepliesContainer)
