import React, {useContext} from 'react'
import {CountContext} from '../store/CounterProvider'

function ComponentD() {
    const countContext = useContext(CountContext)
  return (
    <div>
      <h2>Component D - {countContext.countState.b}</h2>
      <button onClick={() => countContext.countDispatch('incrementB')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrementB')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD