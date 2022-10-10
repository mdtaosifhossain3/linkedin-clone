import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from "react-redux";
import RecentItems from "./RecentItems";



function SidebarLeft() {
  const authData = useSelector((state) => state.auth.value);

  return (
    <Box className="flex-[0.26]  rounded-md 2lg:flex-[0.3] lg:mr-4 2md:mr-0 ">
      {/* profile details */}
      <Box className="rounded-md bg-[#fff]">
        {/* BG */}
        <Box
          sx={{
            background: "black",
            height: "56px",
            borderTopRightRadius: "6px",
            borderTopLeftRadius: "6px",
          }}
        ></Box>
        {/* Avatar and name */}
        <Box className="flex flex-col items-center border-b-2">
          <Avatar sx={{ marginTop: "-25px", height: "67px", width: "67px" }}>
            {authData?.displayName[0]}
          </Avatar>
          <Typography sx={{ padding: "1rem 0", fontWeight: "bold" }}>
            {authData?.displayName}!
          </Typography>
        </Box>

        <Box className="space-y-2 pt-4 pb-2 border-b-2 2md:hidden">
          <Typography className=" px-2 hover:bg-[#e4e4e4] cursor-pointer">
            Who's viewed your profile{" "}
            <span className="text-[#0A8CD2]">2049</span>
          </Typography>
          <Typography className=" px-2 hover:bg-[#e4e4e4] cursor-pointer">
            Impression on your post <span className="text-[#0A8CD2]">6554</span>
          </Typography>
        </Box>

        <Box className="p-2 space-x-2 text-sm flex items-center hover:bg-[#e4e4e4] cursor-pointer 2md:hidden">
          <TurnedInOutlinedIcon sx={{ fontSize: "20px" }} />
          <Typography>My Items</Typography>
        </Box>
      </Box>

      {/* Recent items */}
      <Box className="rounded-md px-2 py-4 mt-2 bg-[#fff] 2md:hidden">
        <Typography variant="p" className="text-sm font-semibold">
          Recent
        </Typography>
        <RecentItems title="Back End Development" />
        <RecentItems title="Ui Design" />
        <RecentItems title="SEO Specialist" />

        {/* Group Items */}
        <Typography
          variant="h3"
          sx={{ fontSize: "14px", fontWeight: "bold", paddingTop: "1rem" }}
        >
          Groups
        </Typography>
        <RecentItems title="Mongo DB" />
        <RecentItems title="Ui Experience" />
        <RecentItems title="Javascript MasterClass" />
      </Box>
    </Box>
  );
}

export default SidebarLeft