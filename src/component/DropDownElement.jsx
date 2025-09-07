import React from "react";

export default function DropDownElement({ icon, text }) {
  return (
    <div className="flex items-center gap-[18px] h-[40px]">
      <img className="w-6 h-6" src={icon} />
      <span className="min-w-[143px] font-medium text-[14px] text-nowrap">
        {text}
      </span>
    </div>
  );
}
