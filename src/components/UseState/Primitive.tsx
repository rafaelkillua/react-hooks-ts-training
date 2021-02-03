import React, { useState } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseStatePrimitive = () => {
  const [clicks, setClicks] = useState(0)

  return (
    <ExampleContainer>
      <p>
        Clicks counter: {clicks}
      </p>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          Click!
        </button>
        <button onClick={() => setClicks(prevClicks => prevClicks + 1)}>
          Click better!
        </button>
        <button onClick={() => setClicks(0)}>
          Reset!
        </button>
      </div>
    </ExampleContainer>
  )
}

export default UseStatePrimitive
