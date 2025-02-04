import axios from "axios";

// Convert city name to latitude & longitude
export const getCityCoordinates = async (city) => {
  try {
    const res = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    console.log(res.data, "res data");
    if (res.data.results && res.data.results.length > 0) {
      const { latitude, longitude } = res.data.results[0];
      return { lat: latitude, lon: longitude };
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    console.error("Error fetching city coordinates", error);
    return null;
  }
};

// Fetch weather data using latitude & longitude
export const fetchWeatherData = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3`
    );
    console.log(res.data, "res");
    return res.data;
  } catch (error) {
    console.error("Error fetching weather data", error);
    return null;
  }
};
