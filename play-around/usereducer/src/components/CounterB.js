import React, {useReducer} from 'react'

const initialState = {
    counterOne: 0,
    counterTwo: 5 
}

const reducer = (state, action) => {
    if(action.type === 'plusbyone'){
        return {...state, counterOne: state.counterOne + action.value}
    }
    if(action.type === 'minusbyone'){
        return {...state, counterOne: state.counterOne - action.value}
    }
    if(action.type === 'plusbyfive'){
        return {...state, counterTwo: state.counterTwo + action.value}
    }
    if(action.type === 'minusbyfive'){
        return {...state, counterTwo: state.counterTwo - action.value}
    }
    if(action.type === 'resetbycounterone'){
        return {...state, counterOne: initialState.counterOne}
    }
    if(action.type === 'resetbycountertwo'){
        return {...state, counterTwo: initialState.counterTwo}
    }
}

function CounterB() {

    const [count, dispatch] = useReducer(reducer, initialState)  

  return (
    <div>
        <h2>{count.counterOne}</h2>
        <h2>{count.counterTwo}</h2>
        <button onClick={()=> dispatch({type: 'plusbyone', value: 1})}>Plus by One</button>
        <button onClick={()=> dispatch({type: 'minusbyone', value: 1})}>Minus by One</button>

        <button onClick={()=> dispatch({type: 'plusbyfive', value: 1})}>Plus by Five</button>
        <button onClick={()=> dispatch({type: 'minusbyfive', value: 1})}>Minus by Five</button>

        <button onClick={()=> dispatch({type: 'resetbycounterone'})}>Reset Counter One</button>
        <button onClick={()=> dispatch({type: 'resetbycountertwo'})}>Reset Counter Two</button>
    </div>
  )
}

export default CounterB