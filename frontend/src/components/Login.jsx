import React from 'react'
import Illustration from '../assets/Auth/ilustrasi.jpg'
const Login = () => {
  return (
    <div className='flex justify-between text-secondary'>
        <img src={Illustration} alt="loading" className='' />
        <div className='w-full bg-white'>
            <div className='flex justify-center'>
              <div className='flex items-center'>
                <h1 className=' text-[60px] font-bold'>Daftar</h1>
                <p className='text-16'>Daftarkan diri Anda untuk mengakses</p>
                <span className='font-bold text-16'>fitur lainnya</span>
                <span className='text-16'> Otonometer</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login