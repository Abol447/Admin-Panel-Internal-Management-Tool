import React from 'react'
import { BiSearch } from 'react-icons/bi'

function SearchInput() {
    return (
        <div className="relative flex ">

            <form>

                <BiSearch className="absolute w-5 h-5 top-2.5 left-2.5 text-blue-500" />

                <input
                    className="w-full bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 rounded-md pl-10 pr-3 py-2 "
                    placeholder="Queck Search"
                />
            </form>

        </div>
    )
}

export default SearchInput