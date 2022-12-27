import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidthContryCode() {
  const [code, setCode] = React.useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={code}
          onChange={handleChange}
          autoWidth
          label="Country"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={91}>India</MenuItem>
          <MenuItem value={21}>UAE</MenuItem>
          <MenuItem value={22}>SAUDI ARABIA</MenuItem>
          <MenuItem value={21}>UAE</MenuItem>
          <MenuItem value={22}>SAUDI ARABIA</MenuItem>
          <MenuItem value={21}>UAE</MenuItem>
          <MenuItem value={22}>SAUDI ARABIA</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}