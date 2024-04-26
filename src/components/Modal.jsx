import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, open, onClose }) => {
  return (
    <div
      className={` fixed justify-center item  inset-0 transition-colors ${
        open ? " visible  bg-black" : " invisible"
      } `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` bg-white rounded-xl shadow p-6 fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}`}
      >
        <button
          onClick={onClose}
          className=" absolute top-2 right-2 p-1 rounded-lg text-[grey] bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
