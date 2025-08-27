import React from "react";
import { Route, Routes } from "react-router-dom";
import Dasboard from "../pages/dashboard/Dasboard";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Dasboard />} />
    </Routes>
  );
}
