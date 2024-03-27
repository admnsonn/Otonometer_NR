import React, { useState, useEffect } from "react";
import logo from "../../assets/logonav.svg";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import iconuser from "../../assets/icons/iconuser.png";
import PropTypes from "prop-types";

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

const Circleakun = ({ src, alt, size }) => {
  const [isDrop, setIsDrop] = useState(false);

  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };

  const containerStyle = {
    position: "relative",
    display: "inline-block",
  };

  const imageStyle = {
    width: size,
    height: size,
    borderRadius: "80%",
    border: "8px solid #FFFFFF",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.60)",
  };

  return (
    <div style={containerStyle}>
      <button>
        <img src={src} alt={alt} style={imageStyle} onClick={toggleDropdown} />
      </button>
      {isDrop && (
        <div class="absolute justify-center ml-[-55px] bg-blue-300 bg-opacity-50 rounded-xl z-50 mt-2 pl-5 pr-5 pt-4 pb-4 shadow-md min-w-[150px] text-center leading-[1.5] text-base text-white flex items-center">
          <ul>
            <NavLink to={"/Profile"}>
              <li className="w-[120px] bg-secondary mb-2 rounded pt-1 pb-1 hover:bg-third hover:text-white">
                Profile
              </li>
            </NavLink>
            <NavLink onClick={handleLogout}>
              <li className="w-[120px] bg-[#CD3838] mb-2 rounded pt-1 pb-1 hover:bg-third hover:text-white">
                Keluar Akun
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

Circleakun.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

const handleLogout = async () => {
  sessionStorage.setItem("token", "");
  window.location.href = "/Login";
};

const Navbar = () => {
  const navgate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("token") != "" ? true : false
  );

  console.log(sessionStorage.getItem("token") != null ? true : false);
  console.log(sessionStorage.getItem("token"));

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [fotoprofile, setFotoProfile] = useState([]);

  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/profile")
      .then((response) => response.json())
      .then((data) => {
        setFotoProfile(data.data.image);
        console.log(fotoprofile)
        console.log("🚀 ~ Navbar ~ fotoprofile:", fotoprofile)
      });
  }, []);

  return (
    <div className="flex w-full items-center justify-center sticky bg-none my-[30px] xl:gap-x-[275px] flex-wrap md:gap-x-[20px]">
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
          <Circleakun src={fotoprofile} alt="User Profile" size="50px" />
        </div>
      )}

      {isLoggedIn ? (
        <div>
          {/* {fotoprofile?.map((profil) => ( */}
          {/* <Circleakun key={profil?.image} src={profil?.image} alt="User Profile" size="50px" /> */}
          <Circleakun src={iconuser} alt="User Profile" size="50px" />
          {/* ))} */}
        </div>
      ) : (
        <div className="hidden gap-[10px] sm:hidden md:hidden xl:flex">
          {/* Login */}
          <>
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
          </>
        </div>
      )}
    </div>
  );
};

export default Navbar;
