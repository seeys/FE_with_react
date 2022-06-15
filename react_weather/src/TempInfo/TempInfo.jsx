import React from "react";
import { useContext } from "react";
import { WeatherContext } from "../WeatherProvider/WeatherProvider";

// useContext를 이용해서 데이터를 가져온다.
// 체감, 최저, 최고 온도를 보여줌
function TempInfo() {
  const { feels_like, temp_min, temp_max } = useContext(WeatherContext);
  return (
    <div className="temperature-info">
      <div>
        체감온도 <span>{feels_like}&deg;</span>
      </div>
      <div>
        최저기온 <span>{temp_min}&deg;</span>
      </div>
      <div>
        최고기온 <span>{temp_max}&deg;</span>
      </div>
    </div>
  );
}

export default TempInfo;
