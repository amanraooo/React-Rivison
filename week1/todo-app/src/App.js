import { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([]);

  // add todo
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    }

    setTodos([...todos, newTodo]);
    setTask("");
  }

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  //Toggle Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ?
          { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <div>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id)}
              />

              <span >{todo.text}</span>

              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default App;
