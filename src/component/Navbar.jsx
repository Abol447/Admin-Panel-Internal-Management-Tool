import { lazy, Suspense, useState } from "react";
import arrow_drop_down from "../asset/pic/arrow_drop_down.svg";
import profile from "../asset/pic/baseline-account_circle-24px.png";
import calender from "../asset/pic/_ionicons_svg_md-calendar.png";
import rocket from "../asset/pic/_ionicons_svg_md-rocket.png";
import beach from "../asset/pic/baseline-beach_access-24px.png";
import up_drop_down from "../asset/pic/up_drop_down.svg";
const IoNotifications = lazy(() =>
  import("react-icons/io5").then((mod) => ({ default: mod.IoNotifications }))
);
import SearchInput from "./UI/SearchInput";
import DropDown from "./DropDown";

import DropDownElement from "./DropDownElement";
const FaCaretDown = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaCaretDown }))
);

export default function Navbar({ dropDown, setDropDown }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-b-lg h-[64px]">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center rounded-b-lg h-[64px]">
          {" "}
          <div className="flex justify-between items-center px-6 w-[272px] cursor-pointer row">
            <img
              src="/images/user-avatar-2.jpg"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <div className="w-[134px] text-lg">
              <h2>username</h2>
            </div>
            {dropDown ? (
              <img
                onClick={() => setDropDown((value) => (value = !value))}
                className="w-6 h-6"
                src={arrow_drop_down}
              />
            ) : (
              <img
                onClick={() => setDropDown((value) => (value = !value))}
                className="w-6 h-6"
                src={up_drop_down}
              />
            )}
          </div>
          <DropDown open={dropDown}>
            <DropDownElement text={"My details"} icon={profile} />
            <DropDownElement text={"My calendar"} icon={calender} />
            <DropDownElement text={"Vacations"} icon={beach} />
            <DropDownElement text={"Corporate CV"} icon={profile} />
            <DropDownElement text={"Perfomance review"} icon={rocket} />
          </DropDown>
        </div>

        <SearchInput />
      </div>

      <button className="relative mx-5 text-blue-500 text-2xl">
        <span className="block top-0.5 right-0.5 absolute bg-red-500 rounded-full ring-1 ring-white w-2 h-2"></span>
        <Suspense>
          <IoNotifications />
        </Suspense>
      </button>
    </div>
  );
}
