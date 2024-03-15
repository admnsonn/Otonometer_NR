import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import bulat from "../../assets/bulat.svg";
import "../../style/Switchbtn.css";
import "../../style/Components.css";
import Timeseries from '../../components/Grafik/Timeseries'

// Komponen card baru
const Card = ({ chartRef, note, legendData, expand, onExpand, onHide }) => {
  return (
    <div className="flex flex-col bg-white w-[350px] h-[auto] rounded-[10px] text-secondary border-1 border-[f1f1f1] text-[14px] font-medium items-center justify-center drop-shadow-lg cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full">
        <canvas ref={chartRef} width="200" height="200"></canvas>
      </div>
      <p className="text-center mt-2 text-sm text-[#064878] italic">
        {note}
      </p>
      <div className="legend-container">
        {legendData.length > 4 && !expand ? (
          <div className="flex justify-center items-center mt-[10px]">
            <button className="text-[#064878] hover:text-[#0B578E] focus:outline-none" onClick={onExpand}>
              Show All Legends
            </button>
          </div>
        ) : (
          <>
            {legendData.map((legend, index) => (
              <div key={index} className="legend-row">
                <div className="legend-item flex w-[100px] gap-x-[20px] mx-[20px] ml-[40px]">
                  <div className="legend-color" style={{ backgroundColor: legend.color }}></div>
                  <p className="legend-label">{legend.label}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {/* Button Hide Legends dipisahkan ke dalam div baru */}
      {expand && (
        <div className="flex justify-center items-center mt-[10px] mb-[20px]">
          <button className="text-[#064878] hover:text-[#0B578E] focus:outline-none" onClick={onHide}>
            Hide Legends
          </button>
        </div>
      )}
    </div>
  );
};
  

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
  const [showAllLegends1, setShowAllLegends1] = useState(false);
  const [showAllLegends2, setShowAllLegends2] = useState(false);
  const [legendData1, setLegendData1] = useState([]);
  const [legendData2, setLegendData2] = useState([]);

  const handleExpandCard1 = () => {
    setShowAllLegends1(!showAllLegends1);
  };

  const handleExpandCard2 = () => {
    setShowAllLegends2(!showAllLegends2);
  };

  const handleCloseLegends1 = () => {
    setShowAllLegends1(false);
  };

  const handleCloseLegends2 = () => {
    setShowAllLegends2(false);
  };

  const handleClickMore = () => {
    // setShowAllLegends(!showAllLegends); // Menggunakan variabel yang tidak didefinisikan
    setShowAllLegends1(!showAllLegends1); // Menggunakan setShowAllLegends1 untuk card pertama
    setShowAllLegends2(!showAllLegends2); // Menggunakan setShowAllLegends2 untuk card kedua
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
    // Chart data
    const data1 = [30, 40, 20, 50, 30, 20, 10, 40];
    const labels1 = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];
    const backgroundColor1 = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#9900ff', '#ff9900'];
    const legendData1 = labels1.map((label, index) => ({ label, color: backgroundColor1[index] }));

    const data2 = [20, 30, 40, 50, 20, 30, 10, 50];
    const labels2 = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8'];
    const backgroundColor2 = ['#9900ff', '#ff9900', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff0000'];
    const legendData2 = labels2.map((label, index) => ({ label, color: backgroundColor2[index] }));

    // Draw pie chart for Card 1
    const ctx1 = chartRef1.current.getContext('2d');
    const chart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'Data Card 1',
          data: data1,
          backgroundColor: backgroundColor1
        }]
      }
    });

    // Draw pie chart for Card 2
    const ctx2 = chartRef2.current.getContext('2d');
    const chart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'Data Card 2',
          data: data2,
          backgroundColor: backgroundColor2
        }]
      }
    });


    // Set legend data
    setLegendData1(legendData1);
    setLegendData2(legendData2);

    // Cleanup
    return () => {
      chart1.destroy();
      chart2.destroy();
    };
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
      {/* Container untuk kedua kartu */}
      <div className="flex gap-[50px]">
        {/* Container untuk card pertama */}
        <div className="card-container">
          {/* Konten Card pertama */}
          <Card 
            chartRef={chartRef1}
            note="Catatan: Data Kendaraan dan BBNKB tidak tersedia dalam skala kabupaten/kota"
            legendData={legendData1}
            expand={showAllLegends1}
            onExpand={handleExpandCard1}
            onHide={handleCloseLegends1}
          />
        </div>

        {/* Container untuk card kedua */}
        <div className="card-container">
          {/* Konten Card kedua */}
          <Card 
            chartRef={chartRef2}
            note="Catatan: Data Kendaraan dan BBNKB tidak tersedia dalam skala kabupaten/kota"
            legendData={legendData2}
            expand={showAllLegends2}
            onExpand={handleExpandCard2}
            onHide={handleCloseLegends2}
          />
        </div>
        {/* <Timeseries/> */}
      </div>
    </div>
  );
};

export default UtakGraph;
