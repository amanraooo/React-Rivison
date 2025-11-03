import { useState } from "react";
import "./App.css";

function App() {

  const[task,setTask]=useState("")
  const  [todos, setTodos]= useState([]);

  const addTodo=()=>{
    if(task.trim()===" ") return;

    setTodos([...todos, task]);
    setTask("");
  }

  return (
    <div>
      <input
      placeholder="Enter task"
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <div>
              {
        todos.map((todo,i)=>(
          <p key={i}>{todo}</p>
        ))
      }
      </div>

    </div>
  );
}

export default App;
