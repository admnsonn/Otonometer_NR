import React, { useState,useEffect } from "react";
import map from "../../assets/icons/peta.png";
import people from "../../assets/icons/people.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import bulat from "../../assets/circ.svg";
import "../../style/Components.css";
import Timeseries from '../../components/Grafik/Timeseries'

const Utakmain = () => {

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  ///DROPDOWN PROVINSI
  const [provincess, setProvinces] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [openProvinsi, setOpenProvinsi] = useState(false);
  const [getInfoProvinsi, setGetInfoProvinsi] = useState(null);
  const [wilayahID, setWilayahID] = useState(null);
  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/provinces")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data.data);
      });
  }, []);

  ///DROPDOWN KOTA
  const [cities, setCity] = useState(null);
  const [inputValueofCity, setInputValueofCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [openCity, setOpenCity] = useState(false);

  ///UPDATE DATA KOTA BERDASARKAN DATA PROVINSI
  function updateKota(item, choosed, id) {
    if (item.toLowerCase() !== choosed.toLowerCase()) {
      setSelected(item);
      setOpenProvinsi(false);
      setInputValue("");
      fetch(
        "https://api.otonometer.neracaruang.com/api/cities?province_id=" + id
      )
        .then((response) => response.json())
        .then((data) => {
          setCity(data.data);
        });
    }
  }

  ///UPDATE DATA LOKASI
  const [peta, setPeta] = useState(null);
  const [koordinatLokasi, setKoordinatLokasi] = useState(null);
  const [infoDaerah, setInfoDaerah] = useState(null);
  const [pinMap, setPinMap] = useState(null);
  const [dataranicon, setDataranicon] = useState(null);
  const [sektoricon, setSektoricon] = useState(null);
  const [datarannama, setDatarannama] = useState(null);
  const [sektornama, setSektornama] = useState(null);
  const [luaswilayah, setLuaswilayah] = useState(null);
  const [jumlahpenduduk, setJumlahpenduduk] = useState(null);

  var data_Penduduk = jumlahpenduduk/1000;

  function updatePeta(wilayah_id) {
    fetch(
      "https://api.otonometer.neracaruang.com/api/wilayah-info?lang=en&wilayah_id=" +
        wilayah_id +
        "&tahun=" +
        sessionStorage.getItem("yearss"),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setPeta(result.data.peta);
        if (sessionStorage.getItem("namawilayah") === "Semua") {
          setDataranicon(
            "https://storage.googleapis.com/otonometer-bucket/infografis/655fb32670807.icon_geo_dattinggi.png"
          );
        } else {
          setDataranicon(result.data.dataran_icon);
        }
        setInfoDaerah(result.data.nama);
        setSektoricon(result.data.wilayah_info.sektor_icon);
        setKoordinatLokasi(result.data.longitude + ", " + result.data.latitude);
        setDatarannama(result.data.dataran_nama);
        setSektornama(result.data.wilayah_info.sektor_nama);
        setLuaswilayah(result.data.wilayah_info.luas_wilayah);
        setJumlahpenduduk(result.data.wilayah_info.jumlah_penduduk);
        setPinMap(map);
        console.log(infoDaerah);
        console.log(datarannama);
      });
  }

  ///VARIABLE DROPDOWN TAHUN
  const [years, setYears] = useState([]);
  const [inputValueofYears, setInputValueofYears] = useState("");
  const [selectedYears, setSelectedYears] = useState("");
  const [openYears, setOpenYears] = useState(false);

  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/year")
      .then((response) => response.json())
      .then((data) => {
        setYears(data.data);
        sessionStorage.setItem("yearss", data.data[0].tahun);
      });
  }, []);
  
  const [selectDataset1, setSelectedDataset1]= useState();
  const [selectDataset2, setSelectedDataset2]= useState();
  ///UNTUK ID MASING MASING
  const [idParent, setIdParent]= useState();
  const [idSelectFilter, setIdSelectFilter]= useState();
  const [idChild, setIdChild]= useState();


  const [parents, setParents] = useState(null);
  const [openParents, setOpenParents] = useState(false);
  const [selectedParents, setSelectedParents] = useState("");
  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/filter-parent?lang=en")
      .then((response) => response.json())
      .then((data) => {
        setParents(data.data);
      });
  }, []);

  function updateParents(item, choosed, id){
    setSelectedParents(item);
    setOpenParents(false);
    fetch("https://api.otonometer.neracaruang.com/api/filter-select?parent_id="+id+"&lang=en")
      .then((response) => response.json())
      .then((data) => {
        setSelectFilter(data.data);
        console.log("Pasti kamu memilih " + item)
      });
  }
  const [selectFilter, setSelectFilter] = useState(null);
  const [openSelectFilter, setOpenSelectFilter] = useState(false);
  const [selectedSelectFilter, setSelectedSelectFilter] = useState("");

  const [selectedChild, setSelectedChild] = useState("")

  function updateSelectFilter(item, choosed, idanak, idbunda){
    setSelectedSelectFilter(item);
    setOpenSelectFilter(false);
    fetch("https://api.otonometer.neracaruang.com/api/filter-child?satuan_id="+idanak+"&lang=en&parent_id="+idbunda)
      .then((response) => response.json())
      .then((data) => {
        setSelectedChild(data.data);
        console.log("Pasti kamu memilih anak " + item)
      });
  }

  // const [selectFilter, setSelectFilter] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.otonometer.neracaruang.com/api/filter-select?parent_id=1&lang=en",requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setSelectFilter(result.data);
  //       });
  //   }, []);
  // const [child, setChild] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.otonometer.neracaruang.com/api/filter-child?satuan_id=1&lang=en&parent_id=1",requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setChild(result.data[2].child);
  //       });
  //   }, []);
  
  // const Dropdown = ({ options, onSelect, label, dropdownClass }) => {
  //   const [selectedOption, setSelectedOption] = useState("");

  //   const handleOptionChange = (e) => {
  //     setSelectedOption(e.target.value);
  //     onSelect(e.target.value);
  //   };

  //   return (
  //     <div
  //       className={`flex ${dropdownClass} w-[167px] h-[41px] rounded-[10px] text-white border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mt-[10px] mb-[10px]`}
  //     >
  //       <select
  //         className={`bg-secondary ${dropdownClass} w-full h-full mx-[20px]`}
  //         value={selectedOption}
  //         onChange={handleOptionChange}
  //       >
  //         <option value="">Pilih</option>
  //         {options.map((option, index) => (
  //           <option key={index} value={option}>
  //             {option}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // };

  // const Tesss = () => {
  //   const [selectedData, setSelectedData] = useState("");
  //   const [selectedSubData, setSelectedSubData] = useState("");
  //   const [checkboxOptions, setCheckboxOptions] = useState([]);
  //   const [selectedDataset2, setSelectedDataset2] = useState("");

  //   const handleDataSelect = (data) => {
  //     setSelectedData(data);
  //     setSelectedSubData("");
  //     setCheckboxOptions([]);
  //     setSelectedDataset2("");
  //   };

  //   const handleSubDataSelect = (subData) => {
  //     setSelectedSubData(subData);
  //     if (idParent === 1) {
  //       switch (subData) {
  //         case "Pendapatan":
  //           setCheckboxOptions([
  //             "Semua",
  //             "PAD",
  //             "Transfer",
  //             "Lain Transfer",
  //             "Perimbangan",
  //             "Lain Imbang",
  //           ]);
  //           break;
  //         case "Belanja":
  //           setCheckboxOptions([
  //             "Semua",
  //             "Operasi",
  //             "Modal",
  //             "Tak Terduga",
  //             "Belanja Trf",
  //             "B. Tidak Langsung",
  //             "B. Langsung",
  //           ]);
  //           break;
  //         case "Pembiayaan":
  //           setCheckboxOptions(["Semua", "Penerimaan", "Pengeluaran"]);
  //           break;
  //         default:
  //           setCheckboxOptions([]);
  //       }
  //     } else if (selectedData === "Ekonomi") {
  //       switch (subData) {
  //         case "PDRB - ADHB":
  //         case "PDRB - ADHK":
  //           setCheckboxOptions([
  //             "Semua",
  //             "Pertanian",
  //             "Pertambangan",
  //             "Industri",
  //           ]);
  //           break;
  //         default:
  //           setCheckboxOptions([]);
  //       }
  //     } else if (selectedData === "Statistik") {
  //       switch (subData) {
  //         case "Jumlah Penduduk":
  //           setCheckboxOptions([
  //             "Semua",
  //             "Semua Umur",
  //             "Perempuan",
  //             "Laki-laki",
  //           ]);
  //           break;
  //         default:
  //           setCheckboxOptions([]);
  //       }
  //     }
  //     return (
  //       <div className="ml-[20px]">
  //         <select onChange={(e) => handleSubDataSelect(e.target.value)}>
  //           <option value="">Pilih Subdata</option>
  //           <option value="Pendapatan">Pendapatan</option>
  //           <option value="Belanja">Belanja</option>
  //           <option value="Pembiayaan">Pembiayaan</option>
  //         </select>

  //         <div>
  //           {checkboxOptions.map((option, index) => (
  //             <div key={index}>
  //               <input
  //                 type="checkbox"
  //                 value={option}
  //                 className="custom-checkbox"
  //               />
  //               <label>{option}</label>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   };

  //   const handleCheckboxChange = (name, checked) => {
  //     console.log(`${name} is ${checked ? "checked" : "unchecked"}`);
  //   };

  //   const handleDataset2Select = (data) => {
  //     setSelectedDataset2(data);
  //   };

  //   const CheckboxForm = ({ options, onCheck }) => {
  //     const handleCheckboxChange = (e) => {
  //       onCheck(e.target.name, e.target.checked);
  //     };

  //     return (
  //       <div
  //         className="flex flex-col items-start"
  //         style={{
  //           boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.50)",
  //           borderRadius: "5%",
  //           border: "10px solid #FFFFFF",
  //           paddingLeft: "30px",
  //           paddingRight: "30px",
  //           marginLeft: "250px",
  //           marginTop: "-100px",
  //         }}
  //       >
  //         {options.map((option, index) => (
  //           <div key={index} className="flex items-center">
  //             <input
  //               type="checkbox"
  //               name={option}
  //               id={option}
  //               onChange={handleCheckboxChange}
  //               className="mr-4"
  //             />
  //             <label htmlFor={option}>{option}</label>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   };

  //   return (
  //     <div>
  //       <Dropdown
  //         options={["Keuangan", "Ekonomi", "Statistik"]}
  //         onSelect={handleDataSelect}
  //         label="Pilih"
  //         dropdownClass="bg-secondary"
  //       />

  //       {selectedData && (
  //         <Dropdown
  //           options={
  //             selectedData === "Keuangan"
  //               ? ["Pendapatan", "Belanja", "Pembiayaan"]
  //               : selectedData === "Ekonomi"
  //               ? ["PDRB - ADHB", "PDRB - ADHK"]
  //               : selectedData === "Statistik"
  //               ? ["Jumlah Penduduk"]
  //               : []
  //           }
  //           onSelect={handleSubDataSelect}
  //           label="Select a sub-data category"
  //           dropdownClass="bg-third text-secondary"
  //         />
  //       )}

  //       {selectedSubData && (
  //         <CheckboxForm
  //           options={checkboxOptions}
  //           onCheck={handleCheckboxChange}
  //         />
  //       )}

  //       {selectedSubData && selectedDataset2 && (
  //         <Dropdown
  //           options={["Keuangan", "Ekonomi", "Statistik"]}
  //           onSelect={handleDataset2Select}
  //           label="Pilih Dataset 2"
  //           dropdownClass="bg-secondary"
  //         />
  //       )}
  //     </div>
  //   );
  // };
  
  // const Dataset1 =()=>{
  //   const [askPilih, setAskPilih] = useState(false);
  //   const handleClick = () => {
  //     setAskPilih(prevAskPilih => !prevAskPilih);
  //   };
  //   return(
  //     <div>
  //     {/* {parent?.map((data) => (
  //       <div
  //         key={data?.id}
  //         className="flex bg-secondary w-[167px] h-[41px] rounded-[10px] text-white border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mt-[10px] mb-[10px]"
  //       >
  //         <div className="text-white" onClick={handleClick}>
  //           {
  //             askPilih === false && <p>Pilih</p>
  //           }
  //           {
  //             askPilih === true && <p>{data?.nama}</p>
  //           }
  //         </div>
  //       </div>
  //     ))} */}
  //     {parent?.map((parentnya) => (
  //       <li
  //         key={parentnya?.nama}
  //         className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
  //         ${
  //           parentnya?.nama?.toLowerCase() === selected?.toLowerCase() &&
  //           "bg-secondary text-white"
  //         }
  //         ${
  //           parentnya?.nama?.toLowerCase().startsWith(inputValue)
  //             ? "block"
  //             : "hidden"
  //         }`}
  //         onClick={() => {
  //         }}
  //       >
  //         {parentnya?.nama}
  //       </li>
  //     ))}
  //   </div>
  //   )
  // }


  return (
    <div className="flex flex-col mb-[150px] justify-center items-center max-lg:[1920px] mt-[80px]">
      <img
        src={bulat}
        alt=""
        className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10"
      />
      <div className="flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center">
        UTAK-ATIK
      </div>
      <h1 className="flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]">
        Utak-Atik Menyajikan Insight Tanpa Batas!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[40px] gap-y-[10px] mt-[20px]">
        {/* FETCHING PROVINSI */}
        <div className="w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
          <div
            onClick={() => setOpenProvinsi(!openProvinsi)}
            className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
          >
            {selected
              ? selected?.length > 20
                ? selected?.substring(0, 20) + "..."
                : selected
              : "Provinsi"}
            <FontAwesomeIcon
              icon={faChevronDown}
              color="#24445A"
              className={`ml-[20px] w-[10px] h-[20px] ${
                openProvinsi && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${openProvinsi ? "max-h-auto" : "hidden"}`}
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
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Cari Provinsi"
              className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
            />
          </div>
          <ul
            className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${openProvinsi ? "max-h-[240px]" : "max-h-[0]"}`}
          >
            {provincess?.map((provinces) => (
              <li
                key={provinces?.nama}
                className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${
                  provinces?.nama?.toLowerCase() === selected?.toLowerCase() &&
                  "bg-secondary text-white"
                }
                ${
                  provinces?.nama?.toLowerCase().startsWith(inputValue)
                    ? "block"
                    : "hidden"
                }`}
                onClick={() => {
                  updateKota(provinces?.nama, selected, provinces.id);
                  sessionStorage.setItem("idprovinsi", provinces.id);
                  sessionStorage.setItem("namaprovinsi", provinces.nama);
                  setGetInfoProvinsi(provinces.id);
                  setWilayahID(provinces.id);
                  sessionStorage.setItem("namawilayah", "Semua");
                  setInfoDaerah("Semua");
                  setSelectedCity("Semua");
                  setDataranicon("Semua");
                  setSelectedYears(sessionStorage.getItem("yearss"));
                  updatePeta(provinces.id);
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
            onClick={() => {
              setOpenCity(!openCity);
            }}
            className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
          >
            {selectedCity
              ? selectedCity?.length > 20
                ? selectedCity?.substring(0, 20) + "..."
                : selectedCity
              : "Kota/Kabupaten"}
            <FontAwesomeIcon
              icon={faChevronDown}
              color="#24445A"
              className={`ml-[20px] w-[10px] h-[20px] ${
                openCity && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${openCity ? "max-h-auto" : "hidden"}`}
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
              onChange={(e) =>
                setInputValueofCity(e.target.value.toLowerCase())
              }
              placeholder="Cari Kota/Kabupaten"
              className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
            />
          </div>
          <ul
            className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${openCity ? "max-h-[240px]" : "max-h-[0]"}`}
          >
            <li
              className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] text-secondary
                ${
                  "semua" === selectedCity?.toLowerCase() &&
                  "bg-secondary text-white"
                }
                `}
              onClick={() => {
                sessionStorage.setItem("namawilayah", "Semua");
                setInfoDaerah("Semua");
                console.log(infoDaerah);
                setSelectedCity("Semua");
                setDataranicon("Semua");
                setWilayahID(getInfoProvinsi);
                setSelectedYears(sessionStorage.getItem("yearss"));
                updatePeta(getInfoProvinsi);
                setOpenCity(false);
              }}
            >
              Semua
            </li>
            {cities?.map((regencies) => (
              <li
                key={regencies?.nama}
                className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${
                  regencies?.nama?.toLowerCase() ===
                    selectedCity?.toLowerCase() && "bg-secondary text-white"
                }
                ${
                  regencies?.nama?.toLowerCase().startsWith(inputValueofCity)
                    ? "block"
                    : "hidden"
                }`}
                onClick={() => {
                  if (
                    regencies?.nama?.toLowerCase() !==
                    selectedCity.toLowerCase()
                  ) {
                    sessionStorage.setItem("namawilayah", regencies.nama);
                    setSelectedCity(regencies?.nama);
                    sessionStorage.setItem("idkota", regencies.id);
                    sessionStorage.setItem("namakota", regencies.nama);
                    setOpenCity(false);
                    setInputValueofCity("");
                    updatePeta(regencies.id);
                    setWilayahID(regencies.id);
                    setSelectedYears(sessionStorage.getItem("yearss"));
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
            onClick={() => setOpenYears(!openYears)}
            className="bg-[#ebebeb] w-full p-2 flex items-center justify-center rounded-[10px]"
          >
            {selectedYears
              ? selectedYears?.length > 12
                ? selectedYears?.substring(0, 12) + "..."
                : selectedYears
              : "Tahun"}
            <FontAwesomeIcon
              icon={faChevronDown}
              color="#24445A"
              className={`ml-[120px] w-[10px] h-[20px] ${
                openYears && "rotate-180"
              }`}
            />
          </div>
          <div
            className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${openYears ? "max-h-auto" : "hidden"}`}
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
              onChange={(e) =>
                setInputValueofYears(e.target.value.toLowerCase())
              }
              placeholder="Cari Tahun"
              className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
            />
          </div>
          <ul
            className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-auto 
              ${openYears ? "max-h-[240px]" : "max-h-[0]"}`}
          >
            {years?.map((tahunn) => (
              <li
                key={tahunn?.tahun}
                className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${
                  tahunn?.tahun?.toLowerCase() ===
                    selectedYears?.toLowerCase() && "bg-secondary text-white"
                }

                ${
                  tahunn?.tahun?.toLowerCase().startsWith(inputValueofYears)
                    ? "block"
                    : "hidden"
                }`}
                onClick={() => {
                  if (
                    tahunn?.tahun?.toLowerCase() !== selectedYears.toLowerCase()
                  ) {
                    setSelectedYears(tahunn?.tahun);
                    setOpenYears(false);
                    setInputValueofYears("");
                    sessionStorage.setItem("yearss", tahunn?.tahun);
                    updatePeta(wilayahID);
                  }
                }}
              >
                {tahunn?.tahun}
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
        <div className="text-[20px] text-secondary mt-[5px]">
          <p className="font-bold">{Math.round(luaswilayah).toLocaleString().replace(/,/g, '.')}</p>
          <p className="font-regular">km²</p>
        </div>
        <div className="flex gap-[10px]">
          <div className="hover-container">
            <img src={dataranicon} alt="" className="w-20" />
            <span className="hover-text w-[150%] mb-[10px]">{datarannama}</span>
          </div>
          <a href="/Jelajah-Profil">
            <img src={people} alt="" className="w-20" />
          </a>
          <div className="hover-container">
            <img src={sektoricon} alt="" className="w-20" />
            <span className="hover-text w-[150%] mb-[10px]">{sektornama}</span>
          </div>
        </div>
        <div className="text-[20px] text-secondary mt-[5px]">
          <p className="font-bold">{Math.round(data_Penduduk).toLocaleString().replace(/,/g, '.')}</p>
          <p className="font-regular">10³ Jiwa</p>
        </div>
      </div>

      {/* DROPDOWN DATASET 1 */}
      <div className="flex gap-[80px] mt-[40px]">
        <div className="">
          <h1 className="text-secondary text-[14px] font-semibold ml-[45px]">
            DATASET 1
          </h1>
          <div className="w-[167px] h-[41px] rounded-[10px] text-white border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg mt-[10px] mb-[10px] cursor-pointer" id="parentDropdown">
            <div
              onClick={() => setOpenParents(!openParents)}
              className="bg-secondary w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
            >
              {selectedParents
                ? selectedParents?.length > 20
                  ? selectedParents?.substring(0, 20) + "..."
                  : selectedParents
                : "Pilih"}
              <FontAwesomeIcon
                icon={faChevronDown}
                color="white"
                className={`ml-[20px] w-[10px] h-[20px] ${
                  openParents && "rotate-180"
                }`}
              />
            </div>
            <ul
              className={`bg-secondary mt-2 rounded-[10px] max-h-60 overflow-y-auto
                ${openParents ? "max-h-[240px]" : "max-h-[0]"}`}
            >
              {parents?.map((parentnya) => (
                <li
                  key={parentnya?.nama}
                  className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] text-center`}
                  onClick={() => {
                    updateParents(parentnya.nama, selectedParents, parentnya.id)
                    sessionStorage.setItem("idParent", parentnya.id);
                    sessionStorage.setItem("namaParent", parentnya.nama);
                    setIdParent(parentnya.id);
                    if (parentnya.id !== null) {
                      document.getElementById("anakanparent").classList.remove("hidden")
                    }
                  }}
                >
                  {parentnya?.nama}
                </li>
              ))}
            </ul>
            {/* DROPDOWN ANAKAN PARENT */}
            <div id="anakanparent" className="hidden w-[167px] h-[41px] rounded-[10px] text-white border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg mt-[10px] mb-[10px] cursor-pointer">
              <div
                onClick={() => setOpenSelectFilter(!openSelectFilter)}
                className="bg-third w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
              >
                {selectedSelectFilter
                  ? selectedSelectFilter?.length > 20
                    ? selectedSelectFilter?.substring(0, 20) + "..."
                    : selectedSelectFilter
                  : "Pilih"}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color="white"
                  className={`ml-[20px] w-[10px] h-[20px] ${
                    openSelectFilter && "rotate-180"
                  }`}
                />
            </div>

              <ul
                className={`bg-third mt-2 rounded-[10px] max-h-60 overflow-y-auto
                ${openSelectFilter ? "max-h-[240px]" : "max-h-[0]"}`}
              >
                {selectFilter?.map((filternya) => (
                  <li
                    key={filternya?.id}
                    className={`p-2 text-[12px] hover:bg-[#a4b6b9] hover:text-secondary rounded-[10px] text-center`}
                    onClick={() => {
                      updateSelectFilter(filternya.nama, selectedSelectFilter, idParent, filternya.id)
                    }}
                  >
                    {filternya?.nama}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-[100px]">
        <Timeseries/>
      </div>
    </div>
  );
};

export default Utakmain;
