import React from "react";

export default function Button({
  click,
  width,
  color,
  children,
  bgColor,
  height,
}) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: color,
        width: width,
        height: height,
      }}
      className={` border flex items-center justify-center rounded-[30px]`}
    >
      {children}
    </div>
  );
}
