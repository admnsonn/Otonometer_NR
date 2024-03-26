import React, { useState } from "react";
import logo from "../../assets/logonav.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "regular",
    };
  };
  return (
    <>
      <NavLink style={navLinkStyles} to={"/"} className={"text-secondary"}>
        Dashboard
      </NavLink>
      <NavLink
        style={navLinkStyles}
        to={"/Jelajah"}
        className={"text-secondary"}
      >
        Jelajah
      </NavLink>
      <NavLink
        style={navLinkStyles}
        to={"/Utak-Atik"}
        className={"text-secondary"}
      >
        Utak-Atik
      </NavLink>
      <NavLink
        style={navLinkStyles}
        to={"/Berkaca"}
        className={"text-secondary"}
      >
        Berkaca
      </NavLink>
      <p>Lensa</p>
    </>
  );
};

const Navbar = () => {
  const navgate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex w-full items-center justify-center sticky bg-none my-[30px] xl:gap-x-[275px] flex-wrap md:gap-x-[20px]'>
      <div className="logo">
        <NavLink to={"/"} onClick={() => navgate("/")}>
          <img src={logo} alt="loading" className="w-full h-full" />
        </NavLink>
      </div>

      <>
        <nav className="flex items-center justify-center">
          <div className="hidden sm:hidden md:hidden xl:flex gap-x-[25px] text-secondary">
            <NavLinks />
          </div>

          <div className="xl:hidden flex justify-end items-center">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
      </>

      {isOpen && (
        <div className="flex flex-col justify-center items-end basis-full mt-[20px] mr-[100px] gap-y-[10px] xl:hidden p-auto">
          <NavLinks />
        </div>
      )}

      <div className="hidden gap-[10px] sm:hidden md:hidden xl:flex">
        {/* Login */}
        <NavLink
          to={"/Login"}
          className="
            flex 
            bg-secondary 
            hover:bg-third 
            hover:text-white
            w-[105px] h-[39px] 
            rounded-[10px] 
            text-white 
            items-center justify-center"
        >
          Masuk
        </NavLink>
        {/* Register */}
        <NavLink
          to={"/Register"}
          className="
            flex 
            bg-none 
            hover:bg-third 
            hover:border-third
            hover:text-white
            w-[105px] h-[39px] 
            rounded-[10px]  
            text-secondary 
            items-center 
            border-2 
            border-secondary justify-center"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
