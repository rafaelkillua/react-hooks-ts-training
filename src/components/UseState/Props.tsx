import React, { PropsWithoutRef, useState } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

type InitialValueType = {
  initialValue: number
}

const UseStateProps = (props: PropsWithoutRef<InitialValueType>) => {
  const { initialValue } = props

  const [value, setValue] = useState(initialValue)

  return (
    <ExampleContainer>
      <p>
        <strong>Values from props</strong>
      </p>
      <p>
        Counter: {value}
      </p>
      <div>
        <button onClick={() => setValue(prevValue => prevValue + 1)}>
          +1
        </button>
        <button onClick={() => setValue(prevValue => prevValue + 10)}>
          +10
        </button>
        <button onClick={() => setValue(prevValue => prevValue - 1)}>
          -1
        </button>
        <button onClick={() => setValue(prevValue => prevValue - 10)}>
          -10
        </button>
      </div>
    </ExampleContainer>
  )
}

export default UseStateProps
