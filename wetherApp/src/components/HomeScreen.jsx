import React, { useState } from "react";

const HomeScreen = ({ onLocationSelect }) => {
  const [city, setCity] = useState("");

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          onLocationSelect([lat, lon]);
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-96">
        <h1 className="text-2xl font-bold mb-4">Check the Weather 🌤️</h1>

        <input
          type="text"
          placeholder="Enter city (e.g., Mumbai)"
          className="w-full p-2 border rounded-lg mb-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mb-2"
          onClick={() => onLocationSelect(city)}
        >
          Get Weather
        </button>

        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full"
          onClick={getCurrentLocation}
        >
          Use My Location 📍
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
