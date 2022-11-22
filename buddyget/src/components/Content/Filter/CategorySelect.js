import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const CategorySelect = ({ category, selectedCategory }) => {
  const [categoryName, setCategoryName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    selectedCategory(categoryName);
  }, [categoryName]);

  return (
    <FormControl sx={{ flexGrow: 1 }}>
      <InputLabel id="demo-multiple-checkbox-label" sx={{ fontSize: 16 }}>
        Category
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={categoryName}
        onChange={handleChange}
        input={<OutlinedInput label="Category" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        sx={{
          fontSize: 16,
          minWidth: "120px",
          width: "100%",
          bgcolor: "white",
        }}
        fullWidth
      >
        {category.map((item) => (
          <MenuItem key={item.label} value={item.label}>
            <Checkbox checked={categoryName.indexOf(item.label) > -1} />
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
