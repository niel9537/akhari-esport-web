import React, { useState } from "react";
import Button from "./Button";

const Nav = () => {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Profil", link: "/" },
    { name: "Tentang", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex md:items-center justify-between bg-indigo-950 py-4 md:px-10 px-7">
        <div className="flex items-center justify-between">
          <a className="flex items-center" href="#">
            <img className="h-10 mr-3" src="" alt="logo"></img>
            <span className="text-xl text-white font-sans font-bold">
              Akhari
            </span>
          </a>
        </div>
        {/* <div
          className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins]
         text-gray-800"
        >
          <span className="text-3x1 text-indigo-950 mr-1 pt-2">
            <ion-icon name="game-controller-outline"></ion-icon>
          </span>
          Akhari Esport Web Store
        </div> */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-950 md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-0 opacity-100" : "top-[-490px]"
        } md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-50 hover:text-gray-400 duration-500 font-sans"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
