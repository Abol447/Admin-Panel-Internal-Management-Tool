import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />

      <div className="flex gap-4 px-4 pt-4">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
