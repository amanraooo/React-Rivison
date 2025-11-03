import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
      isEditing: false
    }

    setTodos([...todos, newTodo]);
    setTask("");
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ?
          { ...t, completed: !t.completed } : t
      )
    )
  }

  const editTodo =(id)=>{
    setTodos(
      todos.map(t=>
        t.id === id ? {...t, isEditing: true} : t
      )
    )
  }

  const saveTodo =(id, newText)=>{
    setTodos(
      todos.map(t=>
        t.id === id ? {...t, text: newText, isEditing:false}:t
      )
    )
  }

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("todos")) || []
    setTodos(saved)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



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
                onChange={() => toggleTodo(todo.id)}
              />

              {
                todo.isEditing
                  ? (
                    <input
                      value={todo.text}
                      onChange={(e)=> saveTodo(todo.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveTodo(todo.id, e.target.value)
                      }}
                    />
                  )
                  : (
                    <span>{todo.text}</span>
                  )
              }

              <button onClick={() => deleteTodo(todo.id)}>Delete</button>

              {
                !todo.isEditing &&
                <button onClick={() => editTodo(todo.id)}>Edit</button>
              }

            </div>
          ))
        }
      </div>

    </div>
  );
}

export default App;
