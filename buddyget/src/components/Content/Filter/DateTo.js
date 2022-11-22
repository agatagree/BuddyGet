import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";

export const DateTo = ({ end }) => {
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  useEffect(() => {
    end(endDate);
  }, [endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="To"
        value={endDate}
        inputFormat="DD/MM/YY"
        OpenPickerButtonProps={{ style: { paddingLeft: 0 } }}
        onChange={(endDate) => {
          setEndDate(endDate);
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
