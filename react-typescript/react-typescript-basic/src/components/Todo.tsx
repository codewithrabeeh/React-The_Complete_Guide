import React from 'react'

import Todos from '../models/todos'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

const Todo: React.FC<{ items: Todos[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => <TodoItem key={item.id} text={item.text} />)}
        </ul>
    )
}

export default Todo