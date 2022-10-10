import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from "react-redux";



function HeaderOptions({ avatar, title, Icon, onClick }) {
 const authData = useSelector((state) => state.auth.value);

  return (
    <div
      onClick={onClick}
      className="px-4 py-0 flex flex-col items-center cursor-pointer "
    >
      {Icon && <Icon className="text-[#191919] lg:font-bold" />}
      {avatar && (
        <Avatar
          sx={{ height: "35px", width: "35px", objectFit: "contain" }}
          className="text-[#191919] "
        >
          {authData?.displayName[0]}
        </Avatar>
      )}
      <h4 className="text-[#191919] font-normal lg:hidden">{title}</h4>
    </div>
  );
}

export default HeaderOptions