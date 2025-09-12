import React from "react";
import dashboardPic from "../asset/pic/dashboard.svg";
import { NavLink } from "react-router-dom";
import { Svg } from "../utils/svg/main";

export default function Sidebar() {
  const IconClass = "w-[24px] h-[24px] text-gray-400 group-hover:text-blue-500";

  const ActiveClass =
    "flex hover:bg-blue-100 group hover:text-blue-500 rounded-md";
  const svg = new Svg();
  const SidebarLink = [
    {
      label: "Dashboard",
      icon: svg.Dashboard("#8E8E93 ", "24px"),
    },
    {
      label: "People",
      icon: svg.People("fill-svgGray ", "24px"),
    },
    {
      label: "Projects",
      icon: svg.Task("#8E8E93 ", "24px"),
    },
    {
      label: "callender",
      icon: svg.Calender("fill-svgGray  w-6"),
    },
    {
      label: "Training",
      icon: svg.Board("fill-svgGray  w-6"),
    },
    {
      label: "Timesheet",
      icon: svg.TimeGlass("fill-svgGray  w-6 h-6"),
    },
    {
      label: "reports",
      icon: svg.Chat("fill-svgGray", "24px"),
    },
    {
      label: "Timesheet",
      icon: svg.Building(),
    },
    {
      label: "Help",
      icon: svg.Question("#8E8E93", "24px"),
    },
  ];

  return (
    <div className="flex flex-col justify-between bg-[#F1F1F1] w-[256px] h-[960px]">
      <div className="space-y-2 bg-white p-4 rounded-[14px] text-gray-900">
        {SidebarLink.map((item) => (
          <div key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${ActiveClass} flex p-2 items-center border-white border border-l-0 font-medium`
                  : `flex items-center p-2`
              }
            >
              <i>{item.icon}</i>

              <span className="block ms-2 px-2 font-medium text-sm">
                {item.label}
              </span>
            </NavLink>
          </div>
        ))}
      </div>

      <div className="bg-[#ffff] rounded-lg text-center">
        <h2 className="py-3 font-bold"> CAMIOCA </h2>
        <div className="p-2 text-[#8E8E93] text-sm">version : 11.07.02</div>
      </div>
    </div>
  );
}