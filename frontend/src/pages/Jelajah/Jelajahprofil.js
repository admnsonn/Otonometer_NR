import React, { useState, useEffect } from "react";
import peta from "../../assets/petajelajah.png";
import geo from "../../assets/icons/geodating.svg";
import people from "../../assets/icons/people.svg";
import industri from "../../assets/icons/industri.svg";
import partai from "../../assets/icons/partai.svg";
import pejabat from "../../assets/foto/pejabat1.svg";
import dprd from "../../assets/foto/pejabat2.svg";
import "../../style/Switchbtn.css";
import "../../style/Components.css";
import Circleimage from "../../components/Circleimage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bulat from "../../assets/circ.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCaretDown, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import map from "../../assets/icons/peta.png";

const Jelajahprofil = () => {
  const [activeTab, setActiveTab] = useState("pemda");

  const toggleTab = () => {
    setActiveTab(activeTab === "pemda" ? "dprd" : "pemda");
  };

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

  const SwitchBtn = ({ selected, onSelect }) => (
    <div className="switch" onClick={onSelect}>
      <input type="checkbox" id="toggle" checked={selected === "dprd"} />
      <label htmlFor="toggle" className="slider"></label>
    </div>
  );

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

  const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  };

  ///FETCHING DROPDOWN PROVINSI
  const [provincess, setProvinces] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(sessionStorage.getItem("namaprovinsi"));
  const [openProvinsi, setOpenProvinsi] = useState(false);
  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/provinces")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data.data);
        console.log(provincess);
      });
  }, []);

  ///FETCHING DROPDOWN KOTA
  const [cities, setCity] = useState(null);
  const [inputValueofCity, setInputValueofCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(sessionStorage.getItem("namakota"));
  const [openCity, setOpenCity] = useState(false);

  ///UPDATE DATA KOTA BERDASARKAN DATA PROVINSI
  function updateKota(item,choosed,id){
    if(item.toLowerCase() !== choosed.toLowerCase()){
      setSelected(item);
      setOpenProvinsi(false);
      setInputValue("");
      fetch("https://api.otonometer.neracaruang.com/api/cities?province_id="+id)
        .then((response) => response.json())
        .then((data)=> {
          setCity(data.data);
        });
    }
  }
    if(sessionStorage.getItem("idprovinsi") !== null){
      fetch("https://api.otonometer.neracaruang.com/api/cities?province_id="+sessionStorage.getItem("idprovinsi"))
        .then((response) => response.json())
        .then((data)=> {
          setCity(data.data);
        });
    }
    


  ///FETCHING DROPDOWN TAHUN
  const [years, setYears] = useState(null);
  const [inputValueofYears, setInputValueofYears] = useState("");
  const [selectedYears, setSelectedYears] = useState("");
  const [openYears, setOpenYears] = useState(false);

  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/year")
      .then((response ) => response.json())
      .then((data) => {
        setYears(data.data);
      });
  }, []);


  ///UPDATE PETANYA DORA THE EXPLORER
  const [peta, setPeta] = useState(null);
  const [koordinatLokasi, setKoordinatLokasi] = useState(null);
  const [infoDaerah, setInfoDaerah] = useState (null);
  const [pinMap, setPinMap] = useState (null);

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  function updatePeta(wilayah_id){
    fetch("https://api.otonometer.neracaruang.com/api/wilayah-info?lang=en&wilayah_id=" + wilayah_id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPeta(result.data.peta);
        setKoordinatLokasi(result.data.longitude+", "+result.data.latitude);
        setInfoDaerah(result.data.nama);
        setPinMap(map);
        console.log(result.data.peta);
      });
  }
  
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[40px] gap-y-[10px] mt-[20px]">
        {/* FETCHING PROVINSI */}
        <div className="w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
          <div 
            onClick={()=>setOpenProvinsi(!openProvinsi)}
            
            className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
            >
              {selected 
                ? selected?.length > 20 
                  ? selected?.substring(0,20) + "..." 
                  : selected 
                : "Provinsi"}
              <FontAwesomeIcon
                icon={faChevronDown}
                color="#24445A"
                className={`ml-[20px] w-[10px] h-[20px] ${openProvinsi && "rotate-180"}`}
              />
          </div>
          <div className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${
            openProvinsi ? "max-h-auto" : "hidden"}`
          }
          >
              <FontAwesomeIcon
                icon={faSearch}
                color="#24445A"
                style={{ opacity: "40%" }}
                className="w-[10px] h-[20px] opacity-75"
              />
              <input 
                type="text" 
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value.toLowerCase())}
                placeholder="Cari Provinsi" 
                className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"/>
          </div>
          <ul 
            className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${
                openProvinsi ? "max-h-[240px]" : "max-h-[0]"}`
              }
            >
            {provincess?.map((provinces)=>(
              <li 
                key={provinces?.nama} 
                className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${provinces?.nama?.toLowerCase() === selected?.toLowerCase() && 'bg-secondary text-white'
                }
                ${
                  provinces?.nama?.toLowerCase().startsWith(inputValue) 
                    ? "block"
                    : "hidden"
                }`}
                onClick={()=>{
                  updateKota(provinces?.nama,selected,provinces.id)
                }}  
              >
                {provinces?.nama}
              </li>
            ))}
          </ul>
        </div>
        {/* FETCHING KOTA */}
        <div className="w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
          <div 
            onClick={()=>setOpenCity(!openCity)}
            
            className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
            >
              {selectedCity 
                ? selectedCity?.length > 20 
                  ? selectedCity?.substring(0,20) + "..." 
                  : selectedCity 
                : "Kota/Kabupaten"}
              <FontAwesomeIcon
                icon={faChevronDown}
                color="#24445A"
                className={`ml-[20px] w-[10px] h-[20px] ${openCity && "rotate-180"}`}
              />
          </div>
          <div className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${
            openCity ? "max-h-auto" : "hidden"}`
          }
          >
              <FontAwesomeIcon
                icon={faSearch}
                color="#24445A"
                style={{ opacity: "40%" }}
                className="w-[10px] h-[20px] opacity-75"
              />
              <input 
                type="text" 
                value={inputValueofCity}
                onChange={(e)=>setInputValueofCity(e.target.value.toLowerCase())}
                placeholder="Cari Kota/Kabupaten" 
                className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"/>
          </div>
          <ul 
            className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${
                openCity ? "max-h-[240px]" : "max-h-[0]"}`
              }
            >
            {cities?.map((regencies)=>(
              <li 
                key={regencies?.nama} 
                className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${regencies?.nama?.toLowerCase() === selectedCity?.toLowerCase() && 'bg-secondary text-white'
                }
                ${
                  regencies?.nama?.toLowerCase().startsWith(inputValueofCity) 
                    ? "block"
                    : "hidden"
                }`}
                onClick={()=>{
                  if(regencies?.nama?.toLowerCase() !== selectedCity.toLowerCase()){
                    setSelectedCity(regencies?.nama);
                    setOpenCity(false);
                    setInputValueofCity("");
                    updatePeta(regencies.id);
                  }
                }} 
              >
                {regencies?.nama}
              </li>
            ))}
          </ul>
        </div>
        
        {/* FETCHING TAHUN */}
        <div className="w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
          <div 
            onClick={()=>setOpenYears(!openYears)}
            
            className="bg-[#ebebeb] w-full p-2 flex items-center justify-center rounded-[10px]"
            >
              {selectedYears 
                ? selectedYears?.length > 12 
                  ? selectedYears?.substring(0,13) + "..." 
                  : selectedYears 
                : "Tahun"}
              {!selectedCity && (
                <FontAwesomeIcon
                icon={faChevronDown}
                color="#24445A"
                className={`ml-[20px] w-[10px] h-[20px] ${openYears && "rotate-180"}`}
              />
              )}
          </div>
          <ul 
            className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-auto 
              ${
                openYears ? "max-h-[240px]" : "max-h-[0]"}`
              }
            >
            {years?.map((regencies)=>(
              <li 
                key={regencies?.nama} 
                className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${regencies?.nama?.toLowerCase() === selectedYears?.toLowerCase() && 'bg-secondary text-white'
                }

                ${
                  regencies?.nama?.toLowerCase().startsWith(inputValueofYears) 
                    ? "block"
                    : "hidden"
                }`}

                onClick={()=>{
                  if(regencies?.nama?.toLowerCase() !== selectedYears.toLowerCase()){
                    setSelectedYears(regencies?.nama);
                    setOpenYears(false);
                    setInputValueofYears("");
                  }
                }}  
              >
                {regencies?.nama}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src={peta}
        alt=""
        className="flex items-center w-80 mb-[40px] mt-[20px]"
      />
      
      <div className="flex justify-between items-center gap-x-[40px]">
        <img src={pinMap} alt="" className="flex w-6" />
        <div className="text-secondary">
          <h1 className="text-[24px] font-bold">{infoDaerah}</h1>
          <p className="font-semibold text-[20px]">{koordinatLokasi}</p>
        </div>
      </div>

      <div className="flex gap-[60px] mt-[40px] mb-[20px] ml-[40px]">
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>168</p>
          <p>km²</p>
        </div>
        <div className="flex gap-[10px]">
          <img src={geo} alt="" className="" />
          <a href="/Jelajah-Profil">
            <img src={people} alt="" className="" />
          </a>
          <img src={industri} alt="" className="" />
        </div>
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>2.453</p>
          <p>10³ Jiwa</p>
        </div>
      </div>
      {/* SWITCH */}
      <div className="flex gap-[50px] items-center justify-center text-[18px] font-semibold text-secondary mt-[48px] text-[20px]">
        <p className={activeTab === "dprd" ? "inactive-text" : ""}>Pemda</p>
        <SwitchBtn selected={activeTab} onSelect={toggleTab} />
        <p className={activeTab === "pemda" ? "inactive-text" : ""}>DPRD</p>
      </div>
      {/* TEXT */}
      <div className="text-secondary text-center mt-[48px]">
        <p className="text-[32px] font-extrabold">PEMERINTAH KOTA BANDUNG</p>
      </div>

      {/* DATA */}
      {activeTab === "pemda" && (
        <div className="flex mt-[50px] gap-[100px]">
          <div className="flex flex-col">
            <Circleimage src={pejabat} alt="User Profile" size="400px" />
            <p className="text-center mt-[20px] text-[30px] text-[#064878] font-bold">
              Walikota
            </p>
            <p className="text-center mt-[15px] text-[25px] text-[#064878] font-semibold">
              H. Tedy Rusmawan
            </p>
            <p className="text-center mt-[10px] text-[25px] text-[#064878] font-semibold">
              (2019-2024)
            </p>
          </div>
          <div className="flex flex-col">
            <Circleimage src={pejabat} alt="User Profile" size="400px" />
            <p className="text-center mt-[20px] text-[30px] text-[#064878] font-bold">
              Wakil Walikota
            </p>
            <p className="text-center mt-[15px] text-[25px] text-[#064878] font-semibold">
              H. Tedy Rusmawan
            </p>
            <p className="text-center mt-[10px] text-[25px] text-[#064878] font-semibold">
              (2019-2024)
            </p>
          </div>
        </div>
      )}

      {activeTab === "dprd" && (
        <div className="mb-[100px]">
          <div className="flex mt-[50px] gap-[100px]">
            <div className="flex flex-col">
              <div className="overlay-container">
                <Circleimage
                  src={dprd}
                  alt="User Profile"
                  size="400px"
                  className="base-image"
                />
                <img
                  src={partai}
                  alt=""
                  className="flex items-center overlay-image"
                />
              </div>
              <p className="text-center mt-[50px] text-[25px] text-[#064878] font-semibold">
                H. Tedy Rusmawan
              </p>
              <p className="text-center mt-[10px] text-[25px] text-[#064878] font-semibold">
                (2019-2024)
              </p>
            </div>
            <div className="flex flex-col">
              <div className="overlay-container">
                <Circleimage
                  src={dprd}
                  alt="User Profile"
                  size="400px"
                  className="base-image"
                />
                <img
                  src={partai}
                  alt=""
                  className="flex items-center overlay-image"
                />
              </div>
              <p className="text-center mt-[50px] text-[25px] text-[#064878] font-semibold">
                H. Tedy Rusmawan
              </p>
              <p className="text-center mt-[10px] text-[25px] text-[#064878] font-semibold">
                (2019-2024)
              </p>
            </div>
          </div>
          <div className="text-secondary text-center mt-[80px]">
            <p className="text-[30px] font-bold">Alamat Kantor Pemerintah: </p>
            <p className="text-[30px] font-medium">Jl. alalallalaalalalal </p>
          </div>
          <div className="text-secondary text-center mt-[100px]">
            <p className="text-[30px] font-bold">KOMISI A </p>
          </div>
          <div className="flex gap-[60px] text-center mt-[40px] justify-center">
            <div className="bg-[#24445A] w-[60%] h-[400px] rounded-lg">
              <p className="text-[25px] font-bold text-[#FFFFFF] mt-[25px]">
                (Jabatan)
              </p>
              <div className="flex justify-center mt-[15px]">
                <Circleimage src={dprd} alt="User Profile" size="150px" />
              </div>
              <p className="text-[20px] font-bold text-[#FFFFFF] mt-[25px]">
                Yana Mulyana
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (NIP)
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (CONTACT)
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (E-MAIL)
              </p>
            </div>

            <div className="bg-[#24445A] w-[60%] h-[400px] rounded-lg">
              <p className="text-[25px] font-bold text-[#FFFFFF] mt-[25px]">
                (Jabatan)
              </p>
              <div className="flex justify-center mt-[15px]">
                <Circleimage src={dprd} alt="User Profile" size="150px" />
              </div>
              <p className="text-[20px] font-bold text-[#FFFFFF] mt-[25px]">
                Yana Mulyana
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (NIP)
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (CONTACT)
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (E-MAIL)
              </p>
            </div>

            <div className="bg-[#24445A] w-[60%] h-[400px] rounded-lg">
              <p className="text-[25px] font-bold text-[#FFFFFF] mt-[25px]">
                (Jabatan)
              </p>
              <div className="flex justify-center mt-[15px]">
                <Circleimage src={dprd} alt="User Profile" size="150px" />
              </div>
              <p className="text-[20px] font-bold text-[#FFFFFF] mt-[25px]">
                Yana Mulyana
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (NIP)
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (CONTACT)
              </p>
              <p className="text-[15px] font-bold text-[#FFFFFF] mt-[5px]">
                (E-MAIL)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jelajahprofil;