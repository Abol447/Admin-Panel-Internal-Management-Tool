import { lazy, useState } from "react";
import arrow_drop_down from "../asset/pic/arrow_drop_down.svg";
import up_drop_down from "../asset/pic/up_drop_down.svg";
import { IoNotifications } from "react-icons/io5";
import SearchInput from "./UI/SearchInput";
import DropDown from "./DropDown";
import DropDownElement from "./DropDownElement";
import { Svg } from "../utils/svg/main";
import Notif from "../pages/myDetail/Notif";

const FaCaretDown = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaCaretDown }))
);

const svg = new Svg();
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
          <DropDown className="top-[70px] left-[34px]" open={dropDown}>
            <DropDownElement
              text={"My details"}
              setOPen={setDropDown}
              icon={svg.Profile("fill-svgGray  w-6")}
              path={"my-detail"}
            />
            <DropDownElement
              text={"My calendar"}
              icon={svg.Calender("w-6 h-6 fill-svgGray")}
            />
            <DropDownElement
              text={"Vacations"}
              icon={svg.Umbrella("w-6 h-6 fill-svgGray")}
              setOPen={setDropDown}
              path={"vacations"}
            />
            <DropDownElement
              text={"Corporate CV"}
              icon={svg.Document(" fill-svgGray", "24px")}
            />
            <DropDownElement
              text={"Perfomance review"}
              icon={svg.Jet("w-6 h-6 fill-svgGray")}
            />
          </DropDown>
        </div>

        <SearchInput />
      </div>

      <button className="relative mx-5 text-blue-500 text-2xl">
        <span className="block top-0.5 right-0.5 absolute bg-red-500 rounded-full ring-1 ring-white w-2 h-2"></span>
        {/* <Suspense> */}
        <IoNotifications />
        {/* </Suspense> */}
      </button>

      <Notif
        dropDownNotif={dropDownNotif}
        setDropDownNotif={setDropDownNotif}
      />
    </div>
  );
}
