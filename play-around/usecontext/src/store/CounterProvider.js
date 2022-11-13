import React, {useReducer} from 'react'
import { initialState, reducer } from './count-store'

export const CountContext = React.createContext()

function CounterProvider(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            {props.children}
        </CountContext.Provider>
    )
}

export default CounterProvider