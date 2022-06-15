import React from "react";
import {
  WiDayCloudy,
  WiDayRain,
  WiDaySunny,
  WiDust,
  WiDaySprinkle,
  WiDayThunderstorm,
  WiDaySnow,
  WiNa,
} from "react-icons/wi";

// weatherState를 보고 날씨상태에 따라 아이콘을 설정해주기 위한 파일
// 다른 설정들이 있으면 props로 받음 (크기, 위치 등등)
function CurrentWeatherIcon({ weatherState, ...props }) {
  switch (weatherState) {
    case "Thunderstorm":
      return <WiDayThunderstorm {...props} />;
    case "Snow":
      return <WiDaySnow {...props} />;
    case "Clouds":
      return <WiDayCloudy {...props} />;
    case "Clear":
      return <WiDaySunny {...props} />;
    case "Haze":
      return <WiDust {...props} />;
    case "Mist":
      return <WiDust {...props} />;
    case "Smoke":
      return <WiDust {...props} />;
    case "Dust":
      return <WiDust {...props} />;
    case "Fog":
      return <WiDust {...props} />;
    case "Sand":
      return <WiDust {...props} />;
    case "Ash":
      return <WiDust {...props} />;
    case "Squall":
      return <WiDust {...props} />;
    case "Tornado":
      return <WiDust {...props} />;
    case "Rain":
      return <WiDayRain {...props} />;
    case "Drizzle":
      return <WiDaySprinkle {...props} />;
    default:
      return <WiNa {...props} />;
  }
}

export default CurrentWeatherIcon;
