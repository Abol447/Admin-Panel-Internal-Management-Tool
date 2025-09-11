import React from "react";
import { Svg } from "../../utils/svg/main";

export default function EditsIcon() {
  const svg = new Svg();
  return (
    <div className="flex items-center gap-6">
      {svg.Pen("w-[18px] h-[18px] fill-svgBlue")}
      {svg.Garbage("w-[18px] h-[18px] fill-svgBlue")}
    </div>
  );
}
