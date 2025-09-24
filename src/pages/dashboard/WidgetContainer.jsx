import React from "react";

export default function WidgetContainer({ children }) {
  return (
    <div className="bg-white px-2 py-4 rounded-[14px] w-[380px] desktop:w-[472px] h-[450px] tablet:h-[472px]">
      {children}
    </div>
  );
}
