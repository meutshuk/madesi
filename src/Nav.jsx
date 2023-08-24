import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="border-black border-b-2 flex justify-center items-center py-5 fixed w-full bg-slate-100 px-6 z-10">
        <div className="container flex justify-between items-center">
          <a href="/" className="font-bold text-4xl">
            MNF
          </a>

          <button
            className="md:hidden px-2 py-1 border bg-gray-400 text-white rounded z-[100] absolute right-5 top-5
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          <ul className="hidden md:flex gap-7">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 h-screen"
        >
          <div className="flex flex-col justify-center h-full space-y-4 p-5">
            <ul className="flex flex-col space-y-4 bg-white p-5 rounded mx-5">
              <li>
                <a href="/" className="block px-5 py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-5 py-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block px-5 py-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
