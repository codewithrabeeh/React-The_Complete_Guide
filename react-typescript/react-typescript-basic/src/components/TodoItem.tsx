import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem:React.FC<{text: string; onRemoveTodo: () => void}> = (props) => { // allow us to merge in our own props definition
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default TodoItem