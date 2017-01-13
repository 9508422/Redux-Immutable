import React, { PropTypes } from 'react'
import { header } from './styles'

export default function LargeHeader (props) {
  return (
    <p className={header}>
      {props.children}
    </p>
  )
}

LargeHeader.propTypes = {
  children: PropTypes.node.isRequired,
}
