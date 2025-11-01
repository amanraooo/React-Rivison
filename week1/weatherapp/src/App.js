import { useState } from "react";
import Loader from "./components/Loader";

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  const API_KEY = "980f15aef7f437b5aea453f4b17a8b51"

  const handleSearh = async () => {

    if (!city.trim) return;

    setloading(true);
    setData(null);

    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const data = await res.json();

      setData(data);
      setloading(false);
    } catch (e) {

    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter city"
        value={city}
        onChange={(e) => { setCity(e.target.value) }}
      />

      <button onClick={handleSearh}>Search</button>

      {
        loading && <Loader />
      }

      {
        data && data.main && (
          <div>
            <h2>{data.name}, {data.sys.country}</h2>
            <h1>{data.main.temp}°C</h1>
            <p>Feels like: {data.main.feels_like}°C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind: {data.wind.speed} m/s</p>
          </div>
        )
      }

    </div>
  );
}

export default App;
