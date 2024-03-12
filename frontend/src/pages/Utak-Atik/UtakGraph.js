import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import bulat from "../../assets/bulat.svg";
import "../../style/Switchbtn.css";
import "../../style/Components.css";

const UtakGraph = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownKota, setDropdownKota] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Jawa Barat');
    const [selectedKota, setSelectedKota] = useState('Kota Bandung');

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDropdownKota = () => {
        setDropdownKota(!dropdownKota);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false); // Close the dropdown after selection
    };

    const handleOptionKota = (option) => {
        setSelectedKota(option);
        setDropdownKota(false); // Close the dropdown after selection
    };

    const renderDropdownOptions = () => {
        const options = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];
    
        return options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option)}
            className="flex  w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-4" // added mr-4 class
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
            className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-4" // added mr-4 class
          >
            <p>{option}</p>
          </div>
        ));
      };

    return (
        <div className="flex flex-col mt-[50px] mb-[150px] justify-center items-center max-lg:[1920px]">
            <img src={bulat} alt="" className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />
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
                    className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-[130px]" // added mr-4 class
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
                    className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer" // added mr-4 class
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
            </div>
            <div className="flex justify-center items-center text-secondary text-[14px] font-bold mt-4">
                <div className='text-center'>
                    <p className='text-center font-extrabold text-[24px] text-[#064878]'>Belanja</p>
                    <p className="text-sm">(Rp 10/Kapita)</p>
                </div>
                <did className='text-center' style={{ marginLeft: '100px', marginRight: '110px' }}>
                    <p className='text-[20px] text-[#0B578E]'>Penduduk</p>
                    <p>(Rp 10/Kapita)</p>
                </did>
                <div className='text-center'>
                    <p className='text-center font-extrabold text-[24px] text-[#064878]'>Pendapatan</p>
                    <p>(Rp 10/Kapita)</p>
                </div>
            </div>
        </div>
    );
};

export default UtakGraph;
