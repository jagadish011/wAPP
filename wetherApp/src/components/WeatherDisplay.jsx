import React from "react";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="text-white p-6 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-2">{weather.timezone}</h2>

      <div className="text-center text-4xl font-bold">
        🌡️ {weather.current.temperature_2m}°C
      </div>

      <p className="text-sm">Updated: {weather.current.time}</p>

      {/* 3-day Forecast */}
      <h3 className="text-lg font-bold mt-4">3-Day Forecast</h3>
      <div className="grid grid-cols-3 gap-2">
        {weather.daily.time.slice(0, 3).map((date, index) => (
          <div key={index} className="bg-white text-black p-3 rounded-lg text-center">
            <p className="font-bold">{date}</p>
            <p>🌡️ {weather.daily.temperature_2m_max[index]}°C / {weather.daily.temperature_2m_min[index]}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
