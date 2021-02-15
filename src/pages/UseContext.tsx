import React from 'react';

import LanguageContext, { defaultLanguageValue } from '../contexts/LanguageContext';
import UseContextLangOne from '../components/UseContext/LangOne';
import UseContextLangTwo from '../components/UseContext/LangTwo';

const UseContextPage = () => {
  return (
    <div>
      <LanguageContext.Provider value={defaultLanguageValue}>
        <UseContextLangOne />
        <UseContextLangTwo />
      </LanguageContext.Provider>
    </div>
  )
}

export default UseContextPage
