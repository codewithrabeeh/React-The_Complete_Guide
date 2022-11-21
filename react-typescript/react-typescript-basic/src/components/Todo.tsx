import React from 'react'

import Todos from '../models/todos'
import TodoItem from './TodoItem'

const Todo: React.FC<{ items: Todos[] }> = (props) => {
    return (
        <ul>
            {props.items.map(item => <TodoItem key={item.id} text={item.text} />)}
        </ul>
    )
}

export default Todo