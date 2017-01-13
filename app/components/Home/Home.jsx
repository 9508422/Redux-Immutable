import React from 'react'
import { container, slogan, title } from './styles'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Duckr'}</p>
      <p className={slogan}>
        {'The real time, cloud based, modular, scalable, growth hack, social platform. In the \
          cloud.'}
      </p>
    </div>
  )
}
