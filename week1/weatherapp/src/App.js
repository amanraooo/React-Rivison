import { useState } from "react";
import Loader from "./components/Loader";

function App() {

  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  const API_KEY = "980f15aef7f437b5aea453f4b17a8b51"

  const handleSearh = async () => {

    if (!city.trim()) return;

    setloading(true);
    setData(null);

    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const data = await res.json();

      setData(data);
      setloading(false);
    } catch (e) {
      console.error("cant fetch info")
    }
  }

  //changes bg color according the  weather condition
  const getBg = () => {
    if (!data || !data.weather) return "from-slate-800 to-slate-900";

    const main = data.weather[0].main.toLowerCase();

    if (main.includes("clear"))
      return "from-yellow-400 to-orange-500";
    if (main.includes("cloud"))
      return "from-gray-600 to-blue-700";
    if (main.includes("rain"))
      return "from-purple-700 to-gray-900";
    if (main.includes("snow"))
      return "from-blue-200 to-white";

    return "from-slate-800 to-slate-900"
  }

  // current location weather
  const handleGPS = () => {
    if (!navigator.geolocation) return;

    setloading(true);
    setData(null);

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );

      const json = await res.json();
      setData(json);
      setloading(false);

    })
  }
  return (
    <div className={`min-h-screen text-white flex justify-center items-center px-4 bg-gradient-to-br ${getBg()}`}>

      <div className="w-full max-w-md bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 shadow-xl">

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 bg-gray-700 px-3 py-2 rounded-md outline-none"
          />

          <button
            onClick={handleSearh}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Search
          </button>

          <button
            onClick={handleGPS}
            className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-md"
          >
            GPS
          </button>
        </div>


        {loading && (
          <div className="flex justify-center py-4">
            <Loader />
          </div>
        )}

        {data && data.main && (
          <div className="text-center space-y-2 mt-4">
            <h2 className="text-2xl font-semibold">{data.name}, {data.sys.country}</h2>
            <h1 className="text-5xl font-bold">{data.main.temp}°C</h1>
            <p className="capitalize text-lg">{data.weather[0].description}</p>

            <div className="mt-4 text-sm space-y-1 opacity-80">
              <p>Feels like: {data.main.feels_like}°C</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind: {data.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

}

export default App;
