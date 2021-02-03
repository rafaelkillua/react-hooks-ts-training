import React, { FC, PropsWithChildren }  from 'react'

import StyledContent from './styles'

const Content: FC = (props: PropsWithChildren<any>) => {
  const { children } = props

  return (
    <StyledContent>
      {children}
    </StyledContent>
  )
}

export default Content
