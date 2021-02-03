import React from 'react';

import UseEffectNoDependencies from '../components/UseEffect/NoDependencies';
import UseEffectEmptyDependencies from '../components/UseEffect/EmptyDependencies';
import UseEffectWithDependencies from '../components/UseEffect/WithDependencies';

const UseEffectPage = () => {
  return (
    <div>
      <UseEffectNoDependencies />
      <UseEffectEmptyDependencies />
      <UseEffectWithDependencies />
    </div>
  )
}

export default UseEffectPage
