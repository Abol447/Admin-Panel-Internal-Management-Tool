import gsap from "gsap";
import React, { createContext, useContext, useEffect, useRef } from "react";

export const modalContext = createContext();
export default function Modal({ children, setOpen, open }) {
  const modal = useRef();
  useEffect(() => {
    gsap.to(modal.current, {
      opacity: open ? 1 : 0,
    });
  }, [open]);
  return (
    <modalContext.Provider value={{ setOpen: setOpen }}>
      <div
        ref={modal}
        className="top-[10%] left-[50%] z-10 absolute opacity-0 translate-x-[-50%] modal--container"
      >
        {children}
      </div>
    </modalContext.Provider>
  );
}

function ModalIcon({ icon }) {
  const { setOpen } = useContext(modalContext);
  return (
    <div
      onClick={() => setOpen((value) => !value)}
      className="flex justify-end items-center w-full"
    >
      {icon}
    </div>
  );
}

function ModalBody({ children }) {
  return <div>{children}</div>;
}

Modal.icon = ModalIcon;
Modal.body = ModalBody;
