import React from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import TempInfo from "./TempInfo/TempInfo";
import WeatherTab from "./WeatherTab/WeatherTab";
import "./style.css";
function WeatherApp() {
  return (
    <>
      <div className="container">
        <CurrentWeather />
        <TempInfo />
        <ExtraInfo />
        <WeatherTab />
      </div>
    </>
  );
}

export default WeatherApp;
