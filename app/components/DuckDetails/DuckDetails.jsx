import React, { PropTypes } from 'react'
import { DarkBtn, ErrorMessage, SubHeader } from 'atoms'
import { DuckContainer, RepliesContainer } from 'containers'
import { formatReply } from 'helpers/utils'
import { container, content, mainContainer, replies } from './styles'

function Reply ({ submit }) {
  function handleSubmit (event) {
    const { value } = Reply.ref
    if (value.length === 0) {
      return
    }

    submit(value, event)
    Reply.ref.value = ''
  }

  return (
    <div>
      <textarea
        ref={ref => (Reply.ref = ref)}
        maxLength={140}
        type="text"
        placeholder="Your reponse"
      />
      <DarkBtn onClick={handleSubmit}>{'Submit'}</DarkBtn>
    </div>
  )
}

Reply.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default function DuckDetails ({ addAndHandleReply, authedUser, duckId, error, isFetching }) {
  return (
    <div className={mainContainer}>
      {isFetching
        ? <SubHeader>{'Loading...'}</SubHeader>
        : <div className={container}>
          <div className={content}>
            <DuckContainer duckId={duckId} hideLikeCount={false} hideReplyBtn />
            <Reply
              submit={(replyText) => {
                addAndHandleReply(duckId, formatReply(authedUser, replyText))
              }}
            />
          </div>
          <div className={replies}>
            <RepliesContainer duckId={duckId} />
          </div>
        </div>}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
  )
}

DuckDetails.propTypes = {
  addAndHandleReply: PropTypes.func.isRequired,
  authedUser: PropTypes.shape().isRequired,
  duckId: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
