import React, {useReducer} from 'react'

const initialState = {
    Counter: 0, 
}

// 'action' can have multiple values. i.e. 'action.type' and 'action.value'
// If you want additional values you can utilize 'action.value'
// If you call 'action.value' in a if condition then you must mention it inside 'dispatch'. See line 28,29,30
const reducer = (state, action) => {
    if(action.type === 'plus'){
        return {Counter: state.Counter + action.value}
    }
    if(action.type === 'minus'){
        return {Counter: state.Counter - action.value}
    }
    if(action.type === 'reset'){
        return {Counter: initialState.Counter}
    }
}

function CounterA() {

    const [count, dispatch] = useReducer(reducer, initialState)  

  return (
    <div>
        <h2>{count.Counter}</h2>
        <button onClick={()=> dispatch({type: 'plus', value: 1})}>Plus</button>
        <button onClick={()=> dispatch({type: 'minus', value: 1})}>Minus</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterA