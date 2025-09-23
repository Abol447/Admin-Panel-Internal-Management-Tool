import DropDown from "../../component/DropDown";
import { IoNotifications } from "react-icons/io5";
import MessageNotif from "../../component/UI/MessageNotif";
// import profile from "../asset/pic/baseline-account_circle-24px.png";

function Notif({ dropDownNotif, setDropDownNotif }) {
  const dropdownHandler = () => {
    setDropDownNotif((prev) => (prev = !prev));
    console.log(dropDownNotif);
  };

  return (
    <>
      <button
        onClick={dropdownHandler}
        className="relative mx-5 text-blue-500 text-2xl"
      >
        <span className="block top-0.5 right-0.5 absolute bg-red-500 rounded-full ring-1 ring-white w-2 h-2"></span>

        <IoNotifications />
      </button>

      <DropDown
        width="300px"
        open={dropDownNotif}
        className="top-[70px] right-[34px]">
        <MessageNotif />
      </DropDown>
    </>
  );
}

export default Notif;
