import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as usersLikesActions from 'redux/modules/usersLikes'
import { Duck } from 'components'

class DuckContainer extends Component {
  goToProfile (event) {
    event.stopPropagation()
    this.context.router.push(`${this.props.duck.uid}`)
  }

  handleClick (event) {
    event.stopPropagation()
    this.context.router.push(`duckDetail/${this.props.duck.duckId}`)
  }

  render () {
    const {
      addAndHandleLike,
      duck,
      duckId,
      handleDeleteLike,
      hideLikeCount,
      hideReplyBtn,
      isLiked,
      numberOfLikes,
    } = this.props

    const onClick = hideReplyBtn ? null : event => this.handleClick(event)
    return (
      <Duck
        addAndHandleLike={addAndHandleLike}
        duck={duck}
        duckId={duckId}
        goToProfile={event => this.goToProfile(event)}
        handleDeleteLike={handleDeleteLike}
        hideLikeCount={hideLikeCount}
        hideReplyBtn={hideReplyBtn}
        isLiked={isLiked}
        numberOfLikes={numberOfLikes}
        onClick={onClick}
      />
    )
  }
}

DuckContainer.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

DuckContainer.defaultProps = {
  numberOfLikes: 0,
  hideLikeCount: true,
  hideReplyBtn: false,
}

DuckContainer.propTypes = {
  addAndHandleLike: PropTypes.func.isRequired,
  duck: PropTypes.shape().isRequired,
  duckId: PropTypes.string.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  hideLikeCount: PropTypes.bool,
  hideReplyBtn: PropTypes.bool,
  isLiked: PropTypes.bool.isRequired,
  numberOfLikes: PropTypes.number,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActions, dispatch)
}

function mapStateToProps ({ ducks, likeCount, usersLikes }, props) {
  const { duckId, hideLikeCount, hideReplyBtn } = props
  return {
    duck: ducks[duckId],
    hideLikeCount,
    hideReplyBtn,
    isLiked: usersLikes[duckId] === true,
    numberOfLikes: likeCount[duckId],
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer)
