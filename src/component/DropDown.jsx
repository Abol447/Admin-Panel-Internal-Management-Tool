import React, { useEffect, useRef } from "react";
import gsap from "gsap";
export default function DropDown({ children, open }) {
  const dropDown = useRef();
  useEffect(() => {
    if (open) {
      gsap.to(dropDown.current, {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(dropDown.current, {
        opacity: 0,
        y: -20,
        display: "none",
        duration: 0.2,
        ease: "power2.in",
      });
    }
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
