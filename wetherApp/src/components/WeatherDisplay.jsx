import React from "react";
import { FaRegSnowflake } from "react-icons/fa";

const WeatherDisplay = ({ weather}) => {

  if (!weather){
    return null
  }

  const buttonClick = () => {
    window.location.reload();
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <button className="fixed top-4 left-4 z-10" title="Click To Check New Weather" onClick={buttonClick}>
        <FaRegSnowflake className="text-2xl hover:text-gray-600 animate-spin-slow" />
      </button>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {weather.timezone}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-6xl md:text-7xl font-bold text-gray-800">
              {weather.current.temperature_2m}°C
            </span>
          </div>
          <p className="text-sm text-gray-800/80">
            Last updated: {weather.current.time}
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-center">
            3-Day Forecast
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {weather.daily.time.slice(0, 3).map((date, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white transition-transform hover:transform hover:scale-105"
              >
                <div className="font-bold text-lg mb-2 text-gray-800 flex justify-between items-center">
                  <span>{new Date(date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short'
                  })}</span>
                  <span className="text-sm">
                    ({date})
                  </span>
                </div>
                <div className="space-y-1 text-gray-800">
                  <p className="text-sm">
                    High: <span className="font-semibold">{weather.daily.temperature_2m_max[index]}°C</span>
                  </p>
                  <p className="text-sm">
                    Low: <span className="font-semibold">{weather.daily.temperature_2m_min[index]}°C</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;