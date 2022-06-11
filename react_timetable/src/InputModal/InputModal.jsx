import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Radio,
  Stack,
  MenuItem,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { timeTableState } from "../store/store";
import { v4 as uuidv1 } from "uuid";

const timeOptions = new Array(12)
  .fill(null)
  .map((e, i) => ({ value: i + 9, label: i + 9 }));

const checkOverLap = (A, B) =>
  B.start < A.start ? B.end > A.start : B.start < A.end;

function InputModal({
  showModal,
  handleClose,
  dayData = "mon",
  startTimeData = 9,
  endTimeData = 10,
  lectureNameData = "",
  colorData = "#00ff55",
  idNum,
}) {
  const {
    formState: { errors },
    control,
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  const [timeTableData, settimeTableData] = useRecoilState(timeTableState);

  //handler
  useEffect();

  const Submit = useCallback();
  const Edit = useCallback();
  return (
    <Dialog open={showModal} onClose={handleClose}>
      <form onSubmit={handleSubmit(idNum ? Edit : Submit)}>
        <DialogTitle>강의정보입력</DialogTitle>
        <DialogContent style={{ width: "400px" }}>
          <Controller
            control={control}
            name="lectureName"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.lectureName}
                style={{ marginTop: "30px", width: "350px" }}
                autoComplete="off"
                label="강의명"
              />
            )}
          />
          {errors.lectureNameData?.type === "required" && (
            <p style={{ color: "#d32f2f" }}>강의명을 입력해주세요</p>
          )}
          <FormControl style={{ marginTop: "30px" }}>
            <FormLabel>요일</FormLabel>
            <Controller
              control={control}
              name="lectureName"
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup {...field} style={{ display: "block" }}>
                  <FormControlLabel
                    value="mon"
                    control={<Radio />}
                    label="Mon"
                  />
                  <FormControlLabel
                    value="tue"
                    control={<Radio />}
                    label="Tue"
                  />
                  <FormControlLabel
                    value="wed"
                    control={<Radio />}
                    label="Wed"
                  />
                  <FormControlLabel
                    value="thu"
                    control={<Radio />}
                    label="Thu"
                  />
                  <FormControlLabel
                    value="fri"
                    control={<Radio />}
                    label="Fri"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <Stack spacing={3} style={{ marginTop: "30px", width: "350px" }}>
            <Controller
              control={control}
              name="startTime"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  error={
                    !!errors.startTime ||
                    !!(errors.endTime?.type === "validate")
                  }
                  style={{ marginTop: "30px", width: "350px" }}
                  label="시작 시간"
                  placeholder="시작 시간 선택"
                >
                  {timeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            {errors.startTime?.type === "required" && (
              <p style={{ color: "#d32f2f" }}>강의 시작 시간 선택</p>
            )}
            <Controller
              control={control}
              name="endTime"
              rules={{
                required: true,
                validate: (value) => getValues("startTime") < value,
              }}
              ender={({ field }) => (
                <TextField
                  {...field}
                  select
                  error={!!errors.endTime}
                  style={{ marginTop: "30px", width: "350px" }}
                  label="종료 시간"
                  placeholder="종료 시간 선택"
                >
                  {timeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            {errors.endTime?.type === "required" && (
              <p style={{ color: "#d32f2f" }}>강의 종료 시간 선택</p>
            )}
            {errors.endTime?.type === "validate" && (
              <p style={{ color: "#d32f2f" }}>
                시작시간과 종료시간을 확인해주세요.
              </p>
            )}
          </Stack>
          <div></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button type="submit">입력</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default InputModal;
