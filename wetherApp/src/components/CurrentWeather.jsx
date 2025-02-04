import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl font-bold">Current Weather</h2>
      <p className="text-lg">{weather?.timezone}</p>
      <p className="text-4xl font-semibold">{weather?.current.temperature_2m}°C</p>
      <p className="text-sm text-gray-500">Updated: {weather?.current.time}</p>
    </div>
  );
};

export default CurrentWeather;
