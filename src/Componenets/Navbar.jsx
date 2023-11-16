import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { useState } from "react";

import logo from "./images/logo.png";

const NavbarItem = ({ title, classprop }) => {
  return <li className={`mx-4 cursor-pointer ${classprop}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full h-[5rem]  flex md:justify-left lg:justify-left sm:justify-left items-left p-4 bg-gradient-to-r from-[#040429] via-[#1b012e] to-[#0b0212] ...   hover:bg-gradient-to-l">
      <div className="md:flex-[0.5] flex-initial justify-left items-left ">
        {/* <img src={logo} alt="logo" className="w-10"></img> */}
        <div className="w-20 h-20 mt-3 rounded-full bg-yellow-500 border-2 border-white">
          <div className="  flex w-20 h-10 bg-gray-300 border-2 mt-2 justify-between items-start border-white rounded-full ">
            <div className="  flex  inset-y-0 right-0 w-12 h-12 border-2 bg-blue-400 border-white rounded-full items-center justify-between">
              <SiEthereum fontSize={25} color="#fff" className="ml-1.5" />
            </div>
            <div className="  flex  inset-y-0 right-0 w-12 h-12 border-2 bg-blue-400 border-white rounded-full items-center">
              <SiEthereum fontSize={25} color="#fff" className="ml-1.5" />
            </div>
          </div>
        </div>
      </div>
      {/* <div> */}
      <ul className="text-white md:flex hidden list-none justify-between flex-row items-center flex-initial ">
        {["MARKET", "Exchange", "Tutorials", "WALLET"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-blue-500 py-2 px-7 p-3 mx-4 flex justify-right rounded-full hover:bg-red-600  ">
          LOGIN
        </li>
      </ul>
      {/* </div> */}
      <div className="flex  relative  ">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white  md:hidden  cursor-pointer "
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-black  md:hidden  cursor-pointer "
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in "
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["MARKET", "Exchange", "Tutorials", "WALLET"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
