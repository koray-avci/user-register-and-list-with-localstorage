import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioInput = ({ label, data, onChange,name,value }) => {
  return (
    <FormControl onChange={onChange}>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
      required
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
      >
        {data.map((d) => (
          <FormControlLabel required key={d.id}  value={d.name} control={<Radio />} label={d.name} />
        ))}
        {/* <FormControlLabel key={d.id} name={name} value={d.name} control={<Radio />} />
        <FormControlLabel name={name} value={d.name} control={<Radio />} /> */}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
