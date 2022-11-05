import React, {useReducer} from 'react'

// The values in 'initialState' will initialize to 'state' in reducer function parameter
// You can pass multiple object values in 'initialState'. See CounterA  
const initialState = 0

const reducer = (state, action) => {
    if(action === 'plus'){
        return state + 1
    }
    if(action === 'minus'){
        return state - 1
    }
    if(action === 'reset'){
        return initialState
    }
}

function Counter() {
    // 'State' is the value here
    // 'Action' is the trigger to change the state

    //'count' is the value that we can use in jsx
    //'dispatch' is the method that we use to change the value of action. 
    const [count, dispatch] = useReducer(reducer, initialState)  

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=> dispatch('plus')}>Plus</button>
        <button onClick={()=> dispatch('minus')}>Minus</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counter