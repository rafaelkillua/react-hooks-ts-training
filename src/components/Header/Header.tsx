import React from 'react'
import { routes } from '../../routes'

import HeaderLink from './HeaderLink/HeaderLink'
import StyledHeader from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          {
            routes.map(route => (
              <HeaderLink
                key={route.label}
                to={route.path}
                exact={route.exact}
              >
                {route.label}
              </HeaderLink>
            ))
          }
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
