import React from 'react'
import { navLink } from '../data/datanya';
import logo from "../assets/logonav.svg"
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-[135px] py-[39px] w-full fixed top-0'>
        <div>
            <img src={logo} alt="loading" className='w-full h-full object-contain' />
        </div>
        <ul>
            <li className='flex gap-x-[25px]'>
                {navLink.map((item)=>{
                    return <Link to={item.id} key={item.id} className='text-secondary'>{item.name}</Link>;
                })}
            </li>
        </ul>
        {/* login-regist button */}
        <div className='flex justify-center items-center text-center'>

            <div className='bg-third hover:bg-secondary w-[105px] h-[39px] rounded-[10px]  text-white'>
                <button className='items-center'>Masuk</button>
            </div>
            
            <div className='border-2 border-secondary bg-none hover:bg-secondary w-[105px] h-[39px] rounded-[10px] items-center text-secondary hover:text-white'>
                <button className='items-center'>Register</button>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar