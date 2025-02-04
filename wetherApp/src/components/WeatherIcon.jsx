import React from "react";

const WeatherIcon = ({ code }) => {
  const weatherIcons = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "🌥️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    61: "🌧️",
    71: "❄️",
    80: "🌦️",
  };

  return <span className="text-4xl">{weatherIcons[code] || "❓"}</span>;
};

export default WeatherIcon;
