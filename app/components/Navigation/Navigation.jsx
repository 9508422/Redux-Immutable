import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import { container, nav } from './styles'

function NavLinks ({isAuthed}) {
  return isAuthed
  ? <ul>
      <li><Link to='/'>{'Home'}</Link></li>
    </ul>
  : null
}

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function ActionLinks ({isAuthed}) {
  return isAuthed
  ? <ul>
      <li>{'New Duck'}</li>
      <li><Link to='/logout'>{'Logout'}</Link></li>
    </ul>
  : <ul>
      <li><Link to='/'>{'Home'}</Link></li>
      <li><Link to='/auth'>{'Authenticate'}</Link></li>
    </ul>
}

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default function Navigation ({ isAuthed }) {
  return (
    <div className={container}>
      <nav className={nav}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}
