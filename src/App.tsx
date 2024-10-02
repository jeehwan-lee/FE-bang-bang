import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="p-6 pb-[70px] h-full">
          <div className="h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
