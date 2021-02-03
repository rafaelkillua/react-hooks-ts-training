import React from 'react'
import Content from '../components/Content/Content'

import Header from '../components/Header/Header'
import Routes from '../routes'

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Content>
          <Routes />
        </Content>
      </main>
    </div>
  )
}

export default Layout
