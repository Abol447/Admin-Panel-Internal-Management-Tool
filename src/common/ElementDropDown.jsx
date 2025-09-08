import React, { createContext, useContext, useState } from "react";

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
      <img
        onClick={() => {
          setOpen((value) => (value = !value));
        }}
        src={open ? closeIcon : openIcon}
      />
    </div>
  );
}

export function DropDownBody({ children }) {
  const { open } = useContext(dropDownContext);
  return <>{open ? children : null}</>;
}

ElementDropDown.header = DropDownHeader;
ElementDropDown.body = DropDownBody;
