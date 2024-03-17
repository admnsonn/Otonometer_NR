import React, { useState, useEffect } from "react";
import peta from "../../assets/petajelajah.png";
import map from "../../assets/icons/peta.png";
import geo from "../../assets/icons/geodating.svg";
import people from "../../assets/icons/people.svg";
import industri from "../../assets/icons/industri.svg";
import Switchbtn from "../../components/Switchbtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import bulat from "../../assets/circ.svg";
import "../../style/Switchbtn.css";
import "../../style/Components.css";

const Jelajahmain = () => {
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

  const [activeTab, setActiveTab] = useState("provinsi");

  const toggleTab = () => {
    setActiveTab(activeTab === "provinsi" ? "nasional" : "provinsi");
  };

  const SwitchBtn = ({ selected, onSelect }) => (
    <div className="switch" onClick={onSelect}>
      <input type="checkbox" id="toggle" checked={selected === "nasional"} />
      <label htmlFor="toggle" className="slider"></label>
    </div>
  );


  ///FETCHING DROPDOWN PROVINSI
  const [provincesss, setProvinces] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [openProvinsi, setOpenProvinsi] = useState(false);
 useEffect(() => {
    fetch("https://staggingabsensi.labura.go.id/api-wilayah-indonesia/static/api/provinces.json")
      .then((response ) => response.json())
      .then((provinces) => {
        setProvinces(provinces);
        console.log(provinces);
      });
  }, []);

  return (
    <div className="flex flex-col mb-[150px] justify-center items-center max-lg:[1920px] mt-[80px]">
      <img src={bulat} alt="" className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />
      <div className="flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center">
        JELAJAH
      </div>
      <h1 className="flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]">
        Jelajahi Data Wilayah!
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
      {/* FETCHING PROVINSI */}
      <div className="w-[167px] h-auto text-secondary font-medium text-[14px]">
        <div 
          onClick={()=>setOpenProvinsi(!openProvinsi)}
          
          className="bg-[#ebebeb] w-full p-2 flex items-center justify-center rounded-[10px]"
          >
            {selected 
              ? selected?.length > 12 
                ? selected?.substring(0,13) + "..." 
                : selected 
              : "Provinsi"}
            {!selected && (
              <FontAwesomeIcon
              icon={faChevronDown}
              color="#24445A"
              className={`ml-[20px] w-[10px] h-[20px] ${openProvinsi && "rotate-180"}`}
            />
            )}
        </div>

        <ul 
          className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-auto 
            ${
              openProvinsi ? "max-h-[240px]" : "max-h-[0]"}`
            }
          >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <FontAwesomeIcon
              icon={faSearch}
              color="#24445A"
              className="w-[10px] h-[20px] opacity-75"
            />
            <input 
              type="text" 
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value.toLowerCase())}
              placeholder="Cari Provinsi" 
              className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-[120px] text-[12px] font-medium bg-none"/>
          </div>
          {provincesss?.map((provinces)=>(
            <li 
              key={provinces?.name} 
              className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
              ${provinces?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-secondary text-white'
              }

              ${
                provinces?.name?.toLowerCase().startsWith(inputValue) 
                  ? "block"
                  : "hidden"
              }`}

              onClick={()=>{
                if(provinces?.name?.toLowerCase() !== selected.toLowerCase()){
                  setSelected(provinces?.name);
                  setOpenProvinsi(false);
                  setInputValue("");
                }
              }}  
            >
              {provinces?.name}
            </li>
          ))}
        </ul>
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

      <div className="flex gap-[60px] mt-[40px] mb-[20px] ml-[40px]">
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>168</p>
          <p>km²</p>
        </div>
        <div className="flex gap-[10px]">
          <div className="hover-container">
            <img src={geo} alt="" className="hover-image" />
            <span className="hover-text w-[150%] mb-[10px]">1,518 km² 489 mdpl Dataran Tinggi</span>
          </div>
          <a href="/Jelajah-Profil">
            <img src={people} alt="" className="" />
          </a>
          <div className="hover-container">
            <img src={industri} alt="" className="hover-image" />
            <span className="hover-text w-[150%] mb-[10px]">N/A</span>
          </div>
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
      <div className="flex gap-[50px] items-center justify-center text-[18px] font-semibold text-secondary mt-[48px] text-[20px]">
        <p className={activeTab === "nasional" ? "inactive-text" : ""}>
          PROVINSI
        </p>
        <SwitchBtn selected={activeTab} onSelect={toggleTab} />
        <p className={activeTab === "provinsi" ? "inactive-text" : ""}>
          NASIONAL
        </p>
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
      {activeTab === "provinsi" && (
        <div>
          <div className="flex mt-[70px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">JAWA BARAT</p>
              <p className="font-bold text-third text-[20px]">(rata-rata)</p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[20px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA BANDUNG
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[70px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA CIREBON
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[30px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA BANJAR
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[20px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA SUKABUMI
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[20px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                PANGANDARAN
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>
        </div>
      )}

      {activeTab === "nasional" && (
        <div>
          <div className="flex mt-[70px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">INDONESIA</p>
              <p className="font-bold text-third text-[20px]">(rata-rata)</p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[20px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA BANDUNG
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[50px] gap-[60px] justify-end">
            <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
              <p>50</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                color="#24445A"
                className="ml-[20px]"
              />
            </button>
            <button className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg">
              <p>TERBARU</p>
              <FontAwesomeIcon
                icon={faArrowDownShortWide}
                color="#24445A"
                className="ml-[20px]"
              />
            </button>
          </div>

          <div className="flex mt-[50px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">MAHAKAMULU</p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[30px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">KOTA JAMBI</p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[30px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA CIREBON
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>

          <div className="flex mt-[30px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA BEKASI
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jelajahmain;
