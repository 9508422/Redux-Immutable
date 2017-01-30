import React, { PropTypes } from 'react'
import { CenteredContainer, ErrorMessage, LargeHeader } from 'atoms'
import { FacebookAuthButton } from 'components'

export default function Authenticate ({ error, isFetching, onAuth }) {
  return (
    <CenteredContainer>
      <LargeHeader>{'Authenticate'}</LargeHeader>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </CenteredContainer>
  )
}

Authenticate.defaultProps = {
  error: '',
}

Authenticate.propTypes = {
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}
