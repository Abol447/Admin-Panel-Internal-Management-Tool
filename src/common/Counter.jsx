import React from "react";

export default function Counter({ children }) {
  return (
    <div className="flex justify-between items-center h-full">{children}</div>
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
