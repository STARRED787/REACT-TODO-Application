// src/routes.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
// Import your components
import Login from "./components/SignIn";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
