import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import bulat from "../../assets/bulat.svg";
import "../../style/Switchbtn.css";
import "../../style/Components.css";
import Timeseries from '../../components/Grafik/Timeseries';

// Komponen card baru
const Card = ({ chartRef, note }) => (
    <div className="flex flex-col bg-white w-[350px] h-[300px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full">
        <canvas ref={chartRef} width="200" height="200"></canvas>
      </div>
      <p className="text-center mt-2 text-sm text-[#064878] italic">
        {note}
      </p>
      <div className="legend-container">
        <div className="legend-row">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ff0000' }}></div>
            <p className="legend-label">Label 1</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#00ff00' }}></div>
            <p className="legend-label">Label 2</p>
          </div>
        </div>
        <div className="legend-row">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#0000ff' }}></div>
            <p className="legend-label">Label 3</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ffff00' }}></div>
            <p className="legend-label">Label 4</p>
          </div>
        </div>
      </div>
    </div>
  );
  

const UtakGraph = () => {
  const [dropdownProvinsi, setDropdownProvinsi] = useState(false);
  const [dropdownKota, setDropdownKota] = useState(false);
  const [dropdownTahunKiri, setDropdownTahunKiri] = useState(false);
  const [dropdownTahunKanan, setDropdownTahunKanan] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Jawa Barat');
  const [selectedKota, setSelectedKota] = useState('Kota Bandung');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedYears, setSelectedYears] = useState('');
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const [showAllLegends, setShowAllLegends] = useState(false);

  const handleClickMore = () => {
    setShowAllLegends(!showAllLegends);
  };

  const handleDropdownProvinsi = () => {
    setDropdownProvinsi(!dropdownProvinsi);
  };

  const handleDropdownKota = () => {
    setDropdownKota(!dropdownKota);
  };

  const handleDropdownTahunKiri = () => {
    setDropdownTahunKiri(!dropdownTahunKiri);
  };

  const handleDropdownTahunKanan = () => {
    setDropdownTahunKanan(!dropdownTahunKanan);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownProvinsi(false);
  };

  const handleOptionKota = (option) => {
    setSelectedKota(option);
    setDropdownKota(false);
  };

  const handleOptionYear = (year) => {
    setSelectedYear(year);
    setDropdownTahunKiri(false);
    setDropdownTahunKanan(false);
  };
  const handleOptionYears = (year) => {
    setSelectedYears(year);
    setDropdownTahunKiri(false);
    setDropdownTahunKanan(false);
  };

  const renderDropdownProvinsi = () => {
    const options = ["Jawa Barat", "Jawa Tengah", "Jawa Timur"];

    return options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleOptionClick(option)}
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-4"
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
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-4"
      >
        <p>{option}</p>
      </div>
    ));
  };

  const renderDropdownYear = () => {
    const years = ["", "2022", "2023", "2024"];

    return years.map((year, index) => (
      <div
        key={index}
        onClick={() => handleOptionYear(year)}
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-4"
      >
        <p>{year ? year : '-'}</p>
      </div>
    ));
  };

  const renderDropdownYears = () => {
    const years = ["2022", "2023", "2024"];

    return years.map((year, index) => (
      <div
        key={index}
        onClick={() => handleOptionYears(year)}
        className="flex w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-4"
      >
        <p>{year}</p>
      </div>
    ));
  };
  const [activeTab, setActiveTab] = useState("nominal");

  const toggleTab = () => {
    setActiveTab(activeTab === "nominal" ? "persentase" : "nominal");
  };

  const SwitchBtn = ({ selected, onSelect }) => (
    <div className="switch" onClick={onSelect}>
      <input type="checkbox" id="toggle" checked={selected === "persentase"} />
      <label htmlFor="toggle" className="slider"></label>
    </div>
  );

  useEffect(() => {
    // Menggambar pie chart untuk Card 1
    if (chartRef1.current) {
        const ctx = chartRef1.current.getContext('2d');
        if (chartRef1.current.chart) {
            chartRef1.current.chart.destroy();
        }
        chartRef1.current.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    label: 'Data Card 1',
                    data: [30, 40, 30],
                    backgroundColor: ['#ff0000', '#00ff00', '#0000ff']
                }]
            }
        });
    }

    // Menggambar pie chart untuk Card 2
    if (chartRef2.current) {
        const ctx = chartRef2.current.getContext('2d');
        if (chartRef2.current.chart) {
            chartRef2.current.chart.destroy();
        }
        chartRef2.current.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    label: 'Data Card 2',
                    data: [20, 50, 30],
                    backgroundColor: ['#ffff00', '#ff00ff', '#00ffff']
                }]
            }
        });
    }
  }, []);

  return (
    <div className="flex flex-col mt-[50px] mb-[150px] justify-center items-center max-lg:[1920px]">
      <img src={bulat} alt="" className="fixed w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10" />
      <div className="flex bg-none w-[167px] h-[41px] rounded-[10px] text-secondary border-2 border-secondary text-[14px] font-semibold items-center justify-center">
        UTAK-ATIK
      </div>
      <h1 className="flex justify-center items-center text-secondary text-[34px] font-bold mt-[24px]">
        Utak-Atik Menyajikan Insight Tanpa Batas!
      </h1>
      <div className=" flex gap-[50px] relative mt-[24px] mb-[24px]">
        <div
          onClick={handleDropdownProvinsi}
          className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer mr-[130px]"
        >
          <p>{selectedOption}</p>
          <FontAwesomeIcon
            icon={faCaretDown}
            color="#24445A"
            className="ml-[20px]"
          />
        </div>
        {dropdownProvinsi && (
          <div className="absolute z-10 bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[50px]">
            {renderDropdownProvinsi()}
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
      </div>

      <div className="flex justify-center items-center text-secondary text-[14px] font-bold mt-4 gap-[80px] ml-[30px]">
        <div className='text-center'>
          <p className='text-center font-extrabold text-[24px] text-[#064878]'>Belanja</p>
          <p className="text-sm">(Rp 10/Kapita)</p>
        </div>
        <div className='text-center'>
          <p className='text-[20px] text-[#0B578E]'>Penduduk</p>
          <p>(Rp 10/Kapita)</p>
        </div>
        <div className='text-center ml-[-10px]'>
          <p className='text-center font-extrabold text-[24px] text-[#064878]'>Pendapatan</p>
          <p>(Rp 10/Kapita)</p>
        </div>
      </div>

      <div className="flex gap-[50px] items-center justify-center text-[18px] font-semibold text-secondary mt-[48px] text-[20px]">
        <p className={activeTab === "persentase" ? "inactive-text" : ""}>
          Nominal
        </p>
        <SwitchBtn selected={activeTab} onSelect={toggleTab} />
        <p className={activeTab === "nominal" ? "inactive-text" : ""}>
          Persentase
        </p>
      </div>
      {/* Dropdown untuk tahun */}
      <div className=" flex gap-[30px] relative mb-[24px] mt-[35px]">
        {/* Dropdown tahun kiri */}
        <div
          onClick={handleDropdownTahunKiri}
          className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer "
        >
          <p>{selectedYear || '-'}</p>
          <FontAwesomeIcon
            icon={faCaretDown}
            color="#24445A"
            className="ml-[20px]"
          />
        </div>
        {dropdownTahunKiri && (
          <div className="absolute z-10 bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[50px]">
            {renderDropdownYear()}
          </div>
        )}

        {/* Dropdown tahun kanan */}
        <div
          onClick={handleDropdownTahunKanan}
          className="flex bg-[#ebebeb] w-[167px] h-[41px] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer"
        >
          <p>{selectedYears ? selectedYears : '2022'}</p>
          <FontAwesomeIcon
            icon={faCaretDown}
            color="#24445A"
            className="ml-[20px]"
          />
        </div>
        {dropdownTahunKanan && (
          <div className="absolute z-10 bg-white border border-gray-200 mt-2 rounded-md shadow-lg mt-[50px] ml-[216px]">
            {renderDropdownYears()}
          </div>
        )}
      </div>

      {/* Menambahkan dua card di bawah dropdown tahun */}
      <div className="flex gap-[90px] mt-4">
        <Timeseries/>
        <Timeseries/>
        </div>
    </div>
  );
};

export default UtakGraph;