import React, { PropTypes } from 'react'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'
import { formatTimestamp } from 'helpers/utils'
import {
  actionContainer,
  author,
  avatar,
  contentContainer,
  duckContainer,
  header,
  icon,
  likedIcon,
  likeReplyContainer,
  text,
} from './styles'

export default function Duck (props) {
  const starIcon = props.isLiked ? likedIcon : icon
  const starFn = props.isLiked ? props.handleDeleteLike : props.addAndHandleLike
  return (
    <div
      className={duckContainer}
      onClick={props.onClick}
      role="button"
      style={{ cursor: props.hideReplyBtn === true ? 'default' : 'pointer' }}
      tabIndex="0"
    >
      <img alt="avatar" className={avatar} src={props.duck.avatar} />
      <div className={contentContainer}>
        <div className={header}>
          <a className={author} onClick={props.goToProfile} tabIndex="-1">{props.duck.name}</a>
          <div>{formatTimestamp(props.duck.timestamp)}</div>
        </div>
        <div className={text}>{props.duck.text}</div>
        <div className={likeReplyContainer}>
          {props.hideReplyBtn === true
              ? null
              : <Reply className={icon} />}
          <div className={actionContainer}>
            <Star className={starIcon} onClick={event => starFn(props.duck.duckId, event)} />
            {props.hideLikeCount === true ? null : <div>{props.numberOfLikes}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

Duck.defaultProps = {
  onClick: undefined,
  numberOfLikes: 0,
}

Duck.propTypes = {
  addAndHandleLike: PropTypes.func.isRequired,
  duck: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    duckId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
  }).isRequired,
  goToProfile: PropTypes.func.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  hideReplyBtn: PropTypes.bool.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  numberOfLikes: PropTypes.number,
}
