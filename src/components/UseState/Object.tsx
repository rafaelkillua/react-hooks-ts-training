import React, { ChangeEvent, useState } from 'react'

import ExampleContainer from '../Shared/ExampleContainer'

const UseStateObject = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: ''
  })

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [evt.target.name]: evt.target.value
    }))
  }

  return (
    <ExampleContainer>
      <p>
        Form: {JSON.stringify(form)}
      </p>
      <div>
        <label htmlFor="name">First name:</label>
        <input
          id="name"
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={onChange}
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={onChange}
        />
      </div>
    </ExampleContainer>
  )
}

export default UseStateObject
