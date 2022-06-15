import React, { useContext } from "react";
import { LabelList, Line, LineChart, XAxis } from "recharts";
import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";
import { WeatherContext } from "../WeatherProvider/WeatherProvider";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// data 시간 데이터를 가공해준다.
const formatXAxis = (data) => `${new Date(data * 1000).getHours()}시`;

// 커스텀한 점을 표시
// payload는 weather 정보
// cx, cy는 현재 위치
const CustomizedDot = ({ payload, cx, cy }) => (
  <CurrentWeatherIcon
    weatherState={payload.weather}
    x={cx - 13}
    y={cy - 5}
    fontSize={30}
  />
);
// 커스텀 라벨 그래프의 한 지점이 무엇인지 보여주는 것.
// 시간별 기온을 보여줌
const CustomizedLabel = ({ x, y, value }) => (
  <text x={x} y={y} dy={-4} fontSize={15} textAnchor="middle">
    {value}°
  </text>
);

function LineGraph({ num }) {
  // useContext를 이용해서 시간별 데이터를 가져옴
  const { hourly } = useContext(WeatherContext);

  // props로 받은 num으로 data를 가공해줌.
  // null safe문법을 활용해 hourly가 비어있으면 에러를 띄우지않게

  // XAxis는 X축으로 얘는 시간별 데이터가 됨.
  return (
    <LineChart
      width={960}
      height={200}
      data={hourly
        ?.slice(num * 12, (num + 1) * 12)
        .map(({ dt, temp, weather }) => ({
          dt,
          temp,
          weather: weather[0].main,
        }))}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 10,
      }}
    >
      <XAxis dataKey="dt" fontSize={15} tickFormatter={formatXAxis} />
      <Line
        dataKey="temp"
        stroke="#3cb371"
        strokeWidth={2}
        dot={<CustomizedDot />}
        isAnimationActive={false}
      >
        <LabelList content={<CustomizedLabel />} />
      </Line>
    </LineChart>
  );
}

function WeatherGraph() {
  const slides = [];
  // 24시간이어서 12시간 두 개로 나누어서 보여줌
  // Swiper로 나타냄
  for (let i = 0; i < 2; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <LineGraph num={i} />
      </SwiperSlide>
    );
  }
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {slides}
    </Swiper>
  );
}

export default WeatherGraph;
