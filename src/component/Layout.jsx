import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import BgBlur from "../common/BgBlur";

export default function Layout() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar dropDown={dropDown} setDropDown={setDropDown} />
      <div className="relative">
        {dropDown ? <BgBlur /> : null}
        <div className={`flex gap-4 px-4 py-4`}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
