import React, { lazy, Suspense } from "react";

const BiSearch = lazy(() =>
  import("react-icons/bi").then((mod) => ({ default: mod.BiSearch }))
);
function SearchInput() {
  return (
    <from className="flex justify-center items-center gap-2">
      <Suspense>
        <BiSearch className="w-5 h-5 text-blue-500" />
      </Suspense>

      <input
        className="bg-transparent pb-1 border-none focus:border-none rounded-md focus:outline-none focus:ring-0 w-full h-[20px]"
        placeholder="Queck Search"
      />
    </from>
  );
}

export default SearchInput;
