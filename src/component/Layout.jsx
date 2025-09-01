import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gray-200" >
      <Navbar />

      <div className="flex bg-[#F1F1F1] pt-4">
        <Sidebar />
        <Outlet />

      </div>
    </div>
  );
}
