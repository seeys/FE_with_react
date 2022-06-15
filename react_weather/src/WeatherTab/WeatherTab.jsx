import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import HumidityGraph from "../HumidityGraph/HumidityGraph";
import WeatherGraph from "../WeatherGraph/WeatherGraph";
import "swiper/css";
import "swiper/css/navigation";
import WindGraph from "../WindGraph/WindGraph";

// Weather 탭을 material tab 컴포넌트로 이용하여 구현

// 탭 패널들 날씨, 습도, 바람 그래프
// value는 현재 인덱스 아이템 인덱스를 비교
function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

// 탭이 몇번째 인덱스에 있는지를 state를 이용해서 설정한다.
// variant = fullWidth는 탭 창에서 넓이를 가득차게
function WeatherTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="날씨" />
          <Tab label="습도" />
          <Tab label="바람" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WeatherGraph />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HumidityGraph />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WindGraph />
      </TabPanel>
    </Box>
  );
}

export default WeatherTab;
