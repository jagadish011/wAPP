import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchWeather = async () => {
        try {
            setLoading(true)
            const res = await axios.get(
                'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3'
            )
            setWeather(res.data)
        } catch (err) {
            setError("Failed to fetch weather data. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    const weatherIcons = {
        0: "☀️", // Clear sky
        1: "🌤️", // Mostly clear
        2: "⛅", // Partly cloudy
        3: "☁️", // Overcast
        45: "🌫️", // Fog
        48: "🌫️", // Rime Fog
        51: "🌦️", // Light drizzle
        53: "🌧️", // Moderate drizzle
        55: "🌧️", // Heavy drizzle
        61: "🌧️", // Light rain
        63: "🌧️", // Moderate rain
        65: "🌧️", // Heavy rain
        71: "❄️", // Light snow
        73: "❄️", // Moderate snow
        75: "❄️", // Heavy snow
        80: "🌦️", // Rain showers
        81: "🌧️", // Moderate showers
        82: "⛈️", // Heavy showers
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>

                {loading && <p className="text-center text-gray-600">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {weather && (
                    <>
                        {/* Current Weather */}
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">{weather.timezone}</h2>
                            <p className="text-lg">{weather.current.temperature_2m}°C</p>
                            <span className="text-4xl">
                                {weatherIcons[weather.daily.weathercode[0]] || "🌡️"}
                            </span>
                        </div>

                        {/* 3-Day Forecast */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-center">3-Day Forecast</h3>
                            <div className="grid gap-2">
                                {weather.daily.time.slice(0, 3).map((date, index) => (
                                    <div key={date} className="flex justify-between bg-gray-100 p-2 rounded">
                                        <p>{new Date(date).toDateString()}</p>
                                        <p>{weather.daily.temperature_2m_min[index]}°C - {weather.daily.temperature_2m_max[index]}°C</p>
                                        <span>{weatherIcons[weather.daily.weathercode[index]] || "🌡️"}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default WeatherApp
