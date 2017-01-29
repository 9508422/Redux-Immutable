import React, { PropTypes } from 'react'
import { Navigation } from 'components'
import { container, inner } from './styles'

export default function MainContainer (props) {
  return (
    <div className={container}>
      <Navigation isAuthed />
      <div className={inner}>
        {props.children}
      </div>
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
