import React, { useEffect, useState, ChangeEvent } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseEffectWithDependencies = () => {
  const [value, setValue] = useState(50)
  const [text, setText] = useState('Hello world!')

  useEffect(() => {
    switch (value) {
      case 0:
        setText('That\'s bad :(')
        break
      case 100:
        setText('Eyyy congratz!')
        break
      default:
        setText('Keep moving!')
    }
  }, [value])

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => setValue(+evt.target.value)

  return (
    <ExampleContainer>
      <p>
        <strong>With dependencies (componentDidUpdate)</strong>
      </p>
      <p>
        Input range watcher: {text}
      </p>
      <div>
        <input
        type="range"
        value={value}
        onChange={onChange}
        />
      </div>
    </ExampleContainer>
  )
}

export default UseEffectWithDependencies
