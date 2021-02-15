import React, { useContext } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'
import LanguageContext from '../../contexts/LanguageContext'

const UseContextLangTwo = () => {
  const lang = useContext(LanguageContext)

  return (
    <ExampleContainer>
      <p>
        <strong>Simple language context (different component)</strong>
      </p>
      <p>
        Idioma atual: {lang.lang}
      </p>
    </ExampleContainer>
  )
}

export default UseContextLangTwo
