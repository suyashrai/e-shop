import "../App.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Home from "../components/home/Home";
import Login from "./login";
import SignUp from "./signUp";
import { Route, Routes} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function App(props) {
  return (
    <>
      
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;