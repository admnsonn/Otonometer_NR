import React from 'react'
import LandingPage from '../assets/landingpageBerkaca.svg'
import bulat from "../assets/bulat.svg";
const Berkaca = () => {
  return (
    <div className='relative mt-[150px]'>
      <img src={bulat} alt="" className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />
      <div className='flex justify-between w-full h-auto bg-primer px-[5%] md:px-[10%] lg:px-[10%] md:flex-row gap-[20px] lg:gap-[200px] text-secondary mb-[100px]'>
          <div className='w-[746px]'>
              <h1 className='font-bold text-[96px] '>Berkaca</h1>
              <p className='font-medium text-[34px] mt-[18px] '>Bandingkan daerah Anda dengan daerah lain!</p>
              <p className='font-regular text-[20px] mt-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend sapien sit amet nibh consequat, in porttitor tortor vestibulum. Vestibulum consequat nibh vitae lorem sollicitudin, quis lobortis lacus pretium. Pellentesque sed mauris blandit enim aliquet pulvinar.</p>
              <button 
              // onClick={() => navgate('Login')}
              className='
              mt-[38px]
              flex 
              bg-third 
              hover:bg-secondary 
              w-[105px] h-[39px] 
              rounded-[10px] 
              text-white 
              items-center justify-center'>
                  Lanjut</button>
          </div>
          <div>
            <img src={LandingPage} alt="loading" className="w-450" />
          </div>
      </div>
    </div>
    
  )
}

export default Berkaca