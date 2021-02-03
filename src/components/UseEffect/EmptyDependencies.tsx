import React, { useEffect, useState } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseEffectEmptyDependencies = () => {
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const onResize = () => {
      const width =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      const height =
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

      setSizes({ width, height })
    }

    onResize()
    window.addEventListener('resize', onResize)
    
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <ExampleContainer>
      <p>
        <strong>Empty dependencies (componentDidMount)</strong>
      </p>
      <p>
        Window size watcher
      </p>
      <div>
        <p>
          Width: {sizes.width}
        </p>
        <p>
          Height: {sizes.height}
        </p>
      </div>
    </ExampleContainer>
  )
}

export default UseEffectEmptyDependencies
