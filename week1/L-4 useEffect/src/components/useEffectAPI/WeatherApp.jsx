import React, { useState } from 'react'

const WeatherApp = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = '0ad65c3ff69942fc7fc20fd0697eaab1';

    const getWeather = () => {
        if (!city) return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((res) => {
                if (!res.ok)
                    throw new error('api not working')
                return res.json();

            }).then((data) => {
                setWeather({
                    temp: data.main.temp,
                    condition: data.weather[0].main,
                });
                setError(null);
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    if (loading) return <h1>Loading....</h1>
    if (error) return <h1>Error Occured: {error}</h1>
    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <br />
            <button onClick={getWeather}>Get Weather</button>

            {
                weather && (
                    <div>
                        <h3>Temperature: {weather.temp}°C</h3>
                        <h4>Condition: {weather.condition}</h4>
                    </div>
                )

            }

        </div>
    )
}

export default WeatherApp
