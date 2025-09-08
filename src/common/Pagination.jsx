import React, {
  createContext,
  lazy,
  Suspense,
  useContext,
  useState,
} from "react";

const GoDotFill = lazy(() =>
  import("react-icons/go").then((mod) => ({ default: mod.GoDotFill }))
);
export const paginationContext = createContext(0);
export default function Pagination({ children, lenght }) {
  const [index, setIndex] = useState(0);
  return (
    <paginationContext.Provider
      value={{ index: index, setIndex: setIndex, lenght: lenght }}
    >
      <div className="flex justify-between items-center h-full">{children}</div>
    </paginationContext.Provider>
  );
}
function LeftBtn({ icon }) {
  const { setIndex, index } = useContext(paginationContext);
  return (
    <div
      className="flex justify-center items-center"
      onClick={() => {
        index > 0 ? setIndex((pre) => (pre = pre - 1)) : null;
      }}
    >
      {icon}
    </div>
  );
}
function RightBtn({ icon }) {
  const { setIndex, lenght, index } = useContext(paginationContext);
  return (
    <div
      className="flex justify-center items-center"
      onClick={() => {
        index < lenght - 1 ? setIndex((pre) => (pre = pre + 1)) : null;
        console.log(1);
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
        <Suspense>
          <GoDotFill
            className={`w-paginationDots ${
              index === i ? "fill-dotBg" : "fill-dotBgunactive"
            }`}
          />
        </Suspense>
      ))}
    </div>
  );
}

Pagination.leftBtn = LeftBtn;
Pagination.rightBtn = RightBtn;
Pagination.content = Content;
Pagination.dot = PaginationDots;
