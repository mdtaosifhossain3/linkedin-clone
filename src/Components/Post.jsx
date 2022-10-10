import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Avatar, Box, Typography } from '@mui/material';
import {
  addDoc,
  collection, onSnapshot, orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import InputOptions from './InputOptions';


function Post() {
  const authData = useSelector((state) => state.auth.value);
  const [message,setMessage] = useState()
  const [postdata, setpostdata] = useState([]);
  const colref = collection(db,"message")
  const q = query(colref, orderBy("createAt", "desc"));



  //Collect data from firebase
  useEffect(() => {
      onSnapshot(q, (snapshot) => {

        setpostdata(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data:doc.data(),
          }))
        );
      });
  },[])




  const submitHandler = (e) => {
    e.preventDefault()  
  
    // Add Input data to database
    addDoc(colref, {
      msg: message,
      createAt: serverTimestamp(),
    })
      .then(() => console.log("posted successfully"))
      .catch((e) => console.log(e));


    setMessage("")
  }



  return (
    <Box className="flex-[0.58] px-6 2lg:flex-[0.7] lg:px-0 ">
      {/* Input Field */}
      <Box className=" bg-[#fff] rounded-md p-4">
        {/* Input Bar */}
        <form className="flex items-center space-x-2" onSubmit={submitHandler}>
          <Avatar sx={{ hieght: "47px", width: "45px" }}>
            {authData?.displayName[0]}
          </Avatar>
          <input
            className="w-full bg-[#e4e4e4] outline-none h-11 rounded-full pl-4 text-base"
            type="text"
            placeholder="Type Here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
        {/* Input Options */}
        <Box className="flex items-center justify-around sm:mt-2">
          <InputOptions Icon={InsertPhotoRoundedIcon} title="Photo" />
          <InputOptions Icon={PlayCircleFilledRoundedIcon} title="Video" />
          <InputOptions Icon={EventNoteRoundedIcon} title="Event" />
          <InputOptions Icon={NewspaperRoundedIcon} title="Write Article" />
        </Box>
      </Box>

      {/* posts */}

      <Box>
        {postdata?.map(({ id, data }) => (
          <Box className=" bg-[#fff] rounded-md p-4 mt-8" key={id}>
            <Box className="flex items-start space-x-2">
              <Avatar>{authData?.displayName[0]}</Avatar>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  {authData?.displayName}
                </Typography>
                <Typography sx={{ fontSize: "12px", opacity: "0.7" }}>
                  {data && new Date(data?.createAt?.toDate()).toDateString()}
                </Typography>
              </Box>
            </Box>

            <Box className="pt-3">
              <p className="sm:text-lg">{data?.msg}</p>
            </Box>

            <Box className="flex items-center justify-around">
              <InputOptions Icon={ThumbUpOutlinedIcon} title="Like" />
              <InputOptions Icon={CommentOutlinedIcon} title="Comment" />
              <InputOptions Icon={ShareOutlinedIcon} title="Share" />
              <InputOptions Icon={SendOutlinedIcon} title="Send" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Post