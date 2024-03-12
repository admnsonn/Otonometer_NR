import React, { useState } from "react";
import peta from "../assets/petajelajah.png";
import map from "../assets/icons/peta.png";
import geo from "../assets/icons/geodating.svg";
import people from "../assets/icons/people.svg";
import industri from "../assets/icons/industri.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Timeseries from "../components/Grafik/Timeseries.js";

const Utakmain = () => {
  const [selectedOption, setSelectedOption] = useState("Provinsi");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedKota, setSelectedKota] = useState("Kota");
  const [dropdownKota, setDropdownKota] = useState(false);

  const [selectedTahun, setSelectedTahun] = useState("Tahun");
  const [dropdownTahun, setDropdownTahun] = useState(false);

  const [selectedDataset, setSelectedDataset] = useState("Pilih");
  const [dropdownDataset, setDropdownDataset] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownKota = () => {
    setDropdownKota(!dropdownKota);
  };

  const handleDropdownTahun = () => {
    setDropdownTahun(!dropdownTahun);
  };

  const handleDropdownDataset = () => {
    setDropdownDataset(!dropdownDataset);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleOptionKota = (option) => {
    setSelectedKota(option);
    setDropdownKota(false);
  };

  const handleOptionTahun = (option) => {
    setSelectedTahun(option);
    setDropdownTahun(false);
  };

  const handleOptionDataset = (option) => {
    setSelectedDataset(option);
    setDropdownDataset(false);
  };

  const renderDropdownOptions = () => {
    const options = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];

    return options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleOptionClick(option)}
        className="flex  w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
      >
        <p>{option}</p>
      </div>
    ));
  };

  const renderDropdownKota = () => {
    const options = ["Kota Bandung", "Kota Cirebon", "Kota Bekasi"];

    return options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleOptionKota(option)}
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
      >
        <p>{option}</p>
      </div>
    ));
  };

  const renderDropdownTahun = () => {
    const options = ["2022", "2021", "2020"];

    return options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleOptionTahun(option)}
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
      >
        <p>{option}</p>
      </div>
    ));
  };

  const renderDropdownDataset = () => {
    const options = ["Keuangan", "Ekonomi", "Statik"];
    return options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleOptionDataset(option)}
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
      >
        <p>{option}</p>
      </div>
    ));
  };

  return (
      <div className="flex flex-col mb-[150px] justify-center items-center max-lg:[1920px]">
        <div className="relative w-full max-w-lg blur-2xl">
          <div class="absolute top-[20%] left-[1100px] w-[280px] h-[280px] bg-third rounded-full mix-blend-multiply filter opacity-20 animate-blob animation-delay-4000"></div>
          <div class="absolute top-[50%] right-[960px] w-[220px] h-[220px] bg-secondary rounded-full mix-blend-multiply filter opacity-10 animate-blob animation-delay-2000"></div>
          <div class="absolute top-[650px] right-[800px] w-[390px] h-[390px] bg-third rounded-full mix-blend-multiply filter opacity-35 animate-blob animation-delay-2000"></div>
          <div class="absolute top-[450px] left-[800px] w-[220px] h-[220px] bg-secondary rounded-full mix-blend-multiply filter opacity-10 animate-blob animation-delay-2000"></div>
          <div class="absolute top-[400px] left-[800px] w-[390px] h-[390px] bg-third rounded-full mix-blend-multiply filter opacity-40 animate-blob animation-delay-2000"></div>
        </div>
        <div className="w-[1170px] h-[535px] text-secondary">
          <Timeseries/>
        </div>
        {/* <img src={bulat} alt="" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-50 w-full" /> */}
        <div className="flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center">
          UTAK-ATIK
        </div>
        <h1 className="flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]">
          Utak-Atik Menyajikan Insight Tanpa Batas!
        </h1>
        {/* DROPDOWN */}
        <div className=" flex gap-[50px] relative mt-[24px] mb-[24px]">
          <div
            onClick={handleDropdownClick}
            className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
          >
            <p>{selectedOption}</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              color="#24445A"
              className="ml-[20px]"
            />
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[50px]">
              {renderDropdownOptions()}
            </div>
          )}

          <div
            onClick={handleDropdownKota}
            className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
          >
            <p>{selectedKota}</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              color="#24445A"
              className="ml-[20px]"
            />
          </div>
          {dropdownKota && (
            <div className="absolute z-10 bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[50px] ml-[216px]">
              {renderDropdownKota()}
            </div>
          )}

          <div
            onClick={handleDropdownTahun}
            className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
          >
            <p>{selectedTahun}</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              color="#24445A"
              className="ml-[20px]"
            />
          </div>
          {dropdownTahun && (
            <div className="absolute z-10 bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[50px] ml-[434px]">
              {renderDropdownTahun()}
            </div>
          )}
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
        <h1 className="text-secondary mt-[90px] text-[14px] font-semibold">DATASET 1</h1>
        {/* DROPDOWN */}
        <div
            onClick={handleDropdownDataset}
            className="flex bg-secondary w-[167px] h-[41px] rounded-[10px] text-white border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mt-[10px]"
          >
            <p>{selectedDataset}</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              color="white"
              className="ml-[20px]"
            />
          </div>
          {dropdownDataset && (
            <div className="absolute z-[20px] bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[990px]">
              {renderDropdownDataset()}
            </div>
          )}
      </div>
  );
};

export default Utakmain;
