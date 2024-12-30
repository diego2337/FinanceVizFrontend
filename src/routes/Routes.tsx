import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import LandingPage from "../components/LandingPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/landing" element={<LandingPage />} />
  </Routes>
);

export default AppRoutes;
