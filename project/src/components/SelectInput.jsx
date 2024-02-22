import { Box, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

const SelectInput = ({ value, label, data, onChange, name }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
          name={name}
          required
          pattern="[a-zA-Z0-9]+"
        >
          {data.map((d) => (
            <MenuItem name={name} key={d.id} value={d.name}>
              {d.name}
            </MenuItem>
          ))}
        </Select>
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
        >
          <MenuItem value={'İlkokul'}>İlk Okul</MenuItem>
          <MenuItem value={'Ortaokul'}>Orta Okul</MenuItem>
          <MenuItem value={'Lise'}>Lise</MenuItem>
          <MenuItem value={'Önlisans'}>Ön Lisans</MenuItem>
          <MenuItem value={'Lisans'}>Lisans</MenuItem>
          <MenuItem value={'Yüksek Lisans'}>Yüksek Lisans</MenuItem>
        </Select> */}
      </FormControl>
    </Box>
  );
};

export default SelectInput;
