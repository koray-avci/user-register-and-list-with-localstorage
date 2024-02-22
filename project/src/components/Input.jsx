import { TextField } from '@mui/material'
import React from 'react'

const Input = ({label,type,value,onChange,name}) => {
  return (
    <TextField
    required
    sx={{ margin: "1rem" }}
    onChange={onChange}
    name={name}
    type={type}
    label={label}
    variant="standard"
    value={value}
  />
  )
}

export default Input
