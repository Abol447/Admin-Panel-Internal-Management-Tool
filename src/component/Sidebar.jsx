import React from "react";
import dashboardPic from "../asset/pic/dashboard.svg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const IconClass = "w-[24px] h-[24px] text-gray-400 group-hover:text-blue-500";

  const ActiveClass =
    "flex hover:bg-blue-100 group hover:text-blue-500 rounded-md";

  const SidebarLink = [
    {
      label: "Dashboard",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "People",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "Projects",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "callender",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "Training",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "Timesheet",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "reports",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "Timesheet",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
    {
      label: "Help",
      icon: <img src={dashboardPic} className={`${IconClass}`} />,
    },
  ];

  return (
    <div className="flex flex-col justify-between bg-[#F1F1F1] w-[256px] h-screen">
      <div className="space-y-2 bg-white p-4 rounded-md text-gray-900">
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

      <div className="bg-[#ffff] mb-5 rounded-lg text-center">
        <h2 className="py-3 font-bold"> CAMIOCA </h2>
        <div className="p-2 text-[#8E8E93] text-sm">version : 11.07.02</div>
      </div>
    </div>
  );
}
