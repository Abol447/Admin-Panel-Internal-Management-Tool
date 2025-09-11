import React, { createContext, useContext, useState } from "react";
import { Svg } from "../utils/svg/main";

const svgCalss = new Svg();
export const dropDownContext = createContext();
export default function ElementDropDown({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <dropDownContext.Provider value={{ open: open, setOpen: setOpen }}>
      <div className="DropDown--style">{children}</div>
    </dropDownContext.Provider>
  );
}

export function DropDownHeader({ openIcon, closeIcon, children }) {
  const { setOpen, open } = useContext(dropDownContext);
  return (
    <div className="DropDownHeader--style">
      {children}
      <div
        onClick={() => {
          setOpen((value) => (value = !value));
        }}
      >
        {open
          ? svgCalss.UpArrow("fill-svgBlue w-6 h-6")
          : svgCalss.DownArrow("fill-svgBlue w-6 h-6")}
      </div>
    </div>
  );
}

export function DropDownBody({ children }) {
  const { open } = useContext(dropDownContext);
  return <>{open ? children : null}</>;
}

ElementDropDown.header = DropDownHeader;
ElementDropDown.body = DropDownBody;
