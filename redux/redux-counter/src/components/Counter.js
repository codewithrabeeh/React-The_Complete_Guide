import classes from './Counter.module.css';

import {counterActions} from '../store/counter'

import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)) // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
        <button onClick={decrementHandler}>decrement</button>  
      </div> 
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter