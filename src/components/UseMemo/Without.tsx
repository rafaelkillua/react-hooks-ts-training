import React, { ChangeEvent, useState } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseMemoWith = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: ''
  })
  const [counter, setCounter] = useState(0)

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [evt.target.name]: evt.target.value
    }))
  }

  const getFullName = () => {
    console.log('+1 without memo')
    return `${form.firstName} ${form.lastName}`
  }

  return (
    <ExampleContainer>
      <p>
        <strong>Without memo</strong>
      </p>
      <p>
        Full name: {getFullName()}
      </p>
      <div>
        <label htmlFor="firstName-without">First name:</label>
        <input
          id="firstName-without"
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={onChange}
        />

        <label htmlFor="lastName-without">Last name:</label>
        <input
          id="lastName-without"
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={onChange}
        />
      </div>
      <br />
      <p>
        Counter: {counter}
      </p>
      <div>
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>
          +1
        </button>
      </div>
    </ExampleContainer>
  )
}

export default UseMemoWith
