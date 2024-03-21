import React, { useState, useEffect } from "react";
import map from "../../assets/icons/peta.png";
import geo from "../../assets/icons/geodating.svg";
import people from "../../assets/icons/people.svg";
import industri from "../../assets/icons/industri.svg";
import Switchbtn from "../../components/Switchbtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import bulat from "../../assets/circ.svg";
import "../../style/Switchbtn.css";
import "../../style/Components.css";

const Jelajahmain = () => {
  const [activeTab, setActiveTab] = useState("provinsi");

  const toggleTab = () => {
    setActiveTab(activeTab === "provinsi" ? "nasional" : "provinsi");
    Kategori();
  };

  const SwitchBtn = ({ switcher, setSwitcher }) => (
    <div className="switch" onClick={setSwitcher}>
      <input type="checkbox" id="toggle" checked={switcher === "nasional"} />
      <label htmlFor="toggle" className="slider"></label>
    </div>
  );

  ///FETCHING DROPDOWN PROVINSI
  const [provincess, setProvinces] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [openProvinsi, setOpenProvinsi] = useState(false);
  const [getInfoProvinsi, setGetInfoProvinsi] = useState(null);
  const [wilayahID, setWilayahID] = useState(null);
  const [is_province, askIsProvince] = useState()

  ///FETCHING DROPDOWN KOTA
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

  ///FETCHING DROPDOWN TAHUN
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

  ///UPDATE PETANYA DORA THE EXPLORER
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

  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/provinces")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data.data);
      });
  }, []);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
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

  const [showKeuanganDropdown, setShowKeuanganDropdown] = useState(false);
  const [showKeuanganAnakan1, setshowKeuanganAnakan1] = useState(false);

  const [showEkonomiDropdown, setShowEkonomiDropdown] = useState(false);
  const [showStatistikDropdown, setShowStatistikDropdown] = useState(false);

  const [selectedKeuanganOption, setSelectedKeuanganOption] = useState("Pilih");
  const [selectedKeuanganAnakanOption1, setselectedKeuanganAnakanOption1] =
    useState("Pilih");
  const [selectedEkonomiOption, setSelectedEkonomiOption] = useState("Pilih");
  const [selectedStatistikOption, setSelectedStatistikOption] =
    useState("Pilih");

  const toggleKeuanganDropdown = () => {
    setShowKeuanganDropdown(!showKeuanganDropdown);
    setOpenParent(!openParent);
    setOpenChild(!openChild);
    setShowEkonomiDropdown(false);
    setShowStatistikDropdown(false);
  };

  const toggleKeuanganAnakan1 = () => {
    setshowKeuanganAnakan1(!showKeuanganAnakan1);
    setOpenParent(!openParent);
    setShowEkonomiDropdown(false);
    setShowStatistikDropdown(false);
  };

  const toggleEkonomiDropdown = () => {
    setShowEkonomiDropdown(!showEkonomiDropdown);
    setOpenParent(!openParent);
    setShowKeuanganDropdown(false);
    setShowStatistikDropdown(false);
  };

  const toggleStatistikDropdown = () => {
    setShowStatistikDropdown(!showStatistikDropdown);
    setOpenParent(!openParent);
    setShowKeuanganDropdown(false);
    setShowEkonomiDropdown(false);
  };

  ///FETCHING DROPDOWN PARENT
  const [parent, setParent] = useState(null);
  const [inputValueParent, setInputValueParent] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [openParent, setOpenParent] = useState(false);
  // const [getInfoParent, setGetInfoParent] = useState(null);

  ///UPDATE DATA KOTA BERDASARKAN DATA PROVINSI
  function updatePilihan() {
    fetch("https://api.otonometer.neracaruang.com/api/filter-parent")
      .then((response) => response.json())
      .then((result) => {
        setParent(result.data);
        console.log(result.data);
      });
  }

  const [selectedd, setSelectedd] = useState(null);

  function updateSelectedd(parent_id) {
    fetch(
      "https://api.otonometer.neracaruang.com/api/filter-select?parent_id=" +
        parent_id
    )
      .then((response) => response.json())
      .then((result) => {
        setSelectedd(result.data);
        setParent(result.data);
        console.log(result.data);
      });
  }

  const [child, setChild] = useState(null);
  const [inputValueChild, setInputValueChild] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const [openChild, setOpenChild] = useState(false);

  function updateChild(satuan_id, parent_id) {
    fetch(
      "https://api.otonometer.neracaruang.com/api/filter-child?satuan_id=" +
        satuan_id +
        "&parent_id=" +
        parent_id
    )
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result.data)) {
          setChild(result.data);
          console.log(result.data);
        } else {
          console.error("Response tidak mengandung array:", result);
        }
      })
      .catch((error) => {
        console.error("Error saat fetching data:", error);
      });
  }



  ///FETCHING PERINGKAT JELAJAH
  const [bidang, setBidang] = useState("4");
  const [rankData, setRankData ] = useState(null);
  const [dataChart, setDataChart ] = useState("");
  
  function Kategori(){
    var params = new URLSearchParams()
    params.append("tahun",selectedYears)
    params.append("id_wilayah",wilayahID)
    params.append("bidang",bidang)
    params.append("is_province",is_province)
    params.append("province_rank", activeTab === "provinsi" ? true : false)
    params.append("perkapita", true)

    fetch("https://api.otonometer.neracaruang.com/api/jelajah?"+ params.toString(), requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var data = result.data.rank;
        var highestValue = data[0].nilai;
        var elementChart = []
        
        for(var i = 0; i < data.length; i++){
          data[i].persentase = Math.round(data[i].nilai/highestValue*100);
          var angka = data[i].persentase
          elementChart.push(
          <div className="flex mt-[20px] w-[1153px] items-center justify-between px-[30px]">
            <div className="w-[195px] text-left">
              <p className="font-bold text-secondary text-[24px] uppercase">
              {data[i].nama}
              </p>
            </div>

            <div className="w-[660px] border-solid border-2 rounded-full border-secondary">
              <div className={`bg-secondary rounded-full border-2`} style={{width:angka+"%"}}>
                <p className="px-2 font-bold text-[20px] text-white ml-[20px]">{data[i].nilai}</p>
              </div>
            </div>
            <p className="text-right font-bold text-third text-[24px]">#{data[i].rank}</p>
          </div>
          )
        }
        setDataChart(elementChart);
        setRankData(data);
      })
  }
  return (
    <div className="flex flex-col mb-[150px] justify-center items-center max-lg:[1920px] mt-[80px]">
      <img
        src={bulat}
        alt=""
        className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10"
      />
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
                askIsProvince(true);
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
                    askIsProvince(false);
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
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>{luaswilayah}</p>
          <p>km²</p>
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
        <div className="text-[20px] font-bold italic text-[#24445A] mt-[5px]">
          <p>{jumlahpenduduk}</p>
          <p>10³ Jiwa</p>
        </div>
      </div>

      {/* OPSI */}
      <div className="flex mt-[24px] gap-[60px]">
        {/* TOMBOL KEUANGAN */}
        <button
          className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center "
          onClick={() => {
            updateSelectedd(1);
            toggleKeuanganDropdown();
            toggleKeuanganAnakan1();
            updateChild(1, 4);
          }}
        >
          <p>KEUANGAN</p>
        </button>

        {/* TOMBOL EKONOMI */}
        <button
          className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center "
          onClick={() => {
            updateSelectedd(2);
            toggleEkonomiDropdown();
            updateChild(1, 5);
            
          }}
        >
          <p>EKONOMI</p>
        </button>

        {/* TOMBOL STATISTIK */}
        <button
          className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center "
          onClick={() => {
            updateSelectedd(3);
            toggleStatistikDropdown();
          }}
        >
          <p>STATISTIK</p>
        </button>
      </div>

      {/* DROPDOWN "KEUANGAN" */}
      {showKeuanganDropdown &&
        !showEkonomiDropdown &&
        !showStatistikDropdown && (
          <div className="flex flex mt-[30px] gap-[60px]">
            {/* // Dropdown 1: Keuangan */}
            <div className="flex-col w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
              <div
                onClick={() => setOpenParent(!openParent)}
                className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
              >
                {selectedKeuanganOption}{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color="#24445A"
                  className={`ml-[20px] w-[10px] h-[20px] ${
                    openParent && "rotate-180"
                  }`}
                />
              </div>
              <div
                className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${openParent ? "max-h-auto" : "hidden"}`}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  color="#24445A"
                  style={{ opacity: "40%" }}
                  className="w-[10px] h-[20px] opacity-75"
                />
                <input
                  type="text"
                  value={inputValueParent}
                  onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                  placeholder="Cari"
                  className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
                />
              </div>
              <ul
                className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${openParent ? "max-h-[240px]" : "max-h-[0]"}`}
              >
                {parent?.map((parents) => (
                  <li
                    key={parents?.nama}
                    className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${
                  parents?.nama?.toLowerCase() ===
                    selectedParent?.toLowerCase() && "bg-secondary text-white"
                }
                ${
                  parents?.nama?.toLowerCase().startsWith(inputValueParent)
                    ? "block"
                    : "hidden"
                }`}
                    onClick={() => {
                      updateSelectedd(1);
                      setSelectedKeuanganOption(parents?.nama);
                      setOpenParent(false);
                      Kategori();
                    }}
                  >
                    {parents?.nama}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown 2: Keuangan */}
            {showKeuanganAnakan1 && (
              <div className="flex-col w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
                <div
                  onClick={() => setOpenChild(!openChild)}
                  className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
                >
                  {selectedKeuanganAnakanOption1}{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#24445A"
                    className={`ml-[20px] w-[10px] h-[20px] ${
                      openChild ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
        ${openChild ? "max-h-auto" : "hidden"}`}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="#24445A"
                    style={{ opacity: "40%" }}
                    className="w-[10px] h-[20px] opacity-75"
                  />
                  <input
                    type="text"
                    value={inputValueChild}
                    onChange={(e) =>
                      setInputValueChild(e.target.value.toLowerCase())
                    }
                    placeholder="Cari"
                    className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
                  />
                </div>
                <ul
                  className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
        ${openChild ? "max-h-[240px]" : "max-h-[0]"}`}
                >
                  {child &&
                    child.map((childs) => (
                      <li
                        key={childs?.nama}
                        className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
              ${
                childs?.nama?.toLowerCase() ===
                  selectedKeuanganAnakanOption1?.toLowerCase() &&
                "bg-secondary text-white"
              }
              ${
                childs?.nama?.toLowerCase().startsWith(inputValueChild)
                  ? "block"
                  : "hidden"
              }`}
                        onClick={() => {
                          setselectedKeuanganAnakanOption1(childs?.nama);
                          setOpenChild(false);
                        }}
                      >
                        {childs?.nama}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}

      {/* DROPDOWN "EKONOMI" */}
      {showEkonomiDropdown &&
        !showKeuanganDropdown &&
        !showStatistikDropdown && (
          <div className="flex flex mt-[30px] gap-[60px]">
            {/* Dropdown 1: Ekonomi */}
            <div className="w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
              <div
                onClick={() => setOpenParent(!openParent)}
                className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
              >
                {selectedEkonomiOption}{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  color="#24445A"
                  className={`ml-[20px] w-[10px] h-[20px] ${
                    openParent && "rotate-180"
                  }`}
                />
              </div>
              <div
                className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
          ${openParent ? "max-h-auto" : "hidden"}`}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  color="#24445A"
                  style={{ opacity: "40%" }}
                  className="w-[10px] h-[20px] opacity-75"
                />
                <input
                  type="text"
                  value={inputValueParent}
                  onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                  placeholder="Cari"
                  className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
                />
              </div>
              <ul
                className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${openParent ? "max-h-[240px]" : "max-h-[0]"}`}
              >
                {parent?.map((parents) => (
                  <li
                    key={parents?.nama}
                    className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
                ${
                  parents?.nama?.toLowerCase() ===
                    selectedParent?.toLowerCase() && "bg-secondary text-white"
                }
                ${
                  parents?.nama?.toLowerCase().startsWith(inputValueParent)
                    ? "block"
                    : "hidden"
                }`}
                    onClick={() => {
                      updateSelectedd(2);
                      setSelectedEkonomiOption(parents?.nama);
                      setOpenParent(false);
                    }}
                  >
                    {parents?.nama}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown 2: Ekonomi */}
            {showKeuanganAnakan1 && (
              <div className="flex-col w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
                <div
                  onClick={() => setOpenChild(!openChild)}
                  className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
                >
                  {selectedKeuanganAnakanOption1}{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#24445A"
                    className={`ml-[20px] w-[10px] h-[20px] ${
                      openChild ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
        ${openChild ? "max-h-auto" : "hidden"}`}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="#24445A"
                    style={{ opacity: "40%" }}
                    className="w-[10px] h-[20px] opacity-75"
                  />
                  <input
                    type="text"
                    value={inputValueChild}
                    onChange={(e) =>
                      setInputValueChild(e.target.value.toLowerCase())
                    }
                    placeholder="Cari"
                    className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
                  />
                </div>
                <ul
                  className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
        ${openChild ? "max-h-[240px]" : "max-h-[0]"}`}
                >
                  {child &&
                    child.map((childs) => (
                      <li
                        key={childs?.nama}
                        className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
              ${
                childs?.nama?.toLowerCase() ===
                  selectedKeuanganAnakanOption1?.toLowerCase() &&
                "bg-secondary text-white"
              }
              ${
                childs?.nama?.toLowerCase().startsWith(inputValueChild)
                  ? "block"
                  : "hidden"
              }`}
                        onClick={() => {
                          setselectedKeuanganAnakanOption1(childs?.nama);
                          setOpenChild(false);
                        }}
                      >
                        {childs?.nama}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}

      {/* DROPDOWN "STATISTIK" */}
      {showStatistikDropdown && (
        <div className="flex flex-col mt-[30px] gap-y-[10px]">
          {/* FETCHING PARENT */}
          <div className="w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
            <div
              onClick={() => setOpenParent(!openParent)}
              className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
            >
              {selectedStatistikOption}{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                color="#24445A"
                className={`ml-[20px] w-[10px] h-[20px] ${
                  openParent && "rotate-180"
                }`}
              />
            </div>
            <div
              className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
 ${openParent ? "max-h-auto" : "hidden"}`}
            >
              <FontAwesomeIcon
                icon={faSearch}
                color="#24445A"
                style={{ opacity: "40%" }}
                className="w-[10px] h-[20px] opacity-75"
              />
              <input
                type="text"
                value={inputValueParent}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Cari"
                className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
              />
            </div>
            <ul
              className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
     ${openParent ? "max-h-[240px]" : "max-h-[0]"}`}
            >
              {parent?.map((parents) => (
                <li
                  key={parents?.nama}
                  className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px] 
       ${
         parents?.nama?.toLowerCase() === selectedParent?.toLowerCase() &&
         "bg-secondary text-white"
       }
       ${
         parents?.nama?.toLowerCase().startsWith(inputValueParent)
           ? "block"
           : "hidden"
       }`}
                  onClick={() => {
                    updateSelectedd(3);
                    setSelectedStatistikOption(parents?.nama);
                    setOpenParent(false);
                  }}
                >
                  {parents?.nama}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* SWITCH */}
      <div className="flex gap-[50px] items-center justify-center text-[18px] font-semibold text-secondary mt-[48px] text-[20px]">
        <p className={activeTab === "nasional" ? "inactive-text" : ""}>
          PROVINSI
        </p>
        <SwitchBtn switcher={activeTab} onSelect={toggleTab} />
        <p className={activeTab === "provinsi" ? "inactive-text" : ""}>
          NASIONAL
        </p>
      </div>
      {/* PERINGKAT DAERAH */}
      <div className="text-secondary text-center mt-[48px]">
        <p className="text-[32px] font-extrabold text-secondary">
          PERINGKAT {infoDaerah}
        </p>
        <p className="text-[24px] font-regular italic">
          (Rp10<sup>3</sup>/kapita)
        </p>
      </div>

      {/* DATA */}
      {activeTab === "provinsi" && (
        <div className="flex flex-col items-center justify-center">
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
          {dataChart}

          <div className="flex mt-[20px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">
                KOTA BANDUNG
              </p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <div className="w-[100%] bg-secondary rounded-full">
                <p className="px-2 font-bold text-[20px] text-white">100</p>
              </div>
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
