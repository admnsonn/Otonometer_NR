import React, { useState, useEffect } from "react";
import Illustration from "../../assets/Auth/ilustrasi.jpg";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "../../style/Components.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendar,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import AppleIcon from "../../assets/icons/apple.svg";
import GoogleIcon from "../../assets/icons/google.svg";
import MicrosoftIcon from "../../assets/icons/microsoft.svg";
import NeracaIcon from "../../assets/icons/neracaruang.svg";
import { Link } from "react-router-dom";
import "../../style/BtnLoginRegist.css";
import axios from "axios";

const Daftar = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    reference: "",
    title: "",
    dob: "",
    city_id: "",
    city_value: "",
    province : "",
    showPassword: false,
    otp: "",
    provinces: [],
    cities:[],
  });
  const { email, title, dob, showPassword, password, confirm_password, reference, name, otp, city_id, city_value, province, provinces, cities } = formData;
  
  useEffect(() => {
    fetchCities();
  }, []);
  const fetchCities = async (province_id) => {
    try {
      const response = await axios.get(`https://api.otonometer.neracaruang.com/api/all_cities?province_id=${province_id}`);
      setFormData((prevState) => ({
        ...prevState,
        cities: response.data.data,
      }));
      console.log(response.data.data);
    } catch (error) {
      console.error("Fetching cities failed:", error);
    }
  };

  useEffect(() => {
    fetchProvinces();
  }, []);
  
  useEffect(() => {
    console.log(provinces)
  }, [provinces]
  )
  const fetchProvinces = async () => {
    try {
      const response = await axios.get("https://api.otonometer.neracaruang.com/api/provinces");
      setFormData((prevState) => ({
        ...prevState,
        provinces: response.data.data,
      }));
      console.log(provinces)
      console.log(response.data.data)
    } catch (error) {
      console.error("Fetching provinces failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const handleChangeProvince = (e) => {
  const selectedProvince = e.target.value;
  setFormData((prevState) => ({
    ...prevState,
    province: selectedProvince,
  }));
  fetchCities(selectedProvince);
};
const handleChangeCities = (e) => {
  const selectedCity = e.target.value;
  setFormData((prevState) => ({
    ...prevState,
    city_id: selectedCity,
  }));
};
  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      dob: date,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (step === 1) {
        const response = await axios.post("https://api.otonometer.neracaruang.com/api/register", {
          email: formData.email,
        });
        console.log("Email submitted:", response.data);
        setStep(step + 1);
      } else if (step === 2) {
        const response = await axios.post("https://api.otonometer.neracaruang.com/api/register", {
          title: formData.title,
          name: formData.name,
          dob: formData.dob,
        });
        console.log("Personal info submitted:", response.data);
        setStep(step + 1);
      } else if (step === 3) {
        if (password !== confirm_password) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password dan konfirmasi password tidak cocok!",
          });
          return;
        }
        const response = await axios.post("https://api.otonometer.neracaruang.com/api/register", {
          password,
        });
        console.log("Password submitted:", response.data);
        setStep(step + 1);
        sendOTP();
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Fungsi untuk mengirim OTP
  const sendOTP = async () => {
    try {
      const response = await axios.post("https://api.otonometer.neracaruang.com/api/send-otp", { email });
      console.log("OTP sent:", response.data);
    } catch (error) {
      console.error("Sending OTP failed:", error);
    }
  };

  // Fungsi untuk memeriksa OTP
  const checkOTP = async () => {
    try {
      const response = await axios.post("https://api.otonometer.neracaruang.com/api/check-otp", { email:email, otp:document.getElementById("otp").value } ,{headers:{"Content-Type" : 'application/x-www-form-urlencoded'}});
      console.log("OTP checked:", response.data);
      // Lakukan apa pun yang perlu Anda lakukan setelah memeriksa OTP berhasil
    } catch (error) {
      console.error("Checking OTP failed:", error);
      // Tampilkan pesan kesalahan jika verifikasi gagal
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifikasi OTP gagal. Silakan coba lagi!",
      });
    }
  };

  const submitBerhasil = async () => {
    const { value: enteredOTP } = await Swal.fire({
      title: "Verifikasi Email Anda!",
      html: `
        <div style="text-align: center; margin-bottom: 10px; font-size: 15px">Kode OTP</div>
        <input id="otp" class="swal2-input otp-input" maxlength="6" style="width: 12em; text-align: center;" />
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const enteredOTP = document.getElementById("otp").value;
        if (!enteredOTP || enteredOTP.length !== 6 || !/^\d+$/.test(enteredOTP)) {
          Swal.showValidationMessage("Kode OTP harus berupa 6 digit angka.");
          return false;
        }
        return enteredOTP;
      },
      confirmButtonText: "Simpan",
      confirmButtonColor: "#86BBD8",
      cancelButtonText: "Batalkan",
      cancelButtonColor: "#CD3838",
      showCancelButton: true,
      customClass: {
        text: "text-icon",
        confirmButton: "otp-button simpan-button",
        cancelButton: "otp-button batalkan-button",
      },
    });

    if (enteredOTP) {
      setFormData((prevState) => ({
        ...prevState,
        otp: enteredOTP,
      }));
      checkOTP(); // Panggil fungsi checkOTP setelah pengguna memasukkan OTP
    }
  };

    const hundredYearsAgo = new Date();
    hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);

    let form;

    if (step === 1) {
      form = (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[450px] rounded px-8 pt-6 pb-8"
        >
          <div className="my-[10px]">
          <h1 className="text-6xl font-bold mb-4 text-left text-secondary">
              Daftar
            </h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8 text-secondary">
              Daftarkan diri Anda untuk mengakses{" "}
              <span className="font-bold">fitur lainnya</span> Otonometer
            </p>
          </div>
            <div className="mb-4">
              <label
                className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
          
          <div className="flex items-center justify-center">
            <button
              className="button rounded-[8px] h-[40px] w-full py-2 px-3"
              type="submit"
            >
              Daftar
            </button>
          </div>
          {/* Garis Atau */}
          <div className="flex mt-4 w-full py-2 px-3 justify-center items-center ">
            <hr
              className="flex-1 border-t-1 bg-infield mr-5"
              style={{ borderWidth: "1px" }}
            />
            <span className="text-24445A text-sm font-regular text-secondary">atau</span>
            <hr
              className="flex-1 border-t-1 bg-infield ml-5"
              style={{ borderWidth: "1px" }}
            />
          </div>
          {/* Button Login dengan cara lain */}
          <div className="flex flex-col items-center mt-4 gap-y-[10px]">
            <button className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]">
              <div className="flex items-center justify-center gap-4">
                <img src={NeracaIcon} alt="loading" className="hover:" />
                <span className="">Masuk dengan Neraca Ruang</span>
              </div>
            </button>
            
            <button className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]">
              <div className="flex items-center justify-center gap-4">
                <img src={AppleIcon} alt="loading" className="hover:" />
                <span className="">Masuk dengan Apple</span>
              </div>
            </button>

            <button className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]">
              <div className="flex items-center justify-center gap-4">
                <img src={GoogleIcon} alt="loading" className="hover:" />
                <span className="">Masuk dengan Google</span>
              </div>
            </button>

            <button className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]">
              <div className="flex items-center justify-center gap-4">
                <img src={MicrosoftIcon} alt="loading" className="hover:" />
                <span className="">Masuk dengan Microsoft</span>
              </div>
            </button>
            
          </div>

          <div className="flex items-center justify-center mt-4 font-regular text-[14px] text-secondary">
            <span>Sudah memiliki akun?</span>
            <span className="ml-1">
              <Link
                to="/login"
                className="font-bold"
                style={{ color: "#24445A" }}
              >
                Masuk
              </Link>
            </span>
          </div>
        </form>
      );
    } else if (step === 2) {
        form = (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col max-w-[450px] rounded px-8 pt-6 pb-8"
            >
              <div className="my-[10px]">
                <h1 className="text-6xl font-bold mb-4 text-left text-secondary">
                  Daftar
                </h1>
                {/* Tulisan di bawah judul */}
                <p className="text-sm mb-8 text-secondary">
                  Daftarkan diri Anda untuk mengakses{" "}
                  <span className="font-bold">fitur lainnya</span> Otonometer
                </p>
              </div>
              <div className="flex flex-col">
              <div className="mb-4 flex">
                <div className="gap-[10px]">
                  <label
                    className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <select
                    className="border rounded-[8px] h-[40px] w-[80px] py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Pilih</option>
                    <option value="Tuan">Tuan</option>
                    <option value="Nyonya">Nyonya</option>
                    <option value="Nona">Nona</option>
                  </select>
                </div>
                <div className="w-[376px] sm:w-1/2 md:w-auto pl-2">
                  <label
                    className="block text-secondary text-sm font-medium mb-[4px] text-[14px] "
                    htmlFor="nama"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    className="w-[300px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] focus:outline-none focus:shadow-outline font-regular"
                    id="name"
                    type="name"
                    placeholder="Nama Lengkap"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-[10px]">
                <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="birthDate">Tanggal Lahir</label>
                  <div className="infield leading-tight focus:outline-none focus:shadow-outline font-regular">
                    <DatePicker
                      id="dob"
                      selected={dob}
                      onChange={handleDateChange}
                      dateFormat="yyyy/MM/dd" // Format tanggal
                      placeholderText="Pilih Tanggal" // Placeholder
                      yearDropdownItemNumber={100}
                      showYearDropdown
                      scrollableYearDropdown
                      scrollableMonthYearDropdown
                      minDate={hundredYearsAgo}
                      maxDate={new Date()}
    
                    />
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400 ml-[170px]" />
                  </div>
              </div>
              {/* Dropdown untuk memilih provinsi */}
              <div className="w-full sm:w-1/2 md:w-auto pr-2 mb-4">
                <label
                  className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                  htmlFor="province"
                >
                  Provinsi
                </label>
                <select
                  className="infield font-regular cursor-pointer"
                  id="id"
                  name="province"
                  value={province}
                  onChange={handleChangeProvince}
                  required
                >
                  <option value="">Pilih Provinsi</option>
                        {provinces?.map((province) => (
                          <option key={province.id} value={province.name}>
                            {province.nama}
                          </option>
                        ))}
                      </select>
              </div>
              {/* Dropdown untuk memilih kabupaten/kota */}
              <div className="w-full sm:w-1/2 md:w-auto pr-2 mb-4">
                <label
                  className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                  htmlFor="district"
                >
                  Kabupaten/Kota
                </label>
                <select
                  className="infield font-regular cursor-pointer"
                  id="id"
                  name="city_id"
                  value={city_id}
                  onChange={handleChangeCities}
                  required
                >
                   <option value="">Pilih Kabupaten/Kota</option>
                      {cities?.map((city) => (
                        <option key={city.id} value={city.name}>{city.nama}</option> 
                      ))}
                    </select>
              </div>
              {/* Field untuk mengisi kodepos */}
              {/* <div className="w-full sm:w-1/2 md:w-auto pr-2 mb-4">
                <label
                  className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                  htmlFor="postalCode"
                >
                  Kode pos
                </label>
                <input
                  className="infield focus:outline-none focus:shadow-outline font-regular"
                  id="postalCode"
                  type="text"
                  placeholder="Kode pos"
                  name="postalCode"
                  value={postal_code}
                  onChange={handleChange}
                  required
                />
              </div> */}
              <div className="flex items-center justify-center w-full sm:w-1/2 md:w-auto pr-2 h-[40px]">
                <button
                  className="button rounded-[8px] h-[40px] w-full py-2 px-3"
                  // style={{ backgroundColor: '#86BBD8' }}
                  type="submit"
                >
                  Daftar
                </button>
              </div>
              </div>
              
    
              <div className="flex items-center justify-center mt-4 font-regular text-[14px] text-secondary">
                <span>Sudah memiliki akun?</span>
                <span className="ml-1">
                  <Link
                    to="/login"
                    className="font-bold"
                    style={{ color: "#24445A" }}
                  >
                    Masuk
                  </Link>
                </span>
              </div>
            </form>
          );
        } else if (step === 3) {
      // Jika Anda memiliki lebih banyak langkah, tambahkan kondisi di sini
      // Contoh: else if (step === 3) { ... }
      form = (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[450px] rounded px-8 pt-6 pb-8"
        >
          <div className="my-[10px]">
            <h1 className="text-6xl font-bold mb-4 text-left text-secondary">
              Daftar
            </h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8 text-secondary">
              Daftarkan diri Anda untuk mengakses{" "}
              <span className="font-bold">fitur lainnya</span> Otonometer
            </p>
          </div>
          <div className="flex flex-col">
          <div className="mb-[8px]">
            <div className="mb-[4px]">
              <label
                className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                htmlFor="password"
              >
                Kata Sandi
              </label>
              <input
                className="infield focus:outline-none focus:shadow-outline font-regular"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Kata Sandi"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute translate-x-[350px] translate-y-[-30px]"
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  color="#24445A"
                />
              </button>
            </div>

            <div className="">
              <label
                className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                htmlFor="password"
              >
                Konfirmasi Kata Sandi
              </label>
              <div className="flex justify-between"></div>
              <input
                className="infield focus:outline-none focus:shadow-outline font-regular"
                id="confirm_password"
                type={showPassword ? "text" : "password"}
                placeholder="Konfirmasi Kata Sandi"
                name="confirm_password"
                value={confirm_password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute translate-x-[350px] translate-y-[-30px]"
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  color="#24445A"
                />
              </button>
            </div>
          </div>

          {/* Dropdown untuk memilih */}
          <div className="mb-4">
            <label
              className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
              htmlFor="province"
            >
              Dimana anda mendengar Otonometer?
            </label>
            <select
              className="infield focus:outline-none focus:shadow-outline font-regular"
              id="reference"
              name="reference"
              value={reference}
              onChange={handleChange}
              required
            >
              <option value="">Pilih</option>
              <option value="Medsos">Media Sosial</option>
              <option value="Berita">Berita</option>
            </select>
          </div>

          <div className="flex items-center justify-center w-full sm:w-1/2 md:w-auto pr-2 h-[40px]">
            <button
              className="button rounded-[8px] h-[40px] w-full py-2 px-3"
              // style={{ backgroundColor: '#86BBD8' }}
              type="submit"
              onClick={submitBerhasil}
              
            >
              Daftar
            </button>
          </div>
          </div>
          

          <div className="flex items-center justify-center mt-4 font-regular text-[14px] text-secondary">
            <span>Sudah memiliki akun?</span>
            <span className="ml-1">
              <Link
                to="/login"
                className="font-bold"
                style={{ color: "#24445A" }}
              >
                Masuk
              </Link>
            </span>
          </div>
        </form>
      );
    }
    return (
        <div className="flex flex-col md:flex-row h-screen">
        {/* Bagian Kiri: Ilustrasi (Hanya ditampilkan pada layar laptop atau komputer) */}
        <div className="hidden md:block md:w-1/2 bg-gray-200 flex justify-center items-center">
          <img
            src={Illustration}
            alt="Illustration"
            className="max-h-full w-full"
            style={{ maxWidth: "100%" }}
          />
        </div>
        {/* Bagian Kanan: Form Register */}
        <button
          className="flex align-top ml-[50px] mt-[50px] h-[20px] w-[20px]
        "
          onclick=""
        >
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            color="#24445A"
            className="fa-2x"
          />
        </button>
        <div className="md:w-1/2 flex justify-center items-center">{form}</div>
      </div>
    );
  };
  
  export default Daftar;