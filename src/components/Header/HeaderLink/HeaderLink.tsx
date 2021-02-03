import React, { PropsWithChildren } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import StyledHeaderLink from './styles'

type HeaderLinkProps = PropsWithChildren<any> | NavLinkProps

const HeaderLink = (props: HeaderLinkProps) => {
  const { children, ...rest } = props

  return (
    <StyledHeaderLink>
      <NavLink
        activeClassName="active"
        {...rest}
      >
        {children}
      </NavLink>
    </StyledHeaderLink>
  )
}

export default HeaderLink
