import React, { useState, useEffect } from "react";
import peta from "../assets/petajelajah.png";
import map from "../assets/icons/peta.png";
import geo from "../assets/icons/geodating.svg";
import people from "../assets/icons/people.svg";
import industri from "../assets/icons/industri.svg";
import Switchbtn from "../components/Switchbtn";

const Jelajahmain = () => {
  const [isProvincial, setIsProvincial] = React.useState(true);
  const [displayedData, setDisplayedData] = React.useState([]);

  const provincialData = [
    { name: "JAWA BARAT", value: 100 },
    { name: "KOTA BANDUNG", value: 90, rank: 12 },
    { name: "KOTA CIREBON", value: 150, rank: 1 },
    { name: "KOTA BANJAR", value: 120, rank: 2 },
    { name: "KOTA SUKABUMI", value: 110, rank: 3 },
    { name: "KOTA PANGANDARAN", value: 100, rank: 4 },
  ];

  const nationalData = [
    { name: "INDONESIA", value: 100 },
    { name: "KOTA BANDUNG", value: 90, rank: 12 },
    { name: "KOTA MAHAKAMULU", value: 150, rank: 1 },
    { name: "KOTA JAMBI", value: 120, rank: 2 },
    { name: "KOTA CIREBON", value: 110, rank: 3 },
    { name: "KOTA BEKASI", value: 100, rank: 4 },
  ];

  useEffect(() => {
    if (isProvincial) {
      setDisplayedData(provincialData);
    } else {
      setDisplayedData(nationalData);
    }
  }, [isProvincial]);

  return (
    <div className="flex flex-col mb-[150px] justify-center items-center">
      <div className="flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center">
        JELAJAH
      </div>
      <h1 className="flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]">
        Jelajahi Data Wilayah!
      </h1>
      {/* DROPDOWN */}
      <div className="flex mt-[24px] mb-[24px] gap-[60px]">
        <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
          <p>Jawa Barat</p>
        </button>
        <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
          <p>Kota Bandung</p>
        </button>
        <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
          <p>Tahun</p>
        </button>
      </div>

      <img
        src={peta}
        alt=""
        className="flex items-center w-80 mb-[40px] mt-[20px]"
      />
      <div className="flex mb-[10px] gap-[30px]">
        <div className="">
          <img src={map} alt="" className="flex w-6" />
        </div>
        <div className="text-[#064878] font-semibold mt-[5px] text-[20px]">
          <p>-6.902186, 107.618756</p>
        </div>
      </div>

      <div className="flex gap-[60px] mt-[40px] mb-[20px]">
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>168</p>
          <p>km²</p>
        </div>
        <div className="flex gap-[10px]">
          <img src={geo} alt="" className="" />
          <img src={people} alt="" className="" />
          <img src={industri} alt="" className="" />
        </div>
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>2.453</p>
          <p>10³ Jiwa</p>
        </div>
      </div>

      {/* OPSI */}
      <div className="flex mt-[24px] gap-[60px]">
        <button className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center ">
          <p>KEUANGAN</p>
        </button>
        <button className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center ">
          <p>EKONOMI</p>
        </button>
        <button className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center">
          <p>STATISTIK</p>
        </button>
      </div>
      {/* DROPDOWN */}
      <div className="flex mt-[28px] gap-[60px]">
        <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
          <p>Belanja</p>
        </button>
        <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
          <p>Operasi</p>
        </button>
        <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
          <p>Pilih</p>
        </button>
      </div>
      {/* SWITCH */}
      <div className="flex gap-[50px] items-center justify-center text-[18px] font-semibold text-secondary mt-[48px]">
        {isProvincial ? "PROVINSI" : "NASIONAL"}
        <Switchbtn onChange={() => setIsProvincial(!isProvincial)} />
        {!isProvincial ? "PROVINSI" : "NASIONAL"}
      </div>
      {/* TEXT */}
      <div className="text-secondary text-center mt-[48px]">
        <p className="text-[32px] font-extrabold text-secondary">
          PERINGKAT KOTA BANDUNG
        </p>
        <p className="text-[24px] font-regular italic">
          (Rp10<sup>3</sup>/kapita)
        </p>
      </div>

      {/* DATA */}
      {displayedData.map((item, index) => (
        <div
          key={index}
          className="flex w-[1153px] items-center justify-center gap-[80px] mt-[20px]"
        >
          <div>
            <p className="w-[195px] font-bold text-secondary text-[24px] relative">
              {item.name}
            </p>
          </div>
          <div className="w-[660px] border-2 rounded-full border-secondary">
            <p className="px-2 font-bold text-[20px]">{item.value}</p>
          </div>
          <p className="font-bold text-third text-[24px]">#{item.rank}</p>
        </div>
      ))}
    </div>
  );
};

export default Jelajahmain;
