import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",

    }
  )

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
  }

  return (
    <div>
      <form>
        <label>

        </label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={changeHandler}
        />
      </form>
    </div>

  );
}

export default App;
