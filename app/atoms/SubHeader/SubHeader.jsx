import React, { PropTypes } from 'react'
import { header } from './styles'

export default function SubHeader (props) {
  return (
    <p className={header}>
      {props.children}
    </p>
  )
}

SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
}
