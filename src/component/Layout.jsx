import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import BgBlur from "../common/BgBlur";

export default function Layout() {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownNotif, setDropDownNotif] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar
        dropDown={dropDown}
        setDropDown={setDropDown}
        dropDownNotif={dropDownNotif}
        setDropDownNotif={setDropDownNotif}
        menu={menu}
        setMenu={setMenu}
      />

      <div className="relative">
        {dropDown || dropDownNotif || menu ? <BgBlur /> : null}
        <div className={`flex gap-4 px-4 py-4`}>
          <div className="hidden sm:flex">
            <Sidebar />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
