import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchInput() {
  return (
    <div className="flex justify-center items-center gap-2">
      <BiSearch className="w-5 h-5 text-blue-500" />

      <form>
        <input
          className="bg-transparent py-2 pr-3 pl-10 border-none focus:border-none rounded-md focus:outline-none focus:ring-0 w-full"
          placeholder="Queck Search"
        />
      </form>
    </div>
  );
}

export default SearchInput;
