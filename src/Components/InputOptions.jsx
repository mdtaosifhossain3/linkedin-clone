import { Typography } from '@mui/material';
import React from 'react';

function InputOptions({Icon,title}) {
  return (
    <div className="flex items-center space-x-2 mt-4 p-2 hover:bg-[#e4e4e4] rounded-sm cursor-pointer sm:p-0">
      <Icon>{Icon ? Icon : "#"}</Icon>
      <Typography variant="h3" sx={{ fontSize: "16px" }} className="sm:hidden">
        {title}
      </Typography>
    </div>
  );
}

export default InputOptions