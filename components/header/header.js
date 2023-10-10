"use client";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
export default function header({ menuActive, setMenuActive }) {
  return (
    <div className="fixed flex w-full justify-end p-10 box-border z-20 top-0">
      {!menuActive && (
        <button onClick={() => setMenuActive(!menuActive)}>
          <FiMenu className="h-12 w-12" />
        </button>
      )}
      {menuActive && (
        <button onClick={() => setMenuActive(!menuActive)}>
          <AiOutlineClose className="h-12 w-12" />
        </button>
      )}
    </div>
  );
}
