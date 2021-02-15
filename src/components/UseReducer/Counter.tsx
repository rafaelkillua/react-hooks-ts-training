import React, { useReducer } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

type StateType = {
  count: number
}

type ActionType = {
  type: 'increment' | 'decrement' | 'reset'
}

const initialState = {
  count: 0
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ExampleContainer>
      <p>
        <strong>Counter via reducer</strong>
      </p>
      <p>
        Counter: {state.count}
      </p>
      <div>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </ExampleContainer>
  )
}

export default UseReducerCounter
