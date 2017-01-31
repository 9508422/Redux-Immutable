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
    const { error, newDucksAvailable, isFetching, resetNewDucksAvailable } = this.props

    return (
      <Feed
        error={error}
        isFetching={isFetching}
        newDucksAvailable={newDucksAvailable}
        resetNewDucksAvailable={resetNewDucksAvailable}
      />
    )
  }
}

FeedContainer.propTypes = {
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
  const { error, isFetching, newDucksAvailable } = feed
  return { error, isFetching, newDucksAvailable }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)
