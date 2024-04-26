import React, { useState } from "react";
import Modal from "./components/Modal";
import { FaTrashAlt } from "react-icons/fa";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="">
        <button
          className=" flex items-center gap-3 border border-red-400 bg-red-500 rounded-lg hover:bg-white hover:text-red-500 py-[10px] px-[16px] text-[#fff]"
          onClick={() => setIsOpen(true)}
        >
          <FaTrashAlt /> Delate
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className=" text-center w-56">
            <FaTrashAlt size={56} className="mx-auto text-red-500" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                Confirm Delate
              </h3>
              <p className="text-sm text-gray-600">
                Are you sure you want to delate this item?
              </p>
            </div>
            <div className="flex justify-around">
              <button className="bg-red-600 border border-red-600 hover:text-red-600 hover:bg-white   text-white py-2 px-3  font-semibold rounded-lg">
                Delate
              </button>
              <button
                className="border border-gray-500 rounded-lg py-2 px-3 text-gray-500 hover:text-red-500 hover:border-red-500  "
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default App;
