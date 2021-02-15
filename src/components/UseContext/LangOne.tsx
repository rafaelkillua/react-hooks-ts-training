import React, { useContext } from 'react'

import LanguageContext from '../../contexts/LanguageContext'
import ExampleContainer from '../Shared/ExampleContainer'

const UseContextLangOne = () => {
  const lang = useContext(LanguageContext)

  return (
    <ExampleContainer>
      <p>
        <strong>Simple language context</strong>
      </p>
      <p>
        Current language: {lang.lang}
      </p>
    </ExampleContainer>
  )
}

export default UseContextLangOne
