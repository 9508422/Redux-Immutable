import React, { PropTypes } from 'react'

export default function Duck (props) {
  console.log(props)
  return (
    <div>{`Duck Id: ${props.duckId}`}</div>
  )
}

Duck.propTypes = {
  duckId: PropTypes.string.isRequired,
}
