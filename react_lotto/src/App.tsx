import styled from "@emotion/styled";
import React, { useState } from "react";
import Button from "./components/Button";
import NumberBox from "./components/NumberBox";
import Title from "./components/Title";

const NumberBoxContainter = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

function getRank(
  resNum: [number, number, number, number, number, number, number],
  num: [number, number, number, number, number, number]
) {
  const isBonus = num.includes(resNum[6]);
  resNum.splice(6, 1);

  let matchedNum = 0;
  for (const value of num) {
    if (resNum.includes(value)) matchedNum++;
  }

  switch (matchedNum) {
    case 6:
      return "1등입니다!";
    case 5:
      return isBonus ? "2등입니다!" : "3등입니다!";
    case 4:
      return "4등입니다!";
    case 3:
      return "5등입니다!";
  }
  return "낙첨되었습니다";
}

function App() {
  const [num, setNum] = useState<
    [number, number, number, number, number, number, number]
  >([1, 2, 3, 4, 5, 6, 7]);

  const [randNum, setRandNum] = useState<
    [number, number, number, number, number, number] | null
  >(null);
  return (
    <div className="App">
      <Title>정답 번호</Title>
      <NumberBoxContainter>
        {Array(8)
          .fill(1)
          .map((_, idx) => {
            if (idx === 6) return <NumberBox />;
            if (idx === 7) idx = 6;
            return (
              <NumberBox
                num={num[idx]}
                setNum={(value) => {
                  if (num.includes(value)) return;
                  setNum((prev) => {
                    prev[idx] = value;
                    return [...prev];
                  });
                }}
              />
            );
          })}
      </NumberBoxContainter>
      <div style={{ height: 120 }} />
      <Button
        onClick={() => {
          const li: number[] = [];
          while (li.length < 6) {
            const v = Math.floor(Math.random() * 45 + 1);
            if (li.includes(v)) continue;
            li.push(v);
          }
          setRandNum(li as [number, number, number, number, number, number]);
        }}
      >
        랜덤 번호 추첨
      </Button>
      {randNum && (
        <>
          <div style={{ height: 24 }} />
          <Title>번호 추첨 결과</Title>
          <NumberBoxContainter>
            {Array(6)
              .fill(1)
              .map((_, idx) => (
                <NumberBox num={randNum[idx]} />
              ))}
          </NumberBoxContainter>
          <div style={{ height: 40 }} />
          <Title>{getRank([...num], [...randNum])}</Title>
        </>
      )}
    </div>
  );
}

export default App;
