import React, { PropTypes } from 'react'
import { ErrorMessage, SubHeader } from 'atoms'
import { formatTimestamp } from 'helpers/utils'

function Reply ({ comment }) {
  const { avatar, name, reply, timestamp } = comment
  return (
    <div>
      <img src={avatar} alt={name} />
      <div>
        <div>{name}</div>
        <div>{formatTimestamp(timestamp)}</div>
        <div>{reply}</div>
      </div>
    </div>
  )
}

Reply.propTypes = {
  comment: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reply: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
  }).isRequired,
}

export default function Replies ({ error, isFetching, replies }) {
  const replyIds = Object.keys(replies)
  return (
    <div>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {isFetching
        ? <p>{'Loading...'}</p>
        : <div>
          <SubHeader>{'Replies'}</SubHeader>
          {replyIds.map(replyId => <Reply comment={replies[replyId]} key={replyId} />)}
        </div>}
    </div>
  )
}

Replies.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  replies: PropTypes.shape().isRequired,
}
