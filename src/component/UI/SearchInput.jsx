import React from "react";
import { Svg } from "../../utils/svg/main";

const svg = new Svg();
function SearchInput({ query, setQuery }) {
  return (
    <from className="flex justify-center items-center gap-2">
      {svg.Search("w-[20px] h-[20px] fill-svgBlue")}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent pb-1 border-none focus:border-none rounded-md focus:outline-none focus:ring-0 w-full h-[20px]"
        placeholder="Queck Search"
      />
    </from>
  );
}

export default SearchInput;
