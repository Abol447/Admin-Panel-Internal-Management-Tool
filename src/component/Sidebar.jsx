import React from "react";
import dashboardPic from "../asset/pic/dashboard.svg";
import { NavLink } from "react-router-dom";

import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  const IconClass = "w-[24px] h-[24px] text-gray-400 group-hover:text-blue-500";

  return (
    <div className="flex flex-col justify-between bg-[#F1F1F1] xl:min-w-[256px] h-[960px]">
      <SidebarMenu />
      <div className="bg-[#ffff] rounded-lg text-center">
        <h2 className="py-3 font-bold"> CAMIOCA </h2>
        <div className="p-2 text-[#8E8E93] text-sm">version : 11.07.02</div>
      </div>
    </div>
  );
}
