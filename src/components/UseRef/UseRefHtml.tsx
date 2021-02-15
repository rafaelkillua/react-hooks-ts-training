import React, { useRef } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseRefHtml = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <ExampleContainer>
      <p>
        <strong>Html Input Ref</strong>
      </p>
      <div>
        <button onClick={focus}>Focus input</button>
        <input ref={inputRef} />
      </div>
    </ExampleContainer>
  )
}

export default UseRefHtml
