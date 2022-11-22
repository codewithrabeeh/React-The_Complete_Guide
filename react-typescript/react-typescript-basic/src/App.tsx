import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';
import Todos from './models/todos'

function App() {

  const [todos, setTodos] = useState<Todos[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todos(todoText)
    setTodos((prevTodos) => prevTodos.concat(newTodo))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todo items={todos} />

    </div>
  );
}

export default App;
