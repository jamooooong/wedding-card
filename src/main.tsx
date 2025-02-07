import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/homePage/HomePage";
import GuestBookPage from "./pages/guestBookPage/GuestBookPage";
import LandingPage from "./pages/landingPage/LandingPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/guestbook" element={<GuestBookPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
