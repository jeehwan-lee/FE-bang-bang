import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CompleteSignUp from "./pages/CompleteSignUp";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Diary from "./pages/Diary";
import PrivateRoute from "./components/auth/PrivateRoute";
import BottomTab from "./components/BottomTab/BottomTab";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="p-8 pb-[70px] h-full relative">
          <div className="h-full">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<Home />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/myPage" element={<MyPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/completeSignUp" element={<CompleteSignUp />} />
            </Routes>
          </div>
          <BottomTab />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
