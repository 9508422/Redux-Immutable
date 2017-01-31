import React, { PropTypes } from 'react'
import { ErrorMessage } from 'atoms'
import { DuckContainer } from 'containers'
import { header } from './styles'

function NewDucksAvailable ({ onClick }) {
  return (
    <a onClick={onClick} tabIndex="-1">
      {'New Ducks Available'}
    </a>
  )
}

NewDucksAvailable.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default function Feed (props) {
  const { duckIds, error, isFetching, newDucksAvailable, resetNewDucksAvailable } = props
  return isFetching
    ? <h1 className={header}>{'Fetching'}</h1>
    : <div>
      {newDucksAvailable ? <NewDucksAvailable onClick={resetNewDucksAvailable} /> : null}
      {duckIds.length === 0
        ? <p className={header}>
          {'This is unforetunate.'} <br /> {'It appears there are not ducks yet :('}
        </p>
        : null}
      {duckIds.map(id => <DuckContainer duckId={id} key={id} />)}
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </div>
}

Feed.propTypes = {
  duckIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
}
