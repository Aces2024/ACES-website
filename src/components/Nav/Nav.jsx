import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const NavBarItem = ({ title, classprops }) => (
   
    <Link to={'/'+ title.label }>
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title.name}</li>
  </Link>
);

const Nav = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const data =[
    {
    name:"Home",
    label:""
    },
    {
        name:"About",
        label:'about'
    },
    {
        name:"Contact",
        label:"contact"
    },
    {
        name:"Events",
        label:'event'
    }

]

  return (
    <nav className="w-full flex md:justify-between px-10 fixed z-40 bg-[#151414] justify-between items-center p-2">
      <div className="md:flex-[0.5] flex text-3xl text-white font-bold  justify-center items-center">
        <img src='/Logo.svg' alt="logo" className="w-16 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {data.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <Link to="/event">
        <li className="hover:bg-[#23CBA3] py-2 px-7 mx-4  rounded cursor-pointer bg-teal-500">
          Participate
        </li>
        </Link>
      </ul>
      <div className="flex relative">
      <Link to="/event">
        <button className="hover:bg-[#23CBA3] bg-teal-500 md:hidden py-2 px-4 mx-4 text-white  rounded cursor-pointer">
            Participate
        </button>
        </Link>
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
             
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[40vw] h-screen bg-zinc-600 shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {data.map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;