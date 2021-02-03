import React from 'react'

import Routes from '../../routes'
import { StyledContent, StyledMain } from './styles'

const Content = () => {
  return (
    <StyledMain>
      <StyledContent>
        <Routes />
      </StyledContent>
    </StyledMain>
  )
}

export default Content
