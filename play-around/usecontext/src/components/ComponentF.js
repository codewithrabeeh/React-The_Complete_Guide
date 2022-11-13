import React, {useContext} from 'react'
import {CountContext} from '../store/CounterProvider'

function ComponentF() {
    const countContext = useContext(CountContext)
  return (
    <div>
      <h2>Component F - {countContext.countState.c}</h2>
      <button onClick={() => countContext.countDispatch('incrementC')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrementC')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF 