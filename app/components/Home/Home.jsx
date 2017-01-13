import React from 'react'
import { CenteredContainer, LargeHeader, SubHeader } from 'atoms'

export default function Home (props) {
  return (
    <CenteredContainer>
      <LargeHeader>{'Duck'}</LargeHeader>
      <SubHeader>
        {'The real time, cloud based, modular, scalable, growth hack, social platform. In the \
          cloud.'}
      </SubHeader>
    </CenteredContainer>
  )
}
