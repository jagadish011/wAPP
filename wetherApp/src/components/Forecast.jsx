import React from "react";

const Forecast = ({ daily }) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">3-Day Forecast</h2>
      <ul>
        {daily.time.slice(0, 3).map((date, index) => (
          <li key={index} className="flex justify-between py-2 border-b">
            <span>{date}</span>
            <span className="font-semibold">{daily.temperature_2m_max[index]}°C / {daily.temperature_2m_min[index]}°C</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
