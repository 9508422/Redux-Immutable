import React, { PropTypes } from 'react'
import { btn } from './styles'

export default function DarkBtn ({ children, className, disabled, onClick }) {
  const classNames = `${btn} ${className}`
  return (
    <button className={classNames} disabled={disabled} onClick={event => onClick(event)}>
      {children}
    </button>
  )
}

DarkBtn.defaultProps = {
  className: '',
  disabled: false,
}

DarkBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

DarkBtn.styles = { btn }
