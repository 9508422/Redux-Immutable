import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { ModalContainer } from 'containers'
import { container, navContainer } from './styles'

function NavLinks ({ isAuthed }) {
  return isAuthed
  ? <ul>
    <li><Link to="/">{'Home'}</Link></li>
  </ul>
  : null
}

function ActionLinks ({ isAuthed }) {
  return isAuthed
  ? <ul>
    <li><ModalContainer /></li>
    <li><Link to="/logout">{'Logout'}</Link></li>
  </ul>
  : <ul>
    <li><Link to="/">{'Home'}</Link></li>
    <li><Link to="/auth">{'Authenticate'}</Link></li>
  </ul>
}

export default function Navigation ({ isAuthed }) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}

ActionLinks.propTypes = Navigation.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}
