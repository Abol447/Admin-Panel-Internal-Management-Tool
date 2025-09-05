import { lazy, Suspense } from "react";

const IoNotifications = lazy(() =>
  import("react-icons/io5").then((mod) => ({ default: mod.IoNotifications }))
);
import SearchInput from "./UI/SearchInput";
const FaCaretDown = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaCaretDown }))
);

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white rounded-b-lg h-[64px]">
      <div className="flex items-center gap-4">
        <div className="flex justify-between items-center px-6 w-[272px] cursor-pointer row">
          <img
            src="/images/user-avatar-2.jpg"
            alt=""
            className="rounded-full w-10 h-10"
          />
          <div className="text-lg">
            <h2>username</h2>
          </div>
          <Suspense>
            <FaCaretDown className="w-5 h-5 text-gray-500" />
          </Suspense>
        </div>

        <SearchInput />
      </div>

      <button className="relative mx-5 text-blue-500 text-2xl">
        <span className="block top-0.5 right-0.5 absolute bg-red-500 rounded-full ring-1 ring-white w-2 h-2"></span>
        <Suspense>
          <IoNotifications />
        </Suspense>
      </button>
    </div>
  );
}
