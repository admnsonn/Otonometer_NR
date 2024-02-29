import React from "react";
import logo from "../assets/biglogo.svg";
import playstore from "../assets/App Store Black Border.svg";
import appstore from "../assets/Google Play Black Border.svg";
import featureee from "../assets/laterrr.svg";
import logo3d from "../assets/About/logo3d.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ombak from "../assets/About/ombak.png";

const Dashboard = () => {
  return (
    <div>
      {/* HEADING SECTION */}
      <div className="flex justify-between w-full bg-primer px-[5%] md:px-[10%] lg:px-[10%] md:flex-row gap-[20px] lg:gap-[200px]">
        <div className="w-full md:w-[60%]">
          <img src={logo} alt="loading" className="h-[82px]" />
          <p className="w-full text-[20px] mt-[30px] text-secondary">
            Otonometer menyediakan informasi akurat kepada pengguna indikator
            keuangan, ekonomi dan statistik dari 549 daerah provinsi, kabupaten
            dan kota di Indonesia
          </p>
          <div className="flex gap-[20px] mt-[30px]">
            <img src={appstore} alt="loading" className="hover:" />
            <img src={playstore} alt="loading" className="hover:" />
          </div>
        </div>
        <div className="w-[35%]">
          <img src={featureee} alt="" className="w-full" />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="relative mt-[120px]">
        <img src={ombak} alt="" className="flex items-center" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center md:flex-row gap-[10px] lg:gap-[200px] mt-[10px] md:px-[10%] lg:px-[15%]">
            <img src={logo3d} alt="" className="w-[50%] md:w-[10%] xl:w-[40%]" />
            <div className="w-full md:w-[75%] lg:w-[80%] mt-[10px] text-secondary text-[16px] text-justify">
              <div className="mb-[10px] md:mb-[20px] text-[2rem] md:text-[3px] lg:text-[3%] xl:text-[50px] font-bold">
                Tentang Kami
              </div>
              <p>
                Tujuan aplikasi Otonometer ini adalah menyediakan informasi kepada
                publik luas agar lebih memahami potensi dan kinerja setiap daerah.
                Kami juga ingin informasi tersebut dapat digunakan untuk
                penelitian akademis di lembaga riset dan pendidikan. Disamping itu
                kami berkeinginan agar informasi tersebut menjadi masukan kepada
                pemerintah daerah dalam mengembangkan kebijakan yang meningkatkan
                kemandirian daerah. Kami juga ingin membantu pelaku bisnis
                memahami dan meramalkan tren serta mengidentifikasi peluang
                investasi dari daerah-daerah tersebut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard
