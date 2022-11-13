import React, {useContext} from 'react'
import {CountContext} from '../store/CounterProvider' 

function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>
      <h2>Component A - {countContext.countState.a}</h2>
      <button onClick={() => countContext.countDispatch('incrementA')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrementA')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA