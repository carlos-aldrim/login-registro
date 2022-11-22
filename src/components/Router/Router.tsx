import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PagesRoutes } from "../../views/constants/routes";
import { Login } from "../../views/pages/Login";
import { Register } from "../../views/pages/Register";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path={PagesRoutes.login}
        element={<Login/>}
        />
        <Route
        path={PagesRoutes.register}
        element={<Register/>}
        />
      </Routes>
    </BrowserRouter>
  );
};