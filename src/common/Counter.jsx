import React from "react";

export default function Counter({ children, width, height }) {
  return (
    <div
      style={{ width: width, height: height }}
      className="flex justify-between items-center"
    >
      {children}
    </div>
  );
}

function Body({ children }) {
  return <div className="h-full">{children}</div>;
}
function decBtn({ icon, decFn }) {
  return (
    <div
      onClick={() => decFn((pre) => pre - 1)}
      className="flex justify-center items-center"
    >
      {icon}
    </div>
  );
}
function incBtn({ icon, incFn }) {
  return (
    <div
      onClick={() => incFn((pre) => pre + 1)}
      className="flex justify-center items-center"
    >
      {icon}
    </div>
  );
}

Counter.incBtn = incBtn;
Counter.decBtn = decBtn;
Counter.body = Body;
