import React, { PropTypes } from 'react'
import { errorMessage } from './styles'

export default function ErrorMessage ({ children }) {
  return (
    <p className={errorMessage}>
      {children}
    </p>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}
