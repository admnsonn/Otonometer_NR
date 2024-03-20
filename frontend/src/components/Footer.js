import React from 'react'
import logo from "../assets/logonav.svg"
import konstitusimeter from "../assets/LogoKonstitusimeterFULL.svg"
import madanimeter from "../assets/LogoMadanimeterFULL.svg"
import logofb from "../assets/fb.svg"
import logoyb from "../assets/yutub.svg"
import logotiktok from "../assets/tiktok.svg"
import logoig from "../assets/insta.svg"
import logotwitter from "../assets/twitter.svg"

function Footer() {
  return (
    <div className='grid grid-row-3 w-full md:h-[250px] h-[200px] bg-secondary md:px-[135px] px-[20px] md:pt-[20px] pt-[10px]'>
        <div className='flex justify-between w-full'>
            <div>
                <img src={logo} alt="loading" className='h-[20px] md:h-[30px] md:object-contain' />
            </div>
            <div>
                <p className='text-white font-bold text-right md:text-[16px] text-[10px]'>Aplikasi Neraca Ruang Lainnya</p>
                    <div className='flex gap-2 mt-[7px]'>
                        <img src={madanimeter} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                        <img src={konstitusimeter} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                    </div>
            </div>
        </div>

        <div className='flex justify-between text-white'>
            <div className='md:text-[16px] text-[10px]'>
                <p className='font-bold'>About</p>
                <p>Privacy and Policy</p>
                <p>Terms of Service</p>
            </div>
            <div>
                <p className='font-bold text-right md:text-[16px] text-[10px]'>Follow Us!</p>
                <div className='flex gap-2 mt-[7px]'>
                    <img src={logofb} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                    <img src={logoig} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                    <img src={logotwitter} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                    <img src={logotiktok} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                    <img src={logoyb} alt="loading" className='h-[20px] md:h-[33px] object-contain' />
                </div>
            </div>
        </div>
        <hr/>
        <p className='md:text-[14px] text-[8px] text-white md:text-left text-center'>© 2023 PT. Teknologi Otonometer Nusantara. All Rights Reserved. | teknologiotonometernusantara@gmail.com</p>
    </div>

  );
}

export default Footer