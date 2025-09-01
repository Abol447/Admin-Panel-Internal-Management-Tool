
import { IoNotifications } from "react-icons/io5";
import SearchInput from "./UI/SearchInput";
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between rounded-b-lg h-[64px] items-center">

      <div className="flex justify-between " >


        <div className="flex items-center mx-10">
          <div className="row gap-2 items-center cursor-pointer flex">
            <img src="/images/user-avatar-2.jpg" alt="" className="w-10 h-10 rounded-full" />
            <div className="text-lg">
              <h2>username</h2>
            </div>
            <FaCaretDown className="flex-1 h-5 m-auto text-gray-500 w-20 mt-3" />
          </div>
        </div>


        <SearchInput />

      </div>



      <button className="relative mx-5 text-blue-500 text-2xl" >
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
        <IoNotifications />
      </button>

    </div>
  )
}
