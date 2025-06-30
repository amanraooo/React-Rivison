import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
} from "./features/todos/todoSlice";

function App() {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [filter, setFilter] = useState('All')
  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const filteredTodos = todos
    .filter(todo =>
      todo.text.toLowerCase().includes(searchText.toLowerCase()) // for search filter
    )
    .filter(todo => {   // for filter todos feature
      if (filter === "All") return true;
      if (filter === "Completed") return todo.completed;
      if (filter === "Active") return !todo.completed;
    });

  // Save to localStorage on todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>Todo App</h1>

      {/* Search input */}
      <div>
        <input
          type="text" placeholder="Search todos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* filter buttons*/}
      <div>
        <h4>Filter</h4>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Active')}>Active</button>
      </div>
      <br />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>➕</button>


      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "8px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >

            {/* Checkbox for toggle */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />

            {/*  Edit Mode */}
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{ marginLeft: "8px" }}
                />
                <button
                  disabled={editingText.trim() === ""}

                  onClick={() => {
                    dispatch(
                      editTodo({ id: todo.id, newText: editingText.trim() })
                    );
                    setEditingId(null);
                    setEditingText("");
                  }}
                  style={{ marginLeft: "4px" }}
                >
                  ✔️
                </button>
              </>
            ) : (
              <>
                <span style={{ marginLeft: "8px" }}>{todo.text}</span>
                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditingText(todo.text);
                  }}
                  style={{ marginLeft: "8px" }}
                >
                  ✏️
                </button>
              </>
            )}

            {/* ✅ Delete Button */}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: "8px", color: "red" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
