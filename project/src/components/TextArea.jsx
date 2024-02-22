import { TextField } from '@mui/material'
import React from 'react'

const TextArea = ({label,type,onChange,name,value}) => {
  return (
    <TextField
    required
    onChange={onChange}
    value={value}
    label={label}
    type={type}
    name={name}
    sx={{minWidth:'150px'}}
    multiline
    rows={3}
    variant="standard"
  />
  )
}

export default TextArea
