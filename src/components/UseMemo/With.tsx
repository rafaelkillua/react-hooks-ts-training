import React, { ChangeEvent, useMemo, useState } from 'react'

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

  const fullName = useMemo(() => {
    console.log('+1 with memo')
    return `${form.firstName} ${form.lastName}`
  }, [form.firstName, form.lastName])

  return (
    <ExampleContainer>
      <p>
        <strong>With memo</strong>
      </p>
      <p>
        Full name: {fullName}
      </p>
      <div>
        <label htmlFor="firstName-with">First name:</label>
        <input
          id="firstName-with"
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={onChange}
        />

        <label htmlFor="lastName-with">Last name:</label>
        <input
          id="lastName-with"
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
