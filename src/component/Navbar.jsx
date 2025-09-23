import { FiAlignRight } from "react-icons/fi";
import SearchInput from "./UI/SearchInput";
import DropDown from "./DropDown";
import DropDownElement from "./DropDownElement";
import { Svg } from "../utils/svg/main";
import Notif from "../pages/myDetail/Notif";
import { useEffect, useRef, useState } from "react";

import SidebarMenu from "./SidebarMenu";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const svg = new Svg();

export default function Navbar({
  dropDown,
  setDropDown,
  dropDownNotif,
  setDropDownNotif,
  menu,
  setMenu,
}) {
  // const useInfo = storage.Get("userInfo");

  const sideBar = useRef();
  useEffect(() => {
    gsap.to(sideBar.current, {
      x: menu ? 210 : 0,
    });
  }, [menu]);




  const [query, setQuery] = useState("");
  console.log("query is :", query);


  const SearchQuery = {
    mydetail: '/My-Detail',
    Plannedvacations: '/Vacations',
    Actualvacations: '/Vacations',
    login: '/login',
    CompanyFacts: '/',
    Statistics: '/',
    AssignedRisks: '/',
    dashboard: '/'
  };

  const navigate = useNavigate();

  const filteredKeys = query.trim() === "" ? []
    : Object.keys(SearchQuery).filter(key =>
      key.toLowerCase().includes(query.toLowerCase())
    );


  return (
    <div className="flex justify-between items-center bg-white rounded-b-lg h-[64px]">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center rounded-b-lg h-[64px]">
          {" "}
          <div className="flex justify-between items-center gap-2 px-6 w-[250px] tablet:w-[272px] cursor-pointer row">
            <img
              src="/images/user-avatar-2.jpg"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <div className="w-[134px] text-[15px] tablet:text-lg">
              <h2>username</h2>
            </div>
            {dropDown ? (
              <div onClick={() => setDropDown((value) => (value = !value))}>
                {svg.Up("w-6 h-6 fill-svgBlue")}
              </div>
            ) : (
              <div onClick={() => setDropDown((value) => (value = !value))}>
                {svg.Down("w-6 h-6 fill-svgGray")}
              </div>
            )}
          </div>
          <DropDown
            width="240px"
            className="top-[70px] left-[34px]"
            open={dropDown}>
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


        <div className="relative w-[250px]">
          <SearchInput query={query} setQuery={setQuery} />

          {filteredKeys.length > 0 && (
            <ul className="absolute top-full mt-1 w-full bg-white shadow p-3 rounded-md z-50">
              {filteredKeys.map((key) => (
                <li
                  key={key}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-blue-600 rounded"
                  onClick={() => {
                    navigate(SearchQuery[key]);
                    setQuery("");
                  }}
                >
                  {key}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
      <div
        className="tablet:hidden px-5"
        onClick={() => {
          setMenu((value) => !value);
        }}
      >
        <FiAlignRight className="text-[24px]" />
        <div
          ref={sideBar}
          className="top-[80px] left-[-200px] z-50 absolute w-[200px]"
        >
          <SidebarMenu />
        </div>
      </div>
      <div className="hidden tablet:block">
        <Notif
          dropDownNotif={dropDownNotif}
          setDropDownNotif={setDropDownNotif}
        />
      </div>
    </div>
  );
}
