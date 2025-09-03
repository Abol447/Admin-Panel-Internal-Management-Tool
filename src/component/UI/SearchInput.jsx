import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchInput() {
    return (
        <from className="flex justify-center items-center gap-2">
            <BiSearch className="w-5 h-5 text-blue-500" />

            <input
                className="bg-transparent pb-1 border-none focus:border-none rounded-md focus:outline-none focus:ring-0 w-full h-[20px]"
                placeholder="Queck Search"
            />
        </from>
    )

}

export default SearchInput;
