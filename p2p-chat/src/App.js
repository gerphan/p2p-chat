import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import SideBar from "./chat/SideBar";
import Login from "./login/index";
import SignUp from "./signup/index";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login user={user} setUser={setUser}/>} /> 
        <Route path="sign-up" element={<SignUp user={user} setUser={setUser}/>} /> 
        {login && <Route path="/chat" element={<SideBar user={user} setUser={setUser}/>} /> }
        {login && <Route path="/chat" element={<SideBar user={user} setUser={setUser}/>} /> }
      </Routes>
    </div>
  );
}

export default App;
