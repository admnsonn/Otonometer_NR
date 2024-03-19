import React from 'react'
import Illustration from "../../assets/Auth/ilustrasi.jpg";
import logo from "../../assets/biglogo.svg";
const Masuk = () => {
  return (
    <section className='w-full h-screen flex items-start'>
        <div className="relative w-1/2 h-full flex flex-col">
        <img
            src={logo}
            className='absolute top-[15%] left-[25%] bg-white p-4 rounded-3xl bg-opacity-20 backdrop-blur-sm'
        >
        </img>
            
        <img
            src={Illustration}
            alt="Illustration"
            className="h-full object-cover"
            style={{ maxWidth: "100%" }}
        />
        </div>
    </section>
  )
}

export default Masuk