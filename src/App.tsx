import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CompleteSignUp from "./pages/CompleteSignUp";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="p-8 pb-[70px] h-full">
          <div className="h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/completeSignUp" element={<CompleteSignUp />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
