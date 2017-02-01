import React, { PropTypes } from 'react'
import { ErrorMessage, SubHeader } from 'atoms'
import { DuckContainer } from 'containers'

export default function User (props) {
  return props.noUser
    ? <SubHeader>{'This user does not exist'}</SubHeader>
    : <div>
      {props.isFetching
        ? <SubHeader>{'Loading...'}</SubHeader>
        : <div>
          <SubHeader>{props.name}</SubHeader>
          {props.duckIds.map(id => <DuckContainer duckId={id} key={id} />)}
          {props.duckIds.length === 0
            ? <SubHeader>
              {`It looks like ${props.name.split(' ')[0]} hasn't made any ducks yet.`}
            </SubHeader>
            : null}
        </div>
      }
      {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
    </div>
}

User.propTypes = {
  duckIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  noUser: PropTypes.bool.isRequired,
}
