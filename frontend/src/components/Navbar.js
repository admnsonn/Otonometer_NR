import React from 'react'
import logo from "../assets/logonav.svg"
import {NavLink, useNavigate} from 'react-router-dom'

function Navbar() {
    const navgate = useNavigate()
    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight: isActive? 'bold' : 'regular'
        }
    }
  return (
    <nav className='flex justify-between items-center px-[135px] w-full h-[117px] mb-[30px]'>
        <div>
            <button onClick={() => navgate('/')}>
                <img src={logo} alt="loading" className='w-full h-full object-contain' />
            </button>
        </div>
        <ul>
            <li className='flex gap-x-[25px] text-secondary'>
                {/* {navLink.map((item)=>{
                    return <Link to={item.id} key={item.id} className='text-secondary'>{item.name}</Link>;
                })} */}
                <NavLink style={navLinkStyles} to={'/'}>
                    Dashboard
                </NavLink>
                <NavLink style={navLinkStyles} to={'/Jelajah'}>
                    Jelajah
                </NavLink>
                <NavLink style={navLinkStyles} to={'/Utak'}>
                    Utak
                </NavLink>
                <NavLink style={navLinkStyles} to={'/Berkaca'}>
                    Berkaca
                </NavLink>
                <p>
                    Lensa
                </p>
            </li>
        </ul>
        {/* login-regist button */}
        <div className='flex gap-[10px]'>
            {/* Login */}
            <button 
            onClick={() => navgate('/Login')}
            className='
            flex 
            bg-secondary 
            hover:bg-third 
            w-[105px] h-[39px] 
            rounded-[10px] 
            text-white 
            items-center justify-center'>
                Masuk</button>
            {/* Register */}
            <button 
            onClick={() => navgate('/Register')}
            className='
            flex 
            bg-none 
            hover:bg-third 
            hover:border-third
            w-[105px] h-[39px] 
            rounded-[10px]  
            text-secondary 
            items-center 
            hover:text-white border-2 
            border-secondary justify-center'>
                Register</button>
        </div>
        
    </nav>
  );
}

export default Navbar