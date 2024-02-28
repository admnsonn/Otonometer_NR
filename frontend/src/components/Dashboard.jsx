import React from 'react'
//HEADING
import logo from '../assets/biglogo.svg'
import playstore from '../assets/App Store Black Border.svg'
import appstore from '../assets/Google Play Black Border.svg'
import featureee from '../assets/laterrr.svg'
//ABOUT
import logo3d from '../assets/About/logo3d.svg'
const Dashboard = () => {
  return (
    <div>
        {/* HEADING SECTION */}
        <div className='flex justify-between w-full bg-primer px-[135px]'>
            <div>
                <img src={logo} alt="loading" className='h-[82px]' />
                <p className='w-[570px] text-[20px] mt-[30px] text-secondary'>
                    Otonometer menyediakan informasi akurat kepada pengguna indikator keuangan, ekonomi dan statistik dari 549 daerah provinsi, kabupaten dan kota di Indonesia
                </p>
                <div className='flex gap-[20px] mt-[30px]'>
                    <img src={appstore} alt="loading" className='hover:' />
                    <img src={playstore} alt="loading" className='hover:' />
                </div>
            </div>
            <div>
                <img src={featureee} alt="" />
            </div>
        </div>

        {/* ABOUT SECTION */}
        <div className='flex justify-center items-center gap-[200px] mt-[128px] px-[205px] h-[531px] bg-ombak'>
            <img src={logo3d} alt="" className='flex items-center'/>
            <div>
                <div className='w-[530px] text-secondary text-[60px] font-bold text-left'>
                    Tentang Kami
                </div>
                <div className='w-[530px] text-secondary text-[16px] text-justify'>
                Tujuan aplikasi Otonometer ini adalah menyediakan informasi kepada publik luas agar lebih memahami potensi dan kinerja setiap daerah. Kami juga ingin informasi tersebut dapat digunakan untuk penelitian akademis di lembaga riset dan pendidikan. Disamping itu kami berkeinginan agar informasi tersebut menjadi masukan kepada pemerintah daerah dalam mengembangkan kebijakan yang meningkatkan kemandirian daerah. Kami juga ingin membantu pelaku bisnis memahami dan meramalkan tren serta mengidentifikasi peluang investasi dari daerah-daerah tersebut. 
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default Dashboard