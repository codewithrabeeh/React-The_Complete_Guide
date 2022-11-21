import Todo from './components/Todo';
import Todos from './models/todos'

function App() {

  const todos = [
    new Todos('learn react'),
    new Todos('hello')
  ]

  return (
    <div>
      <Todo items={todos} />
      
    </div>
  );
}

export default App;
