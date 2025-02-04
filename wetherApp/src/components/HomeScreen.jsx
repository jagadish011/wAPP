import React, { useState } from "react";
import { GoSun } from "react-icons/go";

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
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white relative">
        <div className="flex flex-col items-center justify-center gap-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Check the Weather
          </h1>
          <GoSun className="text-4xl text-white animate-spin-slow absolute top-6 right-6" />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter city name"
              className="flex-1 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition-all"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="px-6 py-4 rounded-xl bg-white/20  border border-white text-gray-800 font-semibold hover:bg-blue-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={() => onLocationSelect(city)}
            >
              Get Weather
            </button>
          </div>

          <button
            className="w-full px-6 py-4 rounded-xl bg-white/20  border border-white text-gray-800 font-semibold hover:bg-blue-200 transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-white/50"
            onClick={getCurrentLocation}
          >
            Use My Location
          </button>
        </div>

        <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-md filter blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-purple-500/20 backdrop-blur-md filter blur-xl"></div>
      </div>
    </div>
  );
};

export default HomeScreen;