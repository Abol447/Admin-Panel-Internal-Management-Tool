import React from "react";

import { IoMdCalendar, IoMdChatbubbles, IoMdHelp, IoMdPeople } from "react-icons/io";
import { MdAssignment, MdDashboard, MdOutlineBusiness, MdOutlineHourglassEmpty } from "react-icons/md";
import { RiArtboardLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const IconClass = "w-[24px] h-[24px] text-gray-400 group-hover:text-blue-500";

  const ActiveClass =
    "flex hover:bg-blue-100 group hover:text-blue-500 rounded-md";

  const SidebarLink = [
    {
      label: "Dashboard",
      icon: <MdDashboard className={`${IconClass}`} />,
    },
    {
      label: "People",
      icon: <IoMdPeople className={`${IconClass}`} />

    },
    {
      label: "Projects",
      icon: <MdAssignment className={`${IconClass}`} />

    },
    {
      label: "callender",
      icon: <IoMdCalendar className={`${IconClass}`} />
    },
    {
      label: "Training",
      icon: <RiArtboardLine className={`${IconClass}`} />
    },
    {
      label: "Timesheet",
      icon: <MdOutlineHourglassEmpty className={`${IconClass}`} />
    },
    {
      label: "reports",
      icon: <IoMdChatbubbles className={`${IconClass}`} />
    },
    {
      label: "Timesheet",
      icon: <MdOutlineBusiness className={`${IconClass}`} />
    },
    {
      label: "Help",
      icon: <IoMdHelp className={`${IconClass}`} />
    },
  ];





  return (
    <div className="bg-[#F1F1F1] w-[256px] h-screen flex flex-col justify-between">
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

              <span className="block ms-2 px-2 text-sm font-medium">{item.label}</span>
            </NavLink>
          </div>
        ))}
      </div>




      <div className="bg-[#ffff] rounded-lg mb-5 text-center" >
        <h2 className="font-bold py-3" > CAMIOCA </h2>
        <div className="text-sm text-[#8E8E93] p-2" >
          version : 11.07.02
        </div>
      </div>

    </div>
  );
}
