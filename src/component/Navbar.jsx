import { IoNotifications } from "react-icons/io5";
import SearchInput from "./UI/SearchInput";
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <div className="bg-white flex justify-between rounded-b-lg h-[64px] items-center">

      <div className="flex justify-between " >


        <div className="flex items-center mx-10">
          <div className="gap-2 items-center cursor-pointer flex">
            <img src="/images/user-avatar-2.jpg" alt="" className="w-10 h-10 rounded-full" />
            <div className="text-lg">
              <h2>username</h2>
            </div>
            <FaCaretDown className="h-5 m-auto text-gray-500 w-20 mt-3" />
          </div>
        </div>


        <SearchInput
        placeholder='Queck Search'
        />

      </div>



      <button className="relative mx-5 text-blue-500 text-2xl" >
        <span className="absolute top-0.5 right-0.5 block h-2 w-2 rounded-full ring-1 ring-white bg-red-500"></span>
=======
    <div className="flex justify-between items-center bg-white rounded-b-lg h-[64px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <div className="flex justify-between items-center px-6 w-[272px] cursor-pointer row">
            <img
              src="/images/user-avatar-2.jpg"
              alt=""
              className="rounded-full w-10 h-10"
            />
            <div className="text-lg">
              <h2>username</h2>
            </div>
            <FaCaretDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        <SearchInput />
      </div>

      <button className="relative mx-5 text-blue-500 text-2xl">
        <span className="block top-0 right-0 absolute bg-red-500 rounded-full ring-2 ring-white w-2 h-2"></span>
>>>>>>> 1582f003bddea5d734068b275e0f409fd80cbbbc
        <IoNotifications />
      </button>
    </div>
  );
}
