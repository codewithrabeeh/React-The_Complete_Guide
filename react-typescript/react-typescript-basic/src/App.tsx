
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';
import TodosContextProvider from './store/todos-context';

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todo />

    </TodosContextProvider>
  );
}

export default App;
