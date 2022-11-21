import React from 'react'

const TodoItem:React.FC<{text: string}> = (props) => { // allow us to merge in our own props definition
  return (
    <li>{props.text}</li>
  )
}

export default TodoItem