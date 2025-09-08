import React from "react";
import { useNavigate } from "react-router-dom";

export default function DropDownElement({ icon, text, path, setOPen }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center gap-[18px] h-[40px]"
      onClick={() => {
        navigate(path);
        setOPen(() => false);
      }}
    >
      <img className="w-6 h-6" src={icon} />
      <span className="min-w-[143px] font-medium text-[14px] text-nowrap">
        {text}
      </span>
    </div>
  );
}
