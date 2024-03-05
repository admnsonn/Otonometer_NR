import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileImage from "../assets/profile-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ketinggian from "../assets/ketinggian.png";
import polusi from "../assets/polusi.png";
import petaprofile from "../assets/petaprofil.png";

const Profile = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-4 gap-[200px] mb-[80px]">
          <div
            className="col-span-1 p-4 flex flex-col justify-center items-center rounded-md w-[370px]"
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
            <div className="grid grid-cols-3 gap-8 mb-[40px]">
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
                    <span className="text-sm mt-1">Teks 1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={polusi} alt="loading" className="hover:" />
                    <span className="text-sm mt-1">Teks 2</span>
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
      </div>
    </div>
  );
};

export default Profile;
