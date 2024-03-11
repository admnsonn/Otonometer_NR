import React from 'react'

import LogoHeader from './LogoHeader';
import ButtonAuth from './ButtonAuth';
import Navbar from './Navbar';

function Header(){
  return (
    <header className='flex w-full items-center justify-center sticky bg-none flex-wrap my-[30px] sm:gap-x-[120px] md:gap-x-[120px] xl:gap-x-[210px]'>
        <LogoHeader/>
        <Navbar/>
        <ButtonAuth/>
    </header>
  )
}

export default Header;