import React from "react";
import Illustration from "../assets/Auth/ilustrasi.jpg";
import DatePicker from "react-datepicker"; // Import komponen datepicker
import Swal from "sweetalert2";
import "../style/Components.css";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS untuk datepicker
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendar,
  faArrowAltCircleLeft,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons"; // Import ikon kalender
import AppleIcon from "../assets/icons/apple.svg";
import GoogleIcon from "../assets/icons/google.svg";
import MicrosoftIcon from "../assets/icons/microsoft.svg";
import NeracaIcon from "../assets/icons/neracaruang.svg";
import { Link } from "react-router-dom";
import '../style/BtnLoginRegist.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      password: "",
      konfirm: "",
      showPassword: false, // State untuk mengontrol visibilitas password
      step: 1, // Langkah saat ini dalam proses pendaftaran
      title: "", // State untuk menyimpan gelar
      birthDate: null, // State untuk menyimpan tanggal lahir
      province: "", // State untuk menyimpan provinsi
      district: "", // State untuk menyimpan kabupaten/kota
      postalCode: "", // State untuk menyimpan kodepos
    };
  }

  // Handler untuk mengubah state saat input form berubah
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Handler untuk toggle visibilitas password
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  // Handler untuk menangani submit form
  handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi jika diperlukan
    // Lakukan logika untuk menangani langkah selanjutnya dalam pendaftaran
    this.setState({
      step: this.state.step + 1, // Pindah ke langkah selanjutnya
    });
  };

  submitBerhasil = async () => {
    const { value: otp } = await Swal.fire({
      title: "Verifikasi Email Anda!",
      html: `
      <div style="text-align: center; margin-bottom: 10px; font-size: 15px">Kode OTP</div>
        <input id="otp1" class="swal2-input otp-input" maxlength="1" style="width: 3em; text-align: center;" />
        <input id="otp2" class="swal2-input otp-input" maxlength="1" style="width: 3em; text-align: center;" />
        <input id="otp3" class="swal2-input otp-input" maxlength="1" style="width: 3em; text-align: center;" />
        <input id="otp4" class="swal2-input otp-input" maxlength="1" style="width: 3em; text-align: center;" />
        <br>
        <br>
        <br>
        <br>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const otp1 = document.getElementById("otp1").value;
        const otp2 = document.getElementById("otp2").value;
        const otp3 = document.getElementById("otp3").value;
        const otp4 = document.getElementById("otp4").value;

        if (!otp1 || !otp2 || !otp3 || !otp4) {
          Swal.showValidationMessage("Semua field harus diisi");
          return false;
        }
        const enteredOtp = otp1 + otp2 + otp3 + otp4;
        return enteredOtp;
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

    if (otp) {
      Swal.fire({
        iconHtml:'<img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" class="custom-icon" />',
        title: "SUCCESS!",
        text: "Berhasil Login!",
        confirmButtonText: "Berhasil",
        confirmButtonColor: "#27AE60",
        customClass: {
          icon: "no-border",
          title: "title-icon",
          text: "text-icon",
          confirmButton: "confirm-icon",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/Login";
        }
      });
    }
  };

  render() {
    const { step } = this.state;

    // Render form berdasarkan langkah saat ini
    let form;

    if (step === 1) {
      form = (
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col max-w-[400px] rounded px-8 pt-6 pb-8"
        >
          <div className="ml-[11px] my-[20px]">
            <h1 className="text-6xl font-bold mb-4 text-left text-secondary">
              Daftar
            </h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8 text-secondary">
              Daftarkan diri Anda untuk mengakses{" "}
              <span className="font-bold">fitur lainnya</span> Otonometer
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="mb-4">
              <label
                className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="infield focus:outline-none focus:shadow-outline text-[14px] font-regular"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <button
              className="button"
              type="submit"
            >
              Daftar
            </button>
          </div>
          {/* Garis Atau */}
          <div className="flex mt-4 w-[300px] justify-center items-center ">
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
            {/* <button className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]">
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
            </button> */}
            <button className="AnimateBTN">
              <span className="text">Masuk Dengan Neraca Ruang</span><span class="icon">
              <img src={NeracaIcon} alt="loading" className="hover:" />
              </span>
            </button>

            <button className="AnimateBTN">
              <span className="text">Masuk Dengan Apple</span><span class="icon">
              <img src={AppleIcon} alt="loading" className="hover:" />
              </span>
            </button>

            <button className="AnimateBTN">
              <span className="text">Masuk Dengan Google</span><span class="icon">
              <img src={GoogleIcon} alt="loading" className="hover:" />
              </span>
            </button>

            <button className="AnimateBTN">
              <span className="text">Masuk Dengan Microsoft</span><span class="icon">
              <img src={MicrosoftIcon} alt="loading" className="hover:" />
              </span>
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
          </div>
        </form>
      );
    } else if (step === 2) {
      form = (
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col max-w-[400px] rounded px-8 pt-6 pb-8"
        >
          <div className="ml-[11px] my-[20px]">
            <h1 className="text-6xl font-bold mb-4 text-left text-secondary">
              Daftar
            </h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8 text-secondary">
              Daftarkan diri Anda untuk mengakses{" "}
              <span className="font-bold">fitur lainnya</span> Otonometer
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
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
                value={this.state.title}
                onChange={this.handleChange}
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
                className="w-[225px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] focus:outline-none focus:shadow-outline font-regular"
                id="nama"
                type="nama"
                placeholder="Nama Lengkap"
                name="nama"
                value={this.state.nama}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="birthDate">Tanggal Lahir</label>
              <div className="infield leading-tight focus:outline-none focus:shadow-outline font-regular">
                <DatePicker
                  id="birthDate"
                  // selected={this.state.birthDate}
                  // onChange={this.handleDateChange}
                  dateFormat="dd/MM/yy" // Format tanggal
                  placeholderText="Pilih Tanggal" // Placeholder
                />
                <FontAwesomeIcon icon={faCalendar} className="text-gray-400 ml-[100px]" />
              </div>
          </div>
          {/* <div className="mb-4">
                <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="birthDate">
                  Tanggal Lahir
                </label>
                <div className="relative w-[384px]">
                  <DatePicker
                    id="birthDate"
                    className="border rounded-[8px] h-[40px] w-[376px] py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                    selected={this.state.birthDate}
                    onChange={this.handleDateChange}
                    dateFormat="dd/MM/yy" // Format tanggal
                    placeholderText="DD/MM/YY" // Placeholder
                  />
                  <div className="absolute top-0 right-0 px-[30px] py-2 pointer-events-none">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
                  </div>
                </div>
            </div>   */}
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
              id="province"
              name="province"
              value={this.state.province}
              onChange={this.handleChange}
              required
            >
              <option value="">Pilih Provinsi</option>
              <option value="dummy">dummy</option>
              {/* Daftar provinsi */}
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
              id="district"
              name="district"
              value={this.state.district}
              onChange={this.handleChange}
              required
            >
              <option value="">Pilih Kabupaten/Kota</option>
              <option value="dummy">dummy</option>
              {/* Daftar kabupaten/kota */}
            </select>
          </div>
          {/* Field untuk mengisi kodepos */}
          <div className="w-full sm:w-1/2 md:w-auto pr-2 mb-4">
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
              value={this.state.postalCode}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center w-full sm:w-1/2 md:w-auto pr-2 h-[40px]">
            <button
              className="button"
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
          onSubmit={this.handleSubmit}
          className="flex flex-col max-w-[400px] rounded px-8 pt-6 pb-8"
        >
          <div className="ml-[11px] my-[20px]">
            <h1 className="text-6xl font-bold mb-4 text-left text-secondary">
              Daftar
            </h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8 text-secondary">
              Daftarkan diri Anda untuk mengakses{" "}
              <span className="font-bold">fitur lainnya</span> Otonometer
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
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
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Masukkan Kata Sandi"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <button
                type="button"
                onClick={this.togglePasswordVisibility}
                className="absolute translate-x-[285px] translate-y-[-30px]"
              >
                <FontAwesomeIcon
                  icon={this.state.showPassword ? faEye : faEyeSlash}
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
                id="konfirm"
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Konfirmasi Kata Sandi"
                name="konfirm"
                value={this.state.konfirm}
                onChange={this.handleChange}
                required
              />
              <button
                type="button"
                onClick={this.togglePasswordVisibility}
                className="absolute translate-x-[285px] translate-y-[-30px]"
              >
                <FontAwesomeIcon
                  icon={this.state.showPassword ? faEye : faEyeSlash}
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
              id="province"
              name="province"
              value={this.state.province}
              onChange={this.handleChange}
              required
            >
              <option value="">Pilih</option>
              <option value="Medsos">Media Sosial</option>
              <option value="Berita">Berita</option>
            </select>
          </div>

          <div className="flex items-center justify-center w-full sm:w-1/2 md:w-auto pr-2 h-[40px]">
            <button
              className="button"
              // style={{ backgroundColor: '#86BBD8' }}
              type="submit"
              onClick={this.submitBerhasil}
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
  }
}

export default Register;
