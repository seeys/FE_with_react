import styled from "@emotion/styled";

// number형으로 받기
const StyledNumberBox = styled.select<{
  num: number;
}>`
  width: 48px;
  height: 48px;
  border: #48aeff solid 1px;
  color: #48aeff;
  font-size: 14px;

  appearance: none;
  padding-left: ${({ num }) => (num >= 10 ? 16 : 20)}px;

  &:disabled {
    opacity: 1;
  }
`;

const NumberBox = ({
  num,
  setNum,
}: {
  num?: number;
  setNum?: (num: number) => void;
}) => {
  return (
    <StyledNumberBox
      num={num ?? 0}
      value={num ?? "+"}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }}
      disabled={!setNum}
      onChange={(event) => {
        if (setNum) setNum(parseInt(event.currentTarget.value));
      }}
    >
      {!num ? (
        <option>+</option>
      ) : (
        Array(45)
          .fill(0)
          .map((value, idx) => <option>{idx + 1}</option>)
      )}
    </StyledNumberBox>
  );
};

export default NumberBox;
