import React from 'react';

import UseStatePrimitive from '../components/UseState/Primitive';
import UseStateObject from '../components/UseState/Object';
import UseStateProps from '../components/UseState/Props';

const UseStatePage = () => {
  return (
    <div>
      <UseStatePrimitive />
      <UseStateObject />
      <UseStateProps initialValue={0} />
    </div>
  )
}

export default UseStatePage
