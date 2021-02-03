import React, { useEffect, useState } from 'react'
import { getRandomNumber } from '../../helpers/random'

import ExampleContainer from '../Shared/ExampleContainer'

const UseEffectNoDependencies = () => {
  const [shouldRun, setShouldRun] = useState(false)
  const [random, setRandom] = useState(getRandomNumber())

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (shouldRun) {
      setRandom(getRandomNumber())
    }
  })

  return (
    <ExampleContainer>
      <p>
        <strong>No dependencies (runs every render - check console)</strong>
      </p>
      <p>
        Random number generator: {random}
      </p>
      <p>
        Status: {shouldRun ? 'Running' : 'Stopped'}
      </p>
      <div>
        <button onClick={() => setShouldRun(true)}>
          Start!
        </button>
        <button onClick={() => setShouldRun(false)}>
          Stop!
        </button>
      </div>
    </ExampleContainer>
  )
}

export default UseEffectNoDependencies
