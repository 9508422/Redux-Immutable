import React, { PropTypes } from 'react'
import { button } from './styles'

export default function FacebookAuthButton ({ isFetching, onAuth }) {
  return (
    <button className={button} onClick={onAuth}>
      {isFetching
        ? 'Loading...'
        : 'Login with Facebook'}
    </button>
  )
}

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}
