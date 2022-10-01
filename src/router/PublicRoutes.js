import React from "react";
import Login from "../components/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../components/login/Signin";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
