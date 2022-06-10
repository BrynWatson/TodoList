import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import axios from 'axios';
import TodoList from "./Componenets/TodoList"
import CreateTodo from "./Componenets/CreateTodo"


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data.splice(0, 10));
    })
  }, []);

  const createTodo = (todo) => {
    // add todo to the todos array
setTodos([...todos,todo]);
    

console.log(todo)
console.log(todos)

  }
  const handleTodo = (todo) => {
    const newTodos = todos.map(obj => {
      // 👇️ if id equals 2, update Completed property
      if (obj.id === todo.id) {
        return {...obj, completed: !todo.completed};
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setTodos(newTodos);
  ///update todo completed state

}

const handleDeleteTodo = (todo) => {
const newTodos = todos.filter((obj) => obj.id !== todo.id)
  setTodos(newTodos);
///update todo completed state

}
  return(<div> 
    <CreateTodo createTodo={createTodo} />
    <TodoList deleteTodo={handleDeleteTodo} handleTodo={handleTodo} todos={todos} />
    
    </div>);
}

export default App;
