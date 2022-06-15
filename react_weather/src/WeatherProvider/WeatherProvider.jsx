import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext({});
const APIKEY = "APIKEY";
function WeatherProvider({ children }) {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const currentWeatherInfoAPI = ``;
      const currentWeatherInfo = await fetch(currentWeatherInfoAPI);
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = await currentWeatherInfo.json();
      const hourlyWeatherInfoAPI = ``;
      const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI);
      const { hourly } = await hourlyWeatherInfo.json();
      setWeatherInfo({
        name,
        temp,
        humidity,
        weatherState,
        feels_like,
        speed,
        deg,
        hourly,
        sunset,
        sunrise,
        temp_max,
        temp_min,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <WeatherContext.Provider value={{ ...weatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
