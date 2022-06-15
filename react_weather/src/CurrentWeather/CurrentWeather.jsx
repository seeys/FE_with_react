import React from "react";
import { useContext } from "react";
import { WeatherContext } from "../WeatherProvider/WeatherProvider";
import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";
function CurrentWeather() {
  // 데이터들을 context를 이용해서 전역상태로 가져온다.
  // 도시이름, 기온, 현재날씨상태
  const { name, temp, weatherState } = useContext(WeatherContext);
  return (
    <div className="weather">
      {name} &nbsp;/
      <CurrentWeatherIcon weatherState={weatherState} />
      <span>{temp}&deg;</span>
    </div>
  );
}

export default CurrentWeather;
