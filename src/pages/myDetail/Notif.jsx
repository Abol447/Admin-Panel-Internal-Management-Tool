import { lazy, Suspense } from 'react'
import DropDown from '../../component/DropDown';

// import profile from "../asset/pic/baseline-account_circle-24px.png";


function Notif({ dropDownNotif, setDropDownNotif }) {
    const IoNotifications = lazy(() =>
        import("react-icons/io5").then((mod) => ({ default: mod.IoNotifications }))
    );

    const dropdownHandler = () => {
        setDropDownNotif(prev => !prev);
        console.log(dropDownNotif);

    }


    return (
        <>
            <button
                onClick={dropdownHandler}
                className="relative mx-5 text-blue-500 text-2xl">
                <span className="block top-0.5 right-0.5 absolute bg-red-500 rounded-full ring-1 ring-white w-2 h-2"></span>
                <Suspense fallback={<div> Loading . . . </div>} >
                    <IoNotifications />
                </Suspense>
            </button>




            <DropDown
            open={dropDownNotif}
            className="right-[34px] top-[70px]"
            >
                this is notif modal
            </DropDown>

        </>
    )
}

export default Notif