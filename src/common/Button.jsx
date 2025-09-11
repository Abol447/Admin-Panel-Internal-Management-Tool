import React from "react";

export default function Button({
  click,
  width,
  color,
  children,
  bgColor,
  height,
  borderWidth,
}) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: color,
        width: width,
        height: height,
        borderWidth: borderWidth,
      }}
      className={`  flex items-center justify-center rounded-[30px]`}
    >
      {children}
    </div>
  );
}
