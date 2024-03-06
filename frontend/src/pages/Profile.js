import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileImage from "../assets/profile-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCog,
  faUser,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ketinggian from "../assets/ketinggian.png";
import polusi from "../assets/polusi.png";
import petaprofile from "../assets/petaprofil.png";
import imgcard from "../assets/JELAJAH2.png";
import deleteicon from "../assets/Delete.png"
import editicon from "../assets/Edit.png"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const [selectedTab, setSelectedTab] = useState("all");
  

  const toggleTab = () => {
    setActiveTab(activeTab === "activity" ? "save" : "activity");
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-4 gap-[200px] mb-[80px]">
          <div
            className="col-span-1 p-4 flex flex-col justify-center items-center rounded-md w-[373px]"
            style={{ backgroundColor: "#EFF7FB" }}
          >
            <img
              src={ProfileImage}
              alt="Profile"
              className="rounded-md"
              style={{ width: "105px", height: "99px" }}
            />
            <h1
              className="text-xl mt-4 font-bold"
              style={{ fontSize: "24px", color: "#24445A" }}
            >
              Anita Basudara
            </h1>
            <p
              className="text-gray-600"
              style={{ fontSize: "16px", color: "#24445A" }}
            >
              anita.basudara@gmail.com.
            </p>
            <button
              className="text-white py-2 px-4 rounded mt-4 w-[313px]"
              style={{ backgroundColor: "#86BBD8" }}
            >
              Perbarui data diri
            </button>
            <button
              className="text-white py-2 px-4 rounded mt-4 w-[313px]"
              style={{ backgroundColor: "#86BBD8" }}
            >
              Ubah Kata Sandi
            </button>
            <button
              className="text-white py-2 px-4 rounded mt-4 w-[313px]"
              style={{ backgroundColor: "#86BBD8" }}
            >
              Pilih Paket Berlangganan
            </button>
            <button
              className="text-white py-2 px-4 rounded mt-4 w-[313px]"
              style={{ backgroundColor: "#CD3838" }}
            >
              Keluar Dari Akun
            </button>
          </div>
          <div
            className="col-span-3 bg-gray-200 p-4"
            style={{ backgroundColor: "#EFF7FB" }}
          >
            <div className="grid grid-cols-3 gap-8 mb-[40px] ml-[50px]">
              <div className="col-span-1">
                <h1
                  className="text-xl mt-4 ml-[30px] font-bold"
                  style={{ fontSize: "24px", color: "#24445A" }}
                >
                  Kota Bandung
                </h1>
                <p
                  className="text-gray-600 ml-[30px] mt-[10px]"
                  style={{ fontSize: "16px", color: "#24445A" }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  -6.902186, 107.618756
                </p>
                <div className="flex items-center mt-[20px] ml-[30px]">
                  <div className="flex flex-col items-center mr-4">
                    <img src={ketinggian} alt="loading" className="hover:" />
                    <p className="text-lg">
                      <span className="font-bold">168</span> km<sup className="text-sm">2</sup>
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={polusi} alt="loading" className="hover:" />
                    <p className="text-lg">
                      <span className="font-bold">2.453</span> 10<sup className="text-sm">3</sup> jiwa
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ml-[250px]">
                {/* Tempatkan gambar peta di sini */}
                <img src={petaprofile} alt="Peta" />
              </div>
              <div
                className="gap-[250px] col-span-2 justify-center ml-[300px]"
                style={{ display: "flex" }}
              >
                <div
                  className="flex flex-col items-center justify-center"
                  style={{ color: "#24445A" }}
                >
                  <div className="text-[50px] font-bold">5</div>
                  <div className="text-lg font-semibold">Unduh</div>
                </div>
                <div
                  className=" flex flex-col items-center justify-center"
                  style={{ color: "#24445A" }}
                >
                  <div className="text-[50px] font-bold">5</div>
                  <div className="text-lg font-semibold">Simpan</div>
                </div>
                <div
                  className=" flex flex-col items-center justify-center"
                  style={{ color: "#24445A" }}
                >
                  <div className="text-[50px] font-bold">5</div>
                  <div className="text-lg font-semibold">Bagi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Toggle button */}
        <div className="flex justify-center mb-4">
          <div className="grid grid-cols-2 gap-8" style={{ backgroundColor: "#EFF7FB", borderRadius: "10px", padding: "10px", width: "373px" }}>
            <button
              className={`mx-4 py-2 px-4 rounded ${
                activeTab === "activity"
                  ? "bg-[#86BBD8] text-white"
                  : "bg-[#EFF7FB] text-[#24445A]"
              }`}
              style={{ borderRadius: "10px" }}
              onClick={toggleTab}
            >
              Aktivitas
            </button>
            <button
              className={`mx-4 py-2 px-4 rounded ${
                activeTab === "save"
                  ? "bg-[#86BBD8] text-white"
                  : "bg-[#EFF7FB] text-[#24445A]"
              }`}
              style={{ borderRadius: "10px" }}
              onClick={toggleTab}
            >
              Simpan
            </button>
          </div>
        </div>
        {/* Container */}
        <div style={{ backgroundColor: "#EFF7FB", padding: "20px", borderRadius: "10px", width: "100%", marginBottom:"100px"}}>
          {/* Content based on activeTab */}
          {activeTab === "activity" && (
            <div>
              {/* Your activity container content here */}
              <div className="flex items-center justify-between border-b pb-3 mb-3"style={{ marginLeft: "42px", marginRight: "42px" }}>
                {/* Gambar */}
            <div className="flex items-center">
              <img src={imgcard} alt="Gambar" className="w-24 h-24 rounded-lg mr-3 bg-white" />
              <div>
                {/* Tahun */}
                <p className="text-sm font-medium mb-1">2024</p>
                {/* Nama Kota */}
                <p className="text-xl font-bold mb-1">Kota Bandung</p>
                {/* Label Keuangan - Operasi */}
                <p className="text-sm font-medium mb-1">Keuangan - Operasi</p>
              </div>
            </div>
            <div>
              {/* Waktu */}
              <p className="text-sm font-medium text-gray-500">Hari ini, 19.30</p>
            </div>
          </div>
            
          </div>
            
          )}
          {activeTab === "save" && (
            <div>
              {/* Your save container content here */}
              <div className="mt-4 mb-4">
                  <button
                    className={`mx-4 py-2 px-4 rounded ${
                      selectedTab === "all"
                        ? "bg-[#24445A] text-white"
                        : "bg-[#86BBD8] text-white"
                    }`}
                    onClick={() => setSelectedTab("all")}
                  >
                    Semua
                  </button>
                  <button
                    className={`mx-4 py-2 px-4 rounded ${
                      selectedTab === "collection"
                        ? "bg-[#24445A] text-white"
                        : "bg-[#86BBD8] text-white"
                    }`}
                    onClick={() => setSelectedTab("collection")}
                  >
                    Koleksi
                  </button>
                </div>
            </div>
          )
          }
          {selectedTab === "all" && (
                <div>
                 <div className="flex items-center justify-between border-b pb-3 mb-3"style={{ marginLeft: "42px", marginRight: "42px" }}>
              
              {/* Gambar */}
            <div className="flex items-center">
              <img src={imgcard} alt="Gambar" className="w-24 h-24 rounded-lg mr-3 bg-white" />
              <div>
                {/* Tahun */}
                <p className="text-sm font-medium mb-1">2024</p>
                {/* Nama Kota */}
                <p className="text-xl font-bold mb-1">Kota Bandung</p>
                {/* Label Keuangan - Operasi */}
                <p className="text-sm font-medium mb-1">Keuangan - Operasi</p>
              </div>
            </div>
            <div>
              {/* Waktu */}
              <p className="text-sm font-medium text-gray-500">Hari ini, 19.30</p>
            </div>
          </div>
            {/* Card */}
            <div className="flex items-center justify-between border-b pb-3 mb-3"style={{ marginLeft: "42px", marginRight: "42px" }}>
            {/* Gambar */}
            <div className="flex items-center">
              <img src={imgcard} alt="Gambar" className="w-24 h-24 rounded-lg mr-3 bg-white" />
              <div>
                {/* Tahun */}
                <p className="text-sm font-medium mb-1">2024</p>
                {/* Nama Kota */}
                <p className="text-xl font-bold mb-1">Kota Bandung</p>
                {/* Label Keuangan - Operasi */}
                <p className="text-sm font-medium mb-1">Keuangan - Operasi</p>
              </div>
            </div>
            <div>
              {/* Waktu */}
              <p className="text-sm font-medium text-gray-500">Hari ini, 19.30</p>
            </div>
          </div>
            {/* Card */}
            <div className="flex items-center justify-between border-b pb-3 mb-3"style={{ marginLeft: "42px", marginRight: "42px" }}>
            {/* Gambar */}
            <div className="flex items-center">
              <img src={imgcard} alt="Gambar" className="w-24 h-24 rounded-lg mr-3 bg-white" />
              <div>
                {/* Tahun */}
                <p className="text-sm font-medium mb-1">2024</p>
                {/* Nama Kota */}
                <p className="text-xl font-bold mb-1">Kota Bandung</p>
                {/* Label Keuangan - Operasi */}
                <p className="text-sm font-medium mb-1">Keuangan - Operasi</p>
              </div>
            </div>
            <div>
              {/* Waktu */}
              <p className="text-sm font-medium text-gray-500">Hari ini, 19.30</p>
            </div>
          </div>
            {/* Card */}
            <div className="flex items-center justify-between border-b pb-3 mb-3"style={{ marginLeft: "42px", marginRight: "42px" }}>
            {/* Gambar */}
            <div className="flex items-center">
              <img src={imgcard} alt="Gambar" className="w-24 h-24 rounded-lg mr-3 bg-white" />
              <div>
                {/* Tahun */}
                <p className="text-sm font-medium mb-1">2024</p>
                {/* Nama Kota */}
                <p className="text-xl font-bold mb-1">Kota Bandung</p>
                {/* Label Keuangan - Operasi */}
                <p className="text-sm font-medium mb-1">Keuangan - Operasi</p>
              </div>
            </div>
            <div>
              {/* Waktu */}
              <p className="text-sm font-medium text-gray-500">Hari ini, 19.30</p>
            </div>
          </div>
            {/* Card */}
            <div className="flex items-center justify-between border-b pb-3 mb-3"style={{ marginLeft: "42px", marginRight: "42px" }}>
            {/* Gambar */}
            <div className="flex items-center">
              <img src={imgcard} alt="Gambar" className="w-24 h-24 rounded-lg mr-3 bg-white" />
              <div>
                {/* Tahun */}
                <p className="text-sm font-medium mb-1">2024</p>
                {/* Nama Kota */}
                <p className="text-xl font-bold mb-1">Kota Bandung</p>
                {/* Label Keuangan - Operasi */}
                <p className="text-sm font-medium mb-1">Keuangan - Operasi</p>
              </div>
            </div>
            <div>
              {/* Waktu */}
              <p className="text-sm font-medium text-gray-500">Hari ini, 19.30</p>
            </div>
          </div>
                </div>
              )}
         {selectedTab === "collection" && (
          <div>
            
            <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ marginLeft: "42px", marginRight: "42px", backgroundColor: "#FFFFFF",borderRadius: "10px" }}>
            <div className="flex items-center" style={{ marginLeft: "10px"}}>
                <img src={editicon} alt="Edit" />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">DATA KEUANGAN DAERAH 3T</p>
              </div>
              <div className="flex items-center" style={{ marginRight: "10px", marginTop: "10px"}}>
                <img src={deleteicon} alt="delete" />
              </div>
            </div>
            
            
            <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ marginLeft: "42px", marginRight: "42px", backgroundColor: "#FFFFFF",borderRadius: "10px" }}>
              <div className="flex items-center" style={{ marginLeft: "10px"}}>
                <img src={editicon} alt="Edit" />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">DATA KEUANGAN DAERAH 3T</p>
              </div>
              <div className="flex items-center" style={{ marginRight: "10px", marginTop: "10px"}}>
                <img src={deleteicon} alt="delete" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ marginLeft: "42px", marginRight: "42px", backgroundColor: "#FFFFFF",borderRadius: "10px" }}>
              <div className="flex items-center" style={{ marginLeft: "10px"}}>
                <img src={editicon} alt="Edit" />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">DATA KEUANGAN DAERAH 3T</p>
              </div>
              <div className="flex items-center" style={{ marginRight: "10px", marginTop: "10px"}}>
                <img src={deleteicon} alt="delete" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ marginLeft: "42px", marginRight: "42px", backgroundColor: "#FFFFFF",borderRadius: "10px" }}>
            < div className="flex items-center" style={{ marginLeft: "10px"}}>
                <img src={editicon} alt="Edit" />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">DATA KEUANGAN DAERAH 3T</p>
              </div>
              <div className="flex items-center" style={{ marginRight: "10px", marginTop: "10px"}}>
                <img src={deleteicon} alt="delete" />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#24445A] hover:bg-[#86BBD8] text-white  py-2 px-4 rounded">
                Tambahkan Koleksi
              </button>
            </div>
          </div>
          
        )}

        </div>
      </div>
    </div>
  );
};

export default Profile;
