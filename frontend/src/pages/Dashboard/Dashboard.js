import React from "react";
import logo from "../../assets/biglogo.svg";
import playstore from "../../assets/App Store Black Border.svg";
import appstore from "../../assets/Google Play Black Border.svg";
import Carousel from "../../components/Carousel";
import logo3d from "../../assets/About/logo3d.svg";
import ombak from "../../assets/About/ombak.png";
import bulat from "../../assets/bulat.svg";
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import karaosell from "../../assets/karaosel";
const Dashboard = () => {
  
  function Karousel() {
  const [width, setWidth] = useState(0);
  const karousel = useRef();

  useEffect(()=>{
    setWidth(karousel.current.scrollWidth - karousel.current.offsetWidth);
  },[]);

    return (
      <motion.div ref={karousel} className="slidernya" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right : 0, left: -width}} className="inner-karousel">
          {karaosell.map(slideer =>{
            return(
              <motion.div className="item" key={slideer}>
                <img src={slideer} alt="slider"/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    );
  }
  
  return (
    <section>
      <img src={bulat} alt="" className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />
      {/* HEADING SECTION */}
      <div className="text-[14px] text-center text-secondary mt-[50px] w-[260px] mx-auto xl:hidden">Layanan untuk mengenal lebih jauh <span className="font-bold">(keotonomian fiskal)</span> daerah Anda!</div>
      <div className="w-[300px] mx-auto xl:hidden mt-[150px] mb-[100px]">
        <Karousel/>
      </div>
      <div className="flex xl:absolute xl:justify-between w-full bg-primer xl:pl-[10%] px-[15%] xl:gap-[20px] xl:mt-[200px] mt-[50px]">
        <div className="flex flex-col justify-center items-start w-[800px] xl:w-full">
          {/* <img src={logo} alt="loading" className="h-[0] xl:h-[82px]"/> */}
          <p className="w-full xl:w-[900px] text-[14px] xl:text-[20px] mt-[10px] text-secondary text-center xl:text-left xl:ml-[40px]">
            <span className="font-bold">Otonometer</span> menyediakan informasi akurat 
            <br/>
            kepada pengguna indikator keuangan, 
            <br/>
            ekonomi dan statistik dari 549 daerah provinsi, 
            <br/>
            kabupaten dan kota di Indonesia.
          </p>
          <div className="flex gap-[20px] mt-[30px] mx-auto xl:mx-0 xl:ml-[40px]">
            <img src={appstore} alt="loading" className="hover:" />
            <img src={playstore} alt="loading" className="hover:" />
          </div>
        </div>
      </div>

      <div className="hidden xl:block left-0 right-0">
          <Carousel/>
      </div>
      
      {/* ABOUT SECTION */}
      <div className="xl:relative xl:mt-0 mt-[200px]">
        <img src={ombak} alt="illustrate" className="hidden xl:flex items-center" />
        <div className="xl:absolute xl:inset-0 left-0">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-[10px] xl:gap-[200px] xl:px-[15%] xl:mt-0 px-[15%]">
            <img src={logo3d} alt="" className="hidden xl:block xl:w-[40%]" />
            <div className="w-full xl:w-[80%] text-secondary text-[16px] text-justify">
              <div className="mb-[10px] md:mb-[20px] text-[40px] xl:text-[50px] font-bold">
                Tentang Kami
              </div>
              <p className="xl:mb-0 mb-[200px]">
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
    </section>
  );
};
<style>
  
</style>
export default Dashboard