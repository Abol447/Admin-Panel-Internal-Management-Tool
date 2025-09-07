import React, { useEffect, useRef } from "react";
import gsap from "gsap";
export default function DropDown({ children, open }) {
  const dropDown = useRef();
  useEffect(() => {
    gsap.fromTo(
      dropDown.current,
      {
        opacity: open ? 0 : 1,
      },
      {
        opacity: open ? 1 : 0,
      }
    );
  }, [open]);
  return (
    <div
      ref={dropDown}
      className="top-[70px] left-[34px] z-[100] absolute bg-white opacity-0 px-[32px] py-[10px] rounded-[14px] w-[220px] h-[220px]"
    >
      {children}
    </div>
  );
}
