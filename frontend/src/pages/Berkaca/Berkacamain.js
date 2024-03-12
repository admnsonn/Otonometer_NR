import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import bulat from "../../assets/bg-elemen.svg";

const Berkacamain = () => {
  const [selectedOption, setSelectedOption] = useState("Provinsi");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedKota, setSelectedKota] = useState("Kota");
  const [dropdownKota, setDropdownKota] = useState(false);

  const [selectedTahun, setSelectedTahun] = useState("Tahun");
  const [dropdownTahun, setDropdownTahun] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownKota = () => {
    setDropdownKota(!dropdownKota);
  };

  const handleDropdownTahun = () => {
    setDropdownTahun(!dropdownTahun);
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

  return (
      <div className="flex flex-col mb-[150px] justify-center items-center max-lg:[1920px]">
        {/* <div className="relative w-full max-w-lg blur-2xl">
          <div class="absolute top-[20%] left-[1100px] w-[280px] h-[280px] bg-third rounded-full mix-blend-multiply filter opacity-20 animate-blob animation-delay-4000"></div>
          <div class="absolute top-[50%] right-[960px] w-[220px] h-[220px] bg-secondary rounded-full mix-blend-multiply filter opacity-10 animate-blob animation-delay-2000"></div>
          <div class="absolute top-[650px] right-[800px] w-[390px] h-[390px] bg-third rounded-full mix-blend-multiply filter opacity-35 animate-blob animation-delay-2000"></div>
          <div class="absolute top-[450px] left-[800px] w-[220px] h-[220px] bg-secondary rounded-full mix-blend-multiply filter opacity-10 animate-blob animation-delay-2000"></div>
          <div class="absolute top-[400px] left-[800px] w-[390px] h-[390px] bg-third rounded-full mix-blend-multiply filter opacity-40 animate-blob animation-delay-2000"></div>
        </div> */}
        <div className="flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center">
          BERKACA
        </div>
        <h1 className="flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]">
          Bandingkan Daerah Pilihanmu!
        </h1>
        {/* DROPDOWN */}
        <div className=" flex gap-[50px] relative mt-[24px] mb-[24px]">
          <div
            onClick={handleDropdownClick}
            className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mt-[90px]"
          >
            <p>{selectedOption}</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              color="#24445A"
              className="ml-[20px]"
            />
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-lg mt-[142px]">
              {renderDropdownOptions()}
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
            <div className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-lg mt-[52px] ml-[216px]">
              {renderDropdownTahun()}
            </div>
          )}

          <div
            onClick={handleDropdownKota}
            className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mt-[90px]"
          >
            <p>{selectedKota}</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              color="#24445A"
              className="ml-[20px]"
            />
          </div>
          {dropdownKota && (
            <div className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-lg ml-[434px] mt-[142px]">
              {renderDropdownKota()}
            </div>
          )}
        </div>
      </div>
  );
};

export default Berkacamain;
