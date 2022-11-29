import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import SideBar from "./chat/SideBar";
import Login from "./login/index";
import SignUp from "./signup/index";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} /> 
        <Route path="sign-up" element={<SignUp />} /> 
        <Route path="/chat" element={<SideBar />} /> 
      </Routes>
    </div>
  );
}

export default App;
