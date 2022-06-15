import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// 날씨 조회 해주는 Context API 파일

export const WeatherContext = createContext({});
const APIKEY = "APIKEY";
function WeatherProvider({ children }) {
  // api를 비동기적으로 데이터가 로드되면 state를 업데이트해서 provider로 전달
  const [weatherInfo, setWeatherInfo] = useState({});

  // async를 이용해서 안에 await
  const getWeatherInfo = async () => {
    try {
      // fetch 이용
      const currentWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&q=seoul&units=metric`;
      const currentWeatherInfo = await fetch(currentWeatherInfoAPI);

      // distructing을 이용해서 데이터를 저장한다.
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = await currentWeatherInfo.json();
      const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${APIKEY}&units=metric`;
      const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI);
      const { hourly } = await hourlyWeatherInfo.json();
      // 가져온 데이터들을 감싸서 state에 저장
      // props로 내려도 되는데 context로 구현
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
      // 콘솔창에 빨간줄로 표시됨.
      console.error(error);
    }
  };

  // 처음에 init이 되었을때 호출 useEffect
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
