import { lazy, useState } from "react";
import arrow_drop_down from "../asset/pic/arrow_drop_down.svg";
import profile from "../asset/pic/baseline-account_circle-24px.png";
import calender from "../asset/pic/_ionicons_svg_md-calendar.png";
import rocket from "../asset/pic/_ionicons_svg_md-rocket.png";
import beach from "../asset/pic/baseline-beach_access-24px.png";
import up_drop_down from "../asset/pic/up_drop_down.svg";

import SearchInput from "./UI/SearchInput";
import DropDown from "./DropDown";

import DropDownElement from "./DropDownElement";
import Notif from "../pages/myDetail/Notif";
const FaCaretDown = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaCaretDown }))
);

export default function Navbar({ dropDown, setDropDown , dropDownNotif , setDropDownNotif }) {


  

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
          <DropDown 
          className="left-[34px] top-[70px]"
          open={dropDown}>
            <DropDownElement
              text={"My details"}
              setOPen={setDropDown}
              icon={profile}
              path={"my-detail"}
            />
            <DropDownElement text={"My calendar"} icon={calender} />
            <DropDownElement text={"Vacations"} icon={beach} />
            <DropDownElement text={"Corporate CV"} icon={profile} />
            <DropDownElement text={"Perfomance review"} icon={rocket} />
          </DropDown>
        </div>

        <SearchInput />
      </div>

      <Notif
      dropDownNotif={dropDownNotif}
      setDropDownNotif={setDropDownNotif}
      />
  

    </div>
  );
}
