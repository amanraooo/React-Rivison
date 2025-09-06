import { useState } from "react";


function App() {

  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      comments: "",
      termsandconditions: false,
      mode: "",
      university: ""
    }
  )

  
  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData((prev => {
      return {
        ...prev,

        // if type is checkbox than enter checked value nhi to the normal value
        [name]: type === "checkbox" ? checked : value
      }
    }))
  }


  function submitHandler(event) {
    event.preventDefault();
    console.log("printing all the details..")
    console.log(formData);
  }


  return (
    <div>

      {/* form creation */}
      <form onSubmit={submitHandler}>

        {/* firstname as input */}
        <input
          type="text"
          name="firstname"
          onChange={changeHandler}
          placeholder="aman"
          value={formData.firstname}
        />
        <br />
        <br />

        {/* lastname as input */}
        <input
          type="text"
          name="lastname"
          onChange={changeHandler}
          placeholder="gaade"
          value={formData.lastname}
        />
        <br />
        <br />

        {/* email as input */}
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="amangaade@gmail.com"
          value={formData.email}
        />
        <br />
        <br />

        {/* textarea as input */}
        <textarea
          type="text"
          name="comments"
          onChange={changeHandler}
          placeholder="enter your comments"
          value={formData.comments}
        />
        <br />
        <br />

        {/* checkbox as input */}
        <input
          type="checkbox"
          name="termsandconditions"
          onChange={changeHandler}
          checked={formData.termsandconditions}
        />
        <label htmlFor="termsandconditions">I accept all the  terms and conditions</label>
        <br />
        <br />

        {/* radio buttons as input */}
        <fieldset>

          <legend>Mode:</legend>

          <input
            type="radio"
            name="mode"
            value="Online-mode"
            id="Online-mode"
            onChange={changeHandler}
            checked={formData.mode === "Online-mode"}
          />
          <label htmlFor="Online-mode">Online Mode</label>

          <input
            type="radio"
            name="mode"
            value="Offline-mode"
            id="Offline-mode"
            onChange={changeHandler}
            checked={formData.mode === "Offline-mode"}
          />
          <label htmlFor="Offline-mode">Offline Mode</label>

        </fieldset>
        <br />
        <br />

        {/* Options as input */}
        <label>Your university:  </label>

        <select
          name="university"
          id="university"
          value={formData.university}
          onChange={changeHandler}
        >

          <option value="DCRUST">DCRUST</option>
          <option value="DU">DU</option>
          <option value="KU">KU</option>

        </select>
        <br />
        <br />

        {/* submit button */}

        {/* Type 1  */}
        {/* <input type="submit" value='submit'/> */}

        {/* Type 2  */}
        <button >submit</button>

      </form>
    </div>
  );
}

export default App;
