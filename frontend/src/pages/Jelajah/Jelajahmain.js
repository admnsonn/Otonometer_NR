import React, { useState, useEffect } from "react";
import map from "../../assets/icons/peta.png";
import people from "../../assets/icons/people.svg";
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
import { element } from "prop-types";

const Jelajahmain = () => {
  const [activeTab, setActiveTab] = useState("nasional");

  const toggleTab = () => {
    setActiveTab(activeTab === "provinsi" ? "nasional" : "provinsi");
    Kategori();
  };

  const SwitchBtn = ({ switcher, setSwitcher }) => (
    <div id="switcher" className="hidden switch " onClick={setSwitcher}>
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
  const [is_province, askIsProvince] = useState();

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
  const [showKeuanganOption2, setshowKeuanganOption2] = useState(false);

  const [selectedKeuanganOption, setSelectedKeuanganOption] = useState({});
  console.log(
    "🚀 ~ Jelajahmain ~ selectedKeuanganOption:",
    selectedKeuanganOption
  );

  const toggleKeuanganDropdown = () => {
    // if (!showKeuanganDropdown) {
    //   setSelectedKeuanganOption("Pilih");
    // }
    setShowKeuanganDropdown(!showKeuanganDropdown);
    setOpenSektor(!openSektor);
  };

  const toggleKeuanganAnakan1 = () => {
    setshowKeuanganAnakan1(!showKeuanganAnakan1);
    setOpenAnakan(!openAnakan);
  };

  const toggleKeuanganAnakan2 = () => {
    setshowKeuanganOption2(!showKeuanganOption2);
    setOpenAnakan1(!openAnakan1);
  };

  ///FETCHING DROPDOWN PARENT
  const [sektor, setSektor] = useState([]);
  const [sektorfilter, setSektorFilter] = useState([]);

  const [draft, setDraft] = useState({});
  // Const Parent
  const [selectedSektor, setSelectedSektor] = useState("");
  const [openSektor, setOpenSektor] = useState(false);
  const [inputValueSektor, setInputValueSektor] = useState("");
  // Const Anakan
  const [selectedAnakan, setSelectedAnakan] = useState("");
  const [openAnakan, setOpenAnakan] = useState(false);
  const [inputValueAnakan, setInputValueAnakan] = useState("");
  // Const Anakan1
  const [selectedAnakan1, setSelectedAnakan1] = useState("");
  const [openAnakan1, setOpenAnakan1] = useState(false);
  const [inputValueAnakan1, setInputValueAnakan1] = useState("");

  const [dropdown, setDropdown] = useState([]);
  console.log("🚀 ~ Jelajahmain ~ dropdown:", dropdown);

  const [listkey, setListkey] = useState({});

  function updateSektor() {
    fetch("https://api.otonometer.neracaruang.com/api/sektor/2020")
      .then((response) => response.json())
      .then((result) => {
        // var customdata = [];
        // result.data.forEach((element) => {
        //   customdata[element.id] = element;
        // });
        // setSektor(customdata);
        setSektor(result.data);
        setInputValueSektor("");
        setInputValueAnakan("");
        setInputValueAnakan1("");
        console.log(result.data);
      });
  }
  console.log(sektor);
  console.log(draft);

  function updateFilter(param) {
    fetch("https://api.otonometer.neracaruang.com/api/sektor/2020?" + param)
      .then((response) => response.json())
      .then((result) => {
        setSektorFilter(result.data);
        console.log(result.data);
      });
  }

  useEffect(() => {
    fetch("https://api.otonometer.neracaruang.com/api/sektor/2020")
      .then((response) => response.json())
      .then((data) => {
        setSektor(data.data);
      });
  }, []);

  var localstate = listkey;

  function setcontentdropdwon(index, id, data, namas) {
    console.log("🚀 ~ data.forEach ~ data:", data);
    console.log("🚀 ~ data.forEach ~ dropdown:", dropdown);
    data.forEach((element) => {
      //search by id
      if (element.id == id) {
        // setDropdown(dropdown[]);
        // var list = [...dropdown];
        var list = [];
        for (var i = 0; i < dropdown.length; i++) {
          if (i < index) {
            list.push(dropdown[i]);
          }
        }

        localstate["setOpenSektor_" + element.id] = false;
        localstate["selectedKeuanganOption_" + element.id] = null;
        localstate["searchSektor_" + element.id] = "";
        localstate["selectedSektor_" + element.id] = "";
        setListkey(localstate);
        listkey["selectedKeuanganOption_" + element.id] = element.nama;
        console.log(listkey);

        //get list children
        var listdropdown = [];
        console.log("🚀 ~ data.forEach ~ listdropdown:", listdropdown);
        var listItemDropDown = [];
        console.log("🚀 ~ data.forEach ~ listItemDropDown:", listItemDropDown);
        element.children.forEach((sector) => {
          listItemDropDown.push(sector);
          listdropdown.push(
            // <React.Fragment>
            <li
              key={sector?.nama}
              className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px]
              ${
                sector?.nama?.toLowerCase() ===
                  listkey["selectedSektor_" + element.id].toLowerCase() &&
                "bg-secondary text-white"
              }
              ${
                sector?.nama
                  ?.toLowerCase()
                  .startsWith(listkey["searchSektor_" + element.id])
                  ? "block"
                  : "hidden"
              }`}
              onClick={() => {}}
            >
              {sector?.nama}
            </li>
            // </React.Fragment>
          );
        });
        console.log("dropdown list");
        console.log(listdropdown);
        console.log(listdropdown.toString());

        list[index] = {
          view: (
            <div className="flex mt-[30px] justify-between">
              <div className="flex-col w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer">
                <div
                  onClick={() => {
                    var states = listkey;
                    states["setOpenSektor_" + element.id] =
                      !states["setOpenSektor_" + element.id];
                    setListkey(states);
                    console.log("setOpenSektor_" + element.id);
                    console.log(listkey);
                  }}
                  className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
                >
                  {listkey["selectedKeuanganOption_" + element.id]}
                  {"Pilih"}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#24445A"
                    className={`ml-[20px] w-[10px] h-[20px] ${
                      listkey["selectedKeuanganOption_" + element.id] &&
                      "rotate-180"
                    }`}
                  />
                </div>

                <div
                  className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
              ${
                listkey["setOpenSektor_" + element.id] ? "max-h-auto" : "hidden"
              }`}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="#24445A"
                    style={{ opacity: "40%" }}
                    className="w-[10px] h-[20px] opacity-75"
                  />
                  <input
                    type="text"
                    value={inputValueSektor}
                    onChange={(e) => {
                      var states = listkey;
                      states["searchSektor_" + element.id] =
                        e.target.value.toLowerCase();
                      setListkey(states);
                    }}
                    placeholder="Cari"
                    className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
                  />
                </div>
                <ul
                  className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${
                listkey["setOpenSektor_" + element.id]
                  ? "max-h-[240px]"
                  : "max-h-[0]"
              }`}
                >
                  {/* {listdropdown.map((list) => {
                <React.Fragment>{list}</React.Fragment>
              })} */}
                  {listdropdown}
                </ul>
              </div>
            </div>
          ),
          element: element,
          sector: listItemDropDown,
          index: index + 1,
        };
        // <React.Fragment>

        // </React.Fragment>
        // dropdown[index] = list[index]
        console.log("list dropdown:");
        console.log(list);
        console.log(list.toString());
        if (listItemDropDown.length > 0) {
          setDropdown(list);
        }
        // dropdown[index] = list[index]
      }
      console.log("🚀 ~ data.forEach ~ listdropdown:", listdropdown);
    });
    console.log(dropdown);
  }

  function updateOptions(id, data) {
    console.log("🚀 ~ updateOptions ~ data:", data);
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.id === id) {
        setSelectedKeuanganOption({
          ...selectedKeuanganOption,
          [element.nama + id]: element.nama,
        });
        setDraft({ ...draft, ["label" + index]: id });
      }
      console.log("🚀 ~ updateOptions ~ element:", element);
    }
  }

  ///FETCHING PERINGKAT JELAJAH
  const [bidang, setBidang] = useState("4");
  const [rankData, setRankData] = useState(null);
  const [dataChart, setDataChart] = useState("");
  const [dataChartNasional, setDataChartNasional] = useState("");
  const [dataChartSelected, setDataChartSelected] = useState("");
  const [angkaTertinggi, setAngkaTertinggi] = useState(0);

  function Kategori() {
    var params = new URLSearchParams();
    params.append("tahun", selectedYears);
    params.append("id_wilayah", wilayahID);
    params.append("bidang", bidang);
    params.append("is_province", is_province);
    params.append("province_rank", activeTab === "provinsi" ? true : false);
    params.append("perkapita", true);

    fetch(
      "https://api.otonometer.neracaruang.com/api/jelajah?" + params.toString(),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        var data = result.data.rank;
        var highestValue = data[0].nilai;
        setAngkaTertinggi(highestValue);
        var elementChart = [];

        var nasionalisme = result.data.avg;
        setDataChartNasional(nasionalisme);
        var wilayahTerpilih = result.data.selected;
        setDataChartSelected(wilayahTerpilih);

        for (var i = 0; i < data.length; i++) {
          data[i].persentase = Math.round((data[i].nilai / highestValue) * 100);
          var angka = data[i].persentase;
          elementChart.push(
            <section>
              <div className="hidden md:hidden xl:block">
                <div className="flex mt-[20px] w-full items-center justify-center px-[30px]">
                  <div className="w-[300px] text-left">
                    <p className="font-bold text-secondary text-[24px] uppercase">
                      {data[i].nama}
                    </p>
                  </div>

                  <div className="w-[660px] border-solid border-[1px] rounded-full border-secondary p-[1px]">
                    <div
                      className={`bg-secondary rounded-full border-1 ${
                        angka === 0 ? "" : "bg-none border-none"
                      }`}
                      style={{
                        width: angka <= 5 && angka >= 1 ? "5%" : angka + "%",
                      }}
                    >
                      <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                        {Math.round(data[i].nilai)
                          .toLocaleString()
                          .replace(/,/g, ".")}
                      </p>
                    </div>
                  </div>

                  <p className="w-[100px] text-right font-bold text-third text-[24px]">
                    #{data[i].rank}
                  </p>
                </div>
              </div>

              <div className="hidden md:block xl:hidden">
                <div className="flex w-[700px] items-center justify-between px-[30px] mt-[20px]">
                  <div className="w-full">
                    <div className="flex justify-between w-full">
                      <p className="font-bold text-secondary text-[24px] uppercase">
                        {data[i].nama}
                      </p>
                      <p className="text-right font-bold text-third text-[24px]">
                        #{data[i].rank}
                      </p>
                    </div>
                    <div className="w-[660px] border-solid border-2 rounded-full border-secondary">
                      <div
                        className={`bg-secondary rounded-full border-2`}
                        style={{ width: angka + "%" }}
                      >
                        <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                          {Math.round(data[i].nilai)
                            .toLocaleString()
                            .replace(/,/g, ".")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <div className="flex w-[300px] items-center justify-between px-[30px] mt-[20px]">
                  <div className="w-full">
                    <div className="flex justify-between w-full">
                      <p className="font-bold text-secondary text-[24px] uppercase">
                        {data[i].nama}
                      </p>
                      <p className="text-right font-bold text-third text-[24px]">
                        #{data[i].rank}
                      </p>
                    </div>
                    <div className="w-full border-solid border-2 rounded-full border-secondary">
                      <div
                        className={`bg-secondary rounded-full border-2`}
                        style={{ width: angka + "%" }}
                      >
                        <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                          {Math.round(data[i].nilai)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
        setDataChart(elementChart);
        setRankData(data);
      });
  }
  const Nasional = (nasionalisme, highestValue) => {
    var angkaNasional = Math.round((nasionalisme.nilai / highestValue) * 100);
    var convertAngkaNasional = angkaNasional;
    return (
      <section className="text-shadow">
        <div className="hidden md:hidden xl:block">
          <div className="flex mt-[20px] w-full items-center justify-center px-[30px]">
            <div className="w-[300px] text-left">
              <p className="font-bold text-secondary text-[24px] uppercase">
                {nasionalisme.nama}
              </p>
            </div>

            <div className="w-[660px] border-solid border-[1px] rounded-full border-secondary">
              <div
                className={`bg-secondary rounded-full border-[1px] ${
                  convertAngkaNasional ? 0 : "bg-none border-none"
                }`}
                style={{ width: convertAngkaNasional + "%" }}
              >
                <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                  {Math.round(nasionalisme.nilai)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>
            </div>
            <p className="w-[100px] text-right font-bold text-third text-[24px]">
              {" "}
            </p>
          </div>
        </div>

        <div className="hidden md:block xl:hidden">
          <div className="flex w-[700px] items-center justify-between px-[30px] mt-[20px]">
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className="font-bold text-secondary text-[24px] uppercase">
                  {nasionalisme.nama}
                </p>
                <p className="text-right font-bold text-third text-[24px]"> </p>
              </div>
              <div className="w-[660px] border-solid border-2 rounded-full border-secondary">
                <div
                  className={`bg-secondary rounded-full border-2`}
                  style={{ width: convertAngkaNasional + "%" }}
                >
                  <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                    {Math.round(nasionalisme.nilai)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex w-[300px] items-center justify-between px-[30px] mt-[20px]">
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className="font-bold text-secondary text-[24px] uppercase">
                  {nasionalisme.nama}
                </p>
                <p className="text-right font-bold text-third text-[24px]"> </p>
              </div>
              <div className="w-full border-solid border-2 rounded-full border-secondary">
                <div
                  className={`bg-secondary rounded-full border-2`}
                  style={{ width: convertAngkaNasional + "%" }}
                >
                  <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                    {Math.round(nasionalisme.nilai)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Provinsi = (wilayahTerpilih, highestValue) => {
    var angkaProvinsi = Math.round(
      (wilayahTerpilih.nilai / highestValue) * 100
    );
    var convertAngkaProvinsi = angkaProvinsi;
    return (
      <section>
        <div className="hidden md:hidden xl:block">
          <div className="flex mt-[20px] w-full items-center justify-center px-[30px]">
            <div className="w-[300px] text-left">
              <p className="font-bold text-secondary text-[24px] uppercase">
                {wilayahTerpilih.nama}
              </p>
            </div>

            <div className="w-[660px] border-solid border-[1px] rounded-full border-secondary">
              <div
                className={`bg-secondary rounded-full border-[1px] ${
                  convertAngkaProvinsi ? 0 : "bg-none border-none"
                }`}
                style={{ width: convertAngkaProvinsi + "%" }}
              >
                <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                  {Math.round(wilayahTerpilih.nilai)
                    .toLocaleString()
                    .replace(/,/g, ".")}
                </p>
              </div>
            </div>
            <p className="w-[100px] text-right font-bold text-third text-[24px]">
              #{wilayahTerpilih.rank}
            </p>
          </div>
        </div>

        <div className="hidden md:block xl:hidden">
          <div className="flex w-[700px] items-center justify-between px-[30px] mt-[20px]">
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className="font-bold text-secondary text-[24px] uppercase">
                  {wilayahTerpilih.nama}
                </p>
                <p className="text-right font-bold text-third text-[24px]"> </p>
              </div>
              <div className="w-[660px] border-solid border-2 rounded-full border-secondary">
                <div
                  className={`bg-secondary rounded-full border-2`}
                  style={{ width: convertAngkaProvinsi + "%" }}
                >
                  <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                    {Math.round(wilayahTerpilih.nilai)}
                  </p>
                </div>
              </div>
              <p className="text-right font-bold text-third text-[24px]">
                #{wilayahTerpilih.rank}
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex w-[300px] items-center justify-between px-[30px] mt-[20px]">
            <div className="w-full">
              <div className="flex justify-between w-full">
                <p className="font-bold text-secondary text-[24px] uppercase">
                  {wilayahTerpilih.nama}
                </p>
                <p className="text-right font-bold text-third text-[24px]"> </p>
              </div>
              <div className="w-full border-solid border-2 rounded-full border-secondary">
                <div
                  className={`bg-secondary rounded-full border-2`}
                  style={{ width: convertAngkaProvinsi + "%" }}
                >
                  <p className="px-2 font-bold text-[20px] text-white ml-[20px]">
                    {Math.round(wilayahTerpilih.nilai)}
                  </p>
                </div>
              </div>
              <p className="text-right font-bold text-third text-[24px]">
                #{wilayahTerpilih.rank}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  var data_Penduduk = jumlahpenduduk / 1000;
  const [testHandlePeringkatnya, setTestHandlePeringkatnya] = useState(false);
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
                  sessionStorage.setItem("namawilayah", "Semua");
                  setInfoDaerah("Semua");
                  setSelectedCity("Semua");
                  setDataranicon("Semua");
                  setSelectedYears(sessionStorage.getItem("yearss"));
                  updatePeta(provinces.id);
                  askIsProvince(true);
                  setActiveTab("nasional");
                  document.getElementById("switcher").classList.add("hidden");
                  sessionStorage.setItem("namakota", "Semua");
                  sessionStorage.setItem("idkota", provinces.id);
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
                setActiveTab("nasional");
                document.getElementById("switcher").classList.add("hidden");
                sessionStorage.setItem("idkota", wilayahID);
                sessionStorage.setItem("namakota", "Semua");
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
                    setActiveTab("provinsi");
                    document
                      .getElementById("switcher")
                      .classList.remove("hidden");
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
          <p className="font-bold">
            {Math.round(luaswilayah).toLocaleString().replace(/,/g, ".")}
          </p>
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
          <p className="font-bold">
            {Math.round(data_Penduduk).toLocaleString().replace(/,/g, ".")}
          </p>
          <p className="font-regular">10³ Jiwa</p>
        </div>
      </div>

      {/* OPSI */}
      <div className="flex mt-[24px] gap-[60px]">
        {/* TOMBOL KEUANGAN */}
        {sektor.map((items) => (
          <button
            className="flex bg-third w-[167px] h-[40px] rounded-full text-secondary border-1 border-[f1f1f1] text-[14px] font-bold items-center justify-center "
            onClick={() => {
              toggleKeuanganDropdown();
              toggleKeuanganAnakan1();
              toggleKeuanganAnakan2();
              setShowKeuanganDropdown(true);
              setcontentdropdwon(0, items.id, sektor);
              console.log("kategori: " + items.nama);
            }}
          >
            {items.nama}
          </button>
        ))}
      </div>

      {/* DROPDOWN "KEUANGAN" */}
      <div className="flex mt-[30px]">
        {/* Dropdown 1 */}
        {showKeuanganDropdown &&
          dropdown.some((item) => item.sector.length > 0) && (
            <div className="flex flex-wrap space-x-0 md:flex-nowrap md:space-x-4">
              {/* Tambahkan gap di sini */}
              {dropdown.map((item) =>  (
                <div
                  key={item.element.id}
                  className="flex-col w-[250px] h-auto text-secondary font-medium text-[14px] cursor-pointer"
                >
                  {console.log("🚀 ~ Jelajahmain ~ item:", item)}
                  <div
                    onClick={() => {
                      var states = listkey;
                      states["setOpenSektor_" + item.element.id] =
                        !states["setOpenSektor_" + item.element.id];
                      setListkey(states);
                      console.log(
                        "setOpenSektor_" +
                          item.element.id +
                          ":" +
                          listkey["setOpenSektor_" + item.element.id]
                      );
                      console.log(listkey);
                      Kategori();
                      setTestHandlePeringkatnya(true);

                      //get element search bar
                      var searchs = document.getElementById(
                        `search_sektor_${item.element.id}`
                      );
                      //get element fontawesome
                      var fontawesome = document.getElementById(
                        `fa_sektor_${item.element.id}`
                      );
                      //get element dropdown item
                      var dropdowns = document.getElementById(
                        `ul_sektor_${item.element.id}`
                      );
                      if (listkey["setOpenSektor_" + item.element.id]) {
                        //control search bar
                        searchs.classList.remove("hidden");
                        searchs.classList.add("max-h-auto");

                        //control arrow fontawesome
                        fontawesome.classList.add("rotate-180");

                        //control dropdown
                        dropdowns.classList.remove("max-h-[0]");
                        dropdowns.classList.add("max-h-auto");
                      } else {
                        searchs.classList.remove("max-h-auto");
                        searchs.classList.add("hidden");

                        //control arrow fontawesome
                        fontawesome.classList.remove("rotate-180");

                        //control
                        dropdowns.classList.remove("max-h-auto");
                        dropdowns.classList.add("max-h-[0]");
                      }
                    }}
                    className="bg-[#ebebeb] w-full p-2 px-[30px] flex items-center justify-between rounded-[10px]"
                  >
                    {/* {item.sector.map(data => (
                      
                    ))} */}
                    <p id={`label_sektor_${item.element.id}`}>
                      {selectedKeuanganOption[
                        item.element.nama + item.element.id
                      ]
                        ? selectedKeuanganOption[
                            item.element.nama + item.element.id
                          ]
                        : "Pilih"}
                    </p>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id={`fa_sektor_${item.element.id}`}
                      color="#24445A"
                      className={`ml-[20px] w-[10px] h-[20px] ${
                        listkey["setOpenSektor_" + item.element.id] &&
                        "rotate-180"
                      }`}
                    />
                  </div>

                  <div
                    id={`search_sektor_${item.element.id}`}
                    className={`flex items-center px-2 sticky top-0 bg-[#ebebeb] w-full mt-2 rounded-[10px]
              ${
                listkey["setOpenSektor_" + item.element.id]
                  ? "max-h-auto"
                  : "hidden"
              }`}
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      color="#24445A"
                      style={{ opacity: "40%" }}
                      className="w-[10px] h-[20px] opacity-75"
                    />
                    <input
                      type="text"
                      value={inputValueSektor}
                      onChange={(e) => {
                        var states = listkey;
                        states["searchSektor_" + item.element.id] =
                          e.target.value.toLowerCase();
                        setListkey(states);
                      }}
                      placeholder="Cari"
                      className="text-secondary placeholder:text-opacity-75 p-2 outline-none w-full text-[12px] font-medium bg-[#ebebeb]"
                    />
                  </div>
                  <ul
                    id={`ul_sektor_${item.element.id}`}
                    className={`bg-[#ebebeb] mt-2 rounded-[10px] max-h-60 overflow-y-scroll mini-scrollbar
              ${
                listkey["setOpenSektor_" + item.element.id]
                  ? "max-h-[240px]"
                  : "max-h-[0]"
              }`}
                  >
                    {item.sector.map(
                      (sector) =>
                        sector.nama.toLowerCase() !==
                          listkey[
                            "selectedSektor_" + item.element.id
                          ].toLowerCase() && (
                          <li
                            key={sector?.nama}
                            className={`p-2 text-[12px] hover:bg-third hover:text-white rounded-[10px]
        ${
          sector?.nama?.toLowerCase() ===
            listkey["selectedSektor_" + item.element.id].toLowerCase() &&
          "bg-secondary text-white"
        }
        ${
          sector?.nama
            ?.toLowerCase()
            .startsWith(listkey["searchSektor_" + item.element.id])
            ? "block"
            : "hidden"
        }`}
                            onClick={() => {

                              setcontentdropdwon(
                                item.index,
                                sector.id,
                                item.element.children
                              );
                              updateOptions(sector.id, item.element.children);
                              document.getElementById(
                                `label_sektor_${item.element.id}`
                              ).innerHTML = sector?.nama;
                              setBidang(sector.id);

                            }}                
                          >
                            {sector?.nama}
                            {console.log(
                              "🚀 ~ Jelajahmain ~ sector:",
                              sector?.id
                            )}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          )}
      </div>

      {/* SWITCH */}
      <div
        id="switcher"
        className="hidden flex gap-[50px] items-center justify-center font-semibold text-secondary mt-[48px] text-[20px]"
      >
        <p className={activeTab === "nasional" ? "inactive-text" : ""}>
          NASIONAL
        </p>
        <SwitchBtn switcher={activeTab} setSwitcher={toggleTab} />
        <p className={activeTab === "provinsi" ? "inactive-text" : ""}>
          PROVINSI
        </p>
      </div>
      {/* PERINGKAT DAERAH */}
      <div className="text-secondary text-center mt-[48px]">
        <p className="text-[32px] font-extrabold text-secondary uppercase">
          PERINGKAT {infoDaerah}
        </p>
        <p className="text-[24px] font-regular italic">
          (Rp10<sup>3</sup>/kapita)
        </p>
      </div>

      {/* DATA */}
      {activeTab === "provinsi" && (
        <div
          className={`flex flex-col items-center justify-center ${
            testHandlePeringkatnya ? "false" : "hidden"
          }`}
        >
          {Nasional(dataChartNasional, angkaTertinggi)}
          {Provinsi(dataChartSelected, angkaTertinggi)}
          <hr />
          {dataChart}
        </div>
      )}

      {activeTab === "nasional" && (
        <div
          className={`flex flex-col items-center justify-center ${
            testHandlePeringkatnya ? "false" : "hidden"
          }`}
        >
          {Nasional(dataChartNasional, angkaTertinggi)}
          {Provinsi(dataChartSelected, angkaTertinggi)}
          <hr />
          {/* <div className="flex mt-[70px] w-[1153px] items-center justify-center gap-[80px]">
            <div className="w-[195px]">
              <p className="font-bold text-secondary text-[24px]">INDONESIA</p>
              <p className="font-bold text-third text-[20px]">(rata-rata)</p>
            </div>
            <div className="w-[660px] border-2 rounded-full border-secondary">
              <p className="px-2 font-bold text-[20px]">100</p>
            </div>
            <p className="font-bold text-third text-[24px]">#12</p>
          </div> */}
          {/* <div className="flex mt-[50px] gap-[60px] justify-end">
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
          </div> */}
          {dataChart}
        </div>
      )}
    </div>
  );
};

export default Jelajahmain;
