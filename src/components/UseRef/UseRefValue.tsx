import React, { useRef, useState } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseRefValue = () => {
  const counter = useRef(0)
  const [, setRender] = useState(0)

  const increment = () => {
    counter.current = counter.current + 1
  }

  const decrement = () => {
    counter.current = counter.current - 1
  }

  const triggerRender = () => setRender(prevRender => prevRender + 1)

  return (
    <ExampleContainer>
      <p>
        <strong>Value Ref</strong>
      </p>
      <p>
        Counter: {counter.current}
      </p>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={triggerRender}>Trigger render</button>
        <button onClick={increment}>+</button>
      </div>
    </ExampleContainer>
  )
}

export default UseRefValue
