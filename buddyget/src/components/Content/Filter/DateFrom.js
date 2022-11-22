import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from "react";

export const DateFrom = ({ start }) => {
  const [startDate, setStartDate] = useState(dayjs("2022-07-01"));

  useEffect(() => {
    start(startDate);
  }, [startDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="From"
        value={startDate}
        inputFormat="DD/MM/YY"
        OpenPickerButtonProps={{ style: { paddingLeft: 0 } }}
        onChange={(newDate) => {
          setStartDate(newDate);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              minWidth: "120px",
              flexGrow: 1,
              bgcolor: "white",
            }}
          />
        )}
        InputProps={{
          style: {
            fontSize: 16,
          },
        }}
      />
    </LocalizationProvider>
  );
};
