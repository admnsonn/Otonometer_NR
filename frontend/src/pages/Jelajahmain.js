import React from 'react'
import peta from "../assets/petajelajah.svg";
import Switchbtn from '../components/Switchbtn';
const Jelajahmain = () => {
  return (
      <div className='flex flex-col justify-center items-center'>
        <div className='flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center'>
            JELAJAH
        </div>
      <h1 className='flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]'>
          Jelajahi Data Wilayah!
      </h1>
      {/* DROPDOWN */}
      <div className='flex mt-[24px] mb-[24px] gap-[60px]'>
        <button className='flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg'>
            <p>Jawa Barat</p>
        </button>
        <button className='flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg'>
            <p>Kota Bandung</p>
        </button>
        <button className='flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg'>
            <p>Tahun</p>
        </button>
      </div>

      <img src={peta} alt="" className="flex items-center" />

      {/* OPSI */}
      <div className='flex mt-[24px] gap-[60px]'>
        <button className='flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center '>
            <p>KEUANGAN</p>
        </button>
        <button className='flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center '>
            <p>EKONOMI</p>
        </button>
        <button className='flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center'>
            <p>STATISTIK</p>
        </button>
      </div>
      {/* DROPDOWN */}
      <div className='flex mt-[28px] gap-[60px]'>
        <button className='flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg'>
            <p>Belanja</p>
        </button>
        <button className='flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg'>
            <p>Operasi</p>
        </button>
        <button className='flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg'>
            <p>Pilih</p>
        </button>
      </div>
      {/* SWITCH */}
      <div className='flex gap-[50px] items-center justify-center text-[18px] font-semibold text-secondary mt-[48px]'>
        PROVINSI
        <Switchbtn/>
        NASIONAL
      </div>
      {/* TEXT */}
      <div className='text-secondary text-center mt-[48px]'>
        <p className='text-[32px] font-extrabold text-secondary'>PERINGKAT KOTA BANDUNG</p>
        <p className='text-[24px] font-regular italic'>(Rp10<sup>3</sup>/kapita)</p>
      </div>

      {/* DATA */}
      <div className='flex mt-[94px] w-[1153px] items-center justify-center gap-[80px]'>
        <div className='w-[195px]'>
          <p className='font-bold text-secondary text-[24px]'>JAWA BARAT</p>
          <p className='font-bold text-third text-[20px]'>(rata-rata)</p>
        </div>
        <div className='w-[660px] border-2 rounded-full border-secondary'>
          <p className='px-2 font-bold text-[20px]'>100</p>
        </div>
        <p className='font-bold text-third text-[24px]'>#12</p>
      </div>

      <div className='flex w-[1153px] items-center justify-center gap-[80px] mt-[20px]'>
        <div>
          <p className='w-[195px] font-bold text-secondary text-[24px]'>KOTA BANDUNG</p>
        </div>
        <div className='w-[660px] border-2 rounded-full border-secondary bg-secondary'>
          <p className='px-2 font-bold text-[20px] text-white '>90</p>
        </div>
        <p className='font-bold text-third text-[24px]'>#12</p>
      </div>

      <div className='flex w-[1153px] items-center justify-center gap-[80px] mt-[20px]'>
        <div>
          <p className='w-[195px] font-bold text-secondary text-[24px]'>KOTA TASIKMALAYA</p>
        </div>
        <div className='w-[660px] border-2 rounded-full border-secondary'>
          <p className='px-2 font-bold text-[20px]'>90</p>
        </div>
        <p className='font-bold text-third text-[24px]'>#12</p>
      </div>

      <div className='flex w-[1153px] items-center justify-center gap-[80px] mt-[20px]'>
        <div>
          <p className='w-[195px] font-bold text-secondary text-[24px]'>PANGANDARAN</p>
        </div>
        <div className='w-[660px] border-2 rounded-full border-secondary'>
          <p className='px-2 font-bold text-[20px]'>90</p>
        </div>
        <p className='font-bold text-third text-[24px]'>#12</p>
      </div>


    </div>
  )
}

export default Jelajahmain