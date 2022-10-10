import React from 'react';
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Feed from './Feed';
import Login from './Login';
import Navbar from './Navbar';

function PrivateRoute() {
    const authData = useSelector((state) => state.auth.value);
  return (
    <div>
      {authData !== null ?  (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </>
      ):(<Login/>)}
    </div>
  );
}

export default PrivateRoute