import React, { PropTypes } from 'react'
import { container, inner } from './styles'
import { Navigation } from 'components'

export default function MainContainer (props) {
  return (
    <div className={container}>
      <Navigation isAuthed={false} />
      <div className={inner}>
        {props.children}
      </div>
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
