import React, { useState } from "react";
import peta from "../../assets/petajelajah.png";
import map from "../../assets/icons/peta.png";
import geo from "../../assets/icons/geodating.svg";
import people from "../../assets/icons/people.svg";
import industri from "../../assets/icons/industri.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import bulat from "../../assets/circ.svg";
import "../../style/Components.css";

const Utakmain = () => {
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

  const Dropdown = ({ options, onSelect, label, dropdownClass }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
      onSelect(e.target.value);
    };

    return (
      <div
        className={`flex ${dropdownClass} w-[167px] h-[41px] rounded-[10px] text-white border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mt-[10px] mb-[10px]`}
      >
        <select
          className={`bg-secondary ${dropdownClass} w-full h-full mx-[20px]`}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Pilih</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const CheckboxForm = ({ options, onCheck }) => {
    const handleCheckboxChange = (e) => {
      onCheck(e.target.name, e.target.checked);
    };

    return (
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={option}
              onChange={handleCheckboxChange}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    );
  };

  const Tesss = () => {
    const [selectedData, setSelectedData] = useState("");
    const [selectedSubData, setSelectedSubData] = useState("");
    const [checkboxOptions, setCheckboxOptions] = useState([]);
    const [selectedDataset2, setSelectedDataset2] = useState("");

    const handleDataSelect = (data) => {
      setSelectedData(data);
      setSelectedSubData("");
      setCheckboxOptions([]);
      setSelectedDataset2("");
    };

    const handleSubDataSelect = (subData) => {
      setSelectedSubData(subData);
      if (selectedData === "Keuangan") {
        switch (subData) {
          case "Pendapatan":
            setCheckboxOptions([
              "Semua",
              "PAD",
              "Transfer",
              "Lain Transfer",
              "Perimbangan",
              "Lain Imbang",
            ]);
            break;
          case "Belanja":
            setCheckboxOptions([
              "Semua",
              "Operasi",
              "Modal",
              "Tak Terduga",
              "Belanja Trf",
              "B. Tidak Langsung",
              "B. Langsung",
            ]);
            break;
          case "Pembiayaan":
            setCheckboxOptions(["Semua", "Penerimaan", "Pengeluaran"]);
            break;
          default:
            setCheckboxOptions([]);
        }
      } else if (selectedData === "Ekonomi") {
        switch (subData) {
          case "PDRB - ADHB":
          case "PDRB - ADHK":
            setCheckboxOptions([
              "Semua",
              "Pertanian",
              "Pertambangan",
              "Industri",
            ]);
            break;
          default:
            setCheckboxOptions([]);
        }
      } else if (selectedData === "Statistik") {
        switch (subData) {
          case "Jumlah Penduduk":
            setCheckboxOptions([
              "Semua",
              "Semua Umur",
              "Perempuan",
              "Laki-laki",
            ]);
            break;
          default:
            setCheckboxOptions([]);
        }
      }
      return (
        <div className="ml-[20px]">
          <select onChange={(e) => handleSubDataSelect(e.target.value)}>
            <option value="">Pilih Subdata</option>
            <option value="Pendapatan">Pendapatan</option>
            <option value="Belanja">Belanja</option>
            <option value="Pembiayaan">Pembiayaan</option>
          </select>

          <div>
            {checkboxOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={option}
                  className="custom-checkbox"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      );
    };

    const handleCheckboxChange = (name, checked) => {
      console.log(`${name} is ${checked ? "checked" : "unchecked"}`);
    };

    const handleDataset2Select = (data) => {
      setSelectedDataset2(data);
    };

    const CheckboxForm = ({ options, onCheck }) => {
      const handleCheckboxChange = (e) => {
        onCheck(e.target.name, e.target.checked);
      };

      return (
        <div
          className="flex flex-col items-start"
          style={{
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.50)",
            borderRadius: "5%",
            border: "10px solid #FFFFFF",
            paddingLeft: "30px",
            paddingRight: "30px",
            marginLeft: "250px",
            marginTop: "-100px",
          }}
        >
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                name={option}
                id={option}
                onChange={handleCheckboxChange}
                className="mr-4"
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      );
    };

    return (
      <div>
        <Dropdown
          options={["Keuangan", "Ekonomi", "Statistik"]}
          onSelect={handleDataSelect}
          label="Pilih"
          dropdownClass="bg-secondary"
        />

        {selectedData && (
          <Dropdown
            options={
              selectedData === "Keuangan"
                ? ["Pendapatan", "Belanja", "Pembiayaan"]
                : selectedData === "Ekonomi"
                ? ["PDRB - ADHB", "PDRB - ADHK"]
                : selectedData === "Statistik"
                ? ["Jumlah Penduduk"]
                : []
            }
            onSelect={handleSubDataSelect}
            label="Select a sub-data category"
            dropdownClass="bg-third text-secondary"
          />
        )}

        {selectedSubData && (
          <CheckboxForm
            options={checkboxOptions}
            onCheck={handleCheckboxChange}
          />
        )}

        {selectedSubData && selectedDataset2 && (
          <Dropdown
            options={["Keuangan", "Ekonomi", "Statistik"]}
            onSelect={handleDataset2Select}
            label="Pilih Dataset 2"
            dropdownClass="bg-secondary"
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col mt-[50px] mb-[150px] justify-center items-center max-lg:[1920px] mt-[80px]">
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

      {/* Dropdown for Province, City, and Year */}
      <div className=" flex gap-[50px] relative mt-[24px] mb-[24px]">
        {/* Province Dropdown */}
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

        {/* City Dropdown */}
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

        {/* Year Dropdown */}
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

      {/* Dropdowns for Dataset 1 and Dataset 2 */}
      <div className="flex gap-[80px] mt-[40px]">
        <div className="">
          <h1 className="text-secondary text-[14px] font-semibold ml-[45px]">
            DATASET 1
          </h1>
          {/* Dataset 1 Dropdown */}
          {/* <div
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
            <div className="absolute z-20 bg-white border border-gray-200 rounded-md shadow-lg mt-2">
              {renderDropdownDataset()}
            </div>
          )} */}

          {/* Dataset 2 Dropdown */}
          {/* {dropdownDataset2 && (
            <div className="absolute z-20 bg-white border border-gray-200 rounded-md shadow-lg mt-2 ml-180">
              {renderDropdownDataset2()}
            </div>
          )} */}
          {/* Render checkboxes and Dataset 2 button based on selection */}
          {/* {renderCheckboxOptions()}
          {renderDataset2Button()} */}
          <Tesss />
        </div>
      </div>
    </div>
  );
};

export default Utakmain;
