import { Typography } from '@mui/material';
import React from 'react';

function RecentItems({title}) {
  return (
    <div className=" hover:bg-[#e4e4e4] cursor-pointer flex items-center px-2 space-x-2 mt-2">
      <span className='font-semibold'>#</span>
      <Typography variant='p' className='opacity-[0.6] text-xs'>{title}</Typography>
    </div>
  );
}

export default RecentItems