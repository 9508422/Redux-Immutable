import React, { PropTypes } from 'react'
import { container } from './styles'

export default function CenteredContainer (props) {
  return (
    <div className={container}>
      {props.children}
    </div>
  )
}

CenteredContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
