import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { HiCalendar } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { TbMessageReportFilled, TbSettingsFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const IconClass = "w-5 h-5 text-gray-400 group-hover:text-blue-500";
  
  const ActiveClass = "flex hover:bg-blue-100 group hover:text-blue-500 rounded-md";

  const SidebarLink = [
    { label: "Dashboard", icon: <BiSolidDashboard className={`${IconClass}`} />,  },
    { label: "Message", icon: <TbMessageReportFilled className={`${IconClass}`} /> },
    { label: "Notifocation", icon: <IoNotifications className={`${IconClass}`} />, },
    { label: "callender", icon: <HiCalendar className={`${IconClass}`} />, },
    { label: "setting", icon: <TbSettingsFilled className={`${IconClass}`} />, },
  ];

  return <div className="bg-gray-200 w-[256px] h-screen">

    <div className="bg-white rounded-md p-4 text-gray-900 space-y-2" >

      {
        SidebarLink.map((item) => (
          <div key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${ActiveClass} flex p-2 items-center border-white border border-l-0`
                  : `flex items-center p-2`
              }
            >
              
                <i>
                  {item.icon}
                </i>
              
              <span className="ms-2 text-sm px-2 block ">{item.label}</span>

            </NavLink>

          </div>
        ))
      }

    </div>

  </div>;
}
