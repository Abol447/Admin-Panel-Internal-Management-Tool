import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import BgBlur from "../common/BgBlur";

export default function Layout() {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownNotif, setDropDownNotif] = useState(false);

  return (
    <div className="bg-[#F1F1F1]">
      <Navbar
        dropDown={dropDown}
        setDropDown={setDropDown}
        dropDownNotif={dropDownNotif}
        setDropDownNotif={setDropDownNotif}
      />

      <div className="relative">
        {dropDown || dropDownNotif ? <BgBlur /> : null}
        <div className={`flex gap-4 px-4 py-4`}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
