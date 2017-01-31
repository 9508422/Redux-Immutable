import React, { PropTypes } from 'react'
import { container, content } from './styles'

export default function BaseTextArea ({ onChange, maxLength, placeholder, type, value }) {
  return (
    <div className={container}>
      <textarea
        className={content}
        onChange={event => onChange(event.target.value)}
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  )
}

BaseTextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
