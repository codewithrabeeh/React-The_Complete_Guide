import React, { useState } from "react"
import Todos from "../models/todos"

type TodoContextObj = {
    items: Todos[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
} 

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todos[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todos(todoText)
        setTodos((prevTodos) => prevTodos.concat(newTodo))
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
    }

    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;