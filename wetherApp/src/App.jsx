import React from 'react';
import { useState } from 'react';
import HomeScreen from "./components/HomeScreen";
import WeatherDisplay from "./components/WeatherDisplay";
import { fetchWeatherData, getCityCoordinates } from "./services/weatherAPI";

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleLocationSelect = async (input) => {
    let lat, lon;

    if (typeof input === "string") {
      const coords = await getCityCoordinates(input);
      if (!coords) {
        alert("City not found. Try another.");
        return;
      }
      lat = coords.lat;
      lon = coords.lon;
    } else {
      lat = input[0];
      lon = input[1];
    }

    const data = await fetchWeatherData(lat, lon);
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 m-auto blur-3xl">
          <div className="absolute inset-0 m-auto w-screen h-screen min-w-[1000px] overflow-hidden bg-white rounded-full scale-80">
            <div 
              className="absolute inset-0 m-auto w-screen h-screen animate-spin-slow"
              style={{
                background: 'conic-gradient(from 0deg, #0088ff, #ff6600, #bbffa1, #4c00ff, #ab2666, #0099ff)',
                animation: 'spin 8s linear infinite',
                transform: 'scale(2)'
              }}
            />
          </div>
        </div>
      </div>

      
      <div className="relative z-10 w-full">
        {!weather ? (
          <HomeScreen onLocationSelect={handleLocationSelect} />
        ) : (
          <WeatherDisplay weather={weather} />
        )}
      </div>

      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg) scale(2);
          }
          to {
            transform: rotate(360deg) scale(2);
          }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;