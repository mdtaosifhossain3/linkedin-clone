import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import image from '../assets/linkedin.png';
import Logo from '../assets/Logo.jpg';
import { logout } from "../features/authSlice";
import HeaderOptions from "./HeaderOptions";

import { useDispatch } from 'react-redux';
function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const addLogoutBtn = () => {
    dispatch(logout());
    signOut(auth)
    navigate("/login")
  }

  return (
    <div className="bg-[#ffffff] py-2 px-8 lg:px-2 md:px-0 sm:min-w-[394px]">
      <div className="max-w-[1200px] w-full m-auto lg:max-w-[800px] lg:m-auto lg:w-full">
        {/* Header Secion */}
        <div className="flex items-center justify-between xl:justify-start">
          {/* Header Right */}
          <div className="flex items-center xl:pr-[4rem] lg:pr-8 md:pr-1">
            {/* Logo */}
            <img src={image} className="h-10 md:hidden" />

            {/* Search Bar */}
            <div className="ml-4 bg-[#EEF3F8] h-10 pl-3 w-80 flex items-center xl:w-0 xl:h-0">
              {/* Search Icon */}
              <div className="xl:flex xl:flex-col xl:items-center">
                <SearchOutlinedIcon sx={{ color: "black" }} />
                <Typography variant="p" className="hidden xl:block lg:hidden">
                  Search
                </Typography>
              </div>

              {/* Search */}
              <input
                type="text"
                className="w-full border-none outline-none bg-inherit text-base pl-1	xl:hidden"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Header Left */}
          <div className="flex justify-around	">
            <div className="flex items-center justify-between lg:pl-5">
              <HeaderOptions title="Home" Icon={HomeIcon} />
              <HeaderOptions title="My Network" Icon={PeopleIcon} />
              <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
              <HeaderOptions title="Messaging" Icon={ChatIcon} />
              <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
              <HeaderOptions onClick={addLogoutBtn} title="me" avatar={Logo}/>
            </div>
            <div className="flex items-center md:hidden">
              <HeaderOptions title="Work" Icon={AppsIcon} />
              <Typography sx={{ maxWidth: "105px", textAlign: "center" }}>
                Try Premuim free
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar