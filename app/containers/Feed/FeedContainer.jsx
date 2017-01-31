import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as feedActionCreators from 'redux/modules/feed'
import { Feed } from 'components'

class FeedContainer extends Component {
  componentDidMount () {
    this.props.setAndHandleFeedListener()
  }

  render () {
    const { duckIds, error, newDucksAvailable, isFetching, resetNewDucksAvailable } = this.props

    return (
      <Feed
        duckIds={duckIds}
        error={error}
        isFetching={isFetching}
        newDucksAvailable={newDucksAvailable}
        resetNewDucksAvailable={resetNewDucksAvailable}
      />
    )
  }
}

FeedContainer.propTypes = {
  duckIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
  setAndHandleFeedListener: PropTypes.func.isRequired,
}

function mapDispatchToProps (disptch) {
  return bindActionCreators(feedActionCreators, disptch)
}

function mapStateToProps ({ feed }) {
  const { duckIds, error, isFetching, newDucksAvailable } = feed
  return { duckIds, error, isFetching, newDucksAvailable }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)
