import React, { ChangeEvent } from 'react'

import useStatePartial from '../../hooks/useStatePartial'
import ExampleContainer from '../Shared/ExampleContainer'

const CustomHookState = () => {
  const [form, setForm] = useStatePartial({
    firstName: '',
    lastName: ''
  })

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <ExampleContainer>
      <p>
        <strong>Object values (partial state custom hook)</strong>
      </p>
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

export default CustomHookState
