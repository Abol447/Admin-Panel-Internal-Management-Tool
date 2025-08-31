import React, { createContext, useContext, useState } from "react";
import { GoDotFill } from "react-icons/go";
const paginationContext = createContext();
export default function Pagination({ children }) {
  const [index, setIndex] = useState(0);
  return (
    <paginationContext.Provider value={{ index: index, setIndex: setIndex }}>
      <div className="flex justify-between items-center h-full">{children}</div>
    </paginationContext.Provider>
  );
}
function LeftBtn({ icon }) {
  const { setIndex } = useContext(paginationContext);
  return (
    <div
      className="flex justify-center items-center"
      onClick={() => {
        setIndex((pre) => (pre = pre - 1));
      }}
    >
      {icon}
    </div>
  );
}
function RightBtn({ icon }) {
  const { setIndex } = useContext(paginationContext);
  return (
    <div
      className="flex justify-center items-center"
      onClick={() => {
        setIndex((pre) => (pre = pre + 1));
      }}
    >
      {icon}
    </div>
  );
}
function Content({ children }) {
  return (
    <div className="flex flex-col justify-between items-center gap-y-pagination h-full">
      {children}
    </div>
  );
}
function PaginationDots({ lenght }) {
  const dots = Array.from({ length: lenght });
  const { index } = useContext(paginationContext);
  return (
    <div className="flex justify-center items-center">
      {dots.map((_, i) => (
        <GoDotFill
          className={`w-paginationDots ${
            index === i ? "fill-dotBg" : "fill-dotBgunactive"
          }`}
        />
      ))}
    </div>
  );
}

Pagination.leftBtn = LeftBtn;
Pagination.rightBtn = RightBtn;
Pagination.content = Content;
Pagination.dot = PaginationDots;
