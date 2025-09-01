import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { HiCalendar } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { TbMessageReportFilled, TbSettingsFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const IconClass = "w-5 h-5 text-gray-400 group-hover:text-blue-500";

  const ActiveClass =
    "flex hover:bg-blue-100 group hover:text-blue-500 rounded-md";

  const SidebarLink = [
    {
      label: "Dashboard",
      icon: <BiSolidDashboard className={`${IconClass}`} />,
    },
    {
      label: "Message",
      icon: <TbMessageReportFilled className={`${IconClass}`} />,
    },
    {
      label: "Notifocation",
      icon: <IoNotifications className={`${IconClass}`} />,
    },
    { label: "callender", icon: <HiCalendar className={`${IconClass}`} /> },
    { label: "setting", icon: <TbSettingsFilled className={`${IconClass}`} /> },
  ];

  return (
    <div className="bg-[#F1F1F1] w-[256px] h-screen">
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

              <span className="block ms-2 px-2 text-sm">{item.label}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
