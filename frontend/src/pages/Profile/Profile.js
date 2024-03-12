import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import ProfileImage from "../../assets/profile-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendar,
  faChevronDown,
  faChevronUp,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import ketinggian from "../../assets/ketinggian.png";
import polusi from "../../assets/polusi.png";
import petaprofile from "../../assets/petaprofil.png";
import imgcard from "../../assets/JELAJAH2.png";
import deleteicon from "../../assets/Delete.png"
import editicon from "../../assets/Edit.png"
import DatePicker from "react-datepicker"; // Import komponen datepicker

  const Profile = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const [selectedTab, setSelectedTab] = useState("all");

  
  const toggleTab = () => {
    setActiveTab(activeTab === "activity" ? "save" : "activity")  ;
    setSelectedTab("all")
  };
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup); // Mengubah nilai state showPopup menjadi sebaliknya
  };

  const [showPopupPass, setShowPopupPass] = useState(false);
  const togglePopupPass = () => {
    setShowPopupPass(!showPopupPass); // Mengubah nilai state showPopup menjadi sebaliknya
  };
  
  // FORM PERBAHARUI DATA
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    namalengkap: '',
    kodepos: '',
    nik: '',
    telepon: '',
    web: '',
    district: '',
    thana: '',
    post: ''
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.namalengkap && state.kodepos) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.nik && state.telepon && state.web) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    toast.success('form submit success')
    // if (state.district && state.thana && state.post) {
    //   toast.success('form submit success')
    // } else {
    //   toast.error('Please fillup all input field')
    // }
  }

  // FORM UBAH KATA SANDI
  const formArraykata = [1, 2, 3];
  const [formNokata, setFormNokata] = useState(formArraykata[0])
  const [statekata, setStatekata] = useState({
    pass: '',
    pass2: '',
    nyupass: '',
  })
  const inputHandlekata = (e) => {
    setStatekata({
      ...statekata,
      [e.target.name]: e.target.value
    })
  }
  const nextkata = () => {
    if (formNokata === 1 && statekata.pass && statekata.pass2 && statekata.nyupass) {
      setFormNokata(formNokata + 1)
    }
    else if (formNokata === 2 ) {
      setFormNokata(formNokata + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const prekata = () => {
    setFormNokata(formNokata - 1)
  }
  const finalSubmitkata = () => {
    toast.success('form submit success')
  }

  // DROPDOWN Title
  const [selectedOption, setSelectedOption] = useState("Pilih");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    let formattedOption = '';
    if (option === 'Tuan') {
      formattedOption = 'Tn';
    } else if (option === 'Nyonya') {
      formattedOption = 'Ny';
    } else if (option === 'Nona') {
      formattedOption = 'Nn';
    } else {
      formattedOption = option; // Jika tidak ada pemformatan khusus
    }

    setSelectedOption(formattedOption);
    setDropdownOpen(false);
  };
  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const renderDropdownOptions = () => {
    const options = ["Tuan", "Nyonya", "Nona"];
    return options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleOptionClick(option)}
        className="flex w-[74px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] text-center font-regular items-center justify-left hover:bg-[#E4E5F0]"
      >
        <p>{option}</p>
      </div>
    ));
  };

  //DROPDOWN PROVINSI
  const [selectedProvinsi, setSelectedProvinsi] = useState("Pilih");
  const [dropdownProvinsi, setDropdownProvinsi] = useState(false);

  const handleDropdownProvinsi = () => {
    setDropdownProvinsi(!dropdownProvinsi);
  };

  const handleOptionProvinsi = (option) => {
    setSelectedProvinsi(option);
    setDropdownProvinsi(false);
  };

  const renderDropdownProvinsi = () => {
    const options = ["Aceh", "Aceh Lagi", "Aceh Lagi dan Lagi"];
    return (
      <div
        className="flex flex-col mt-[5px] cursor-pointer items-center"
        style={{ maxHeight: "100px", overflowY: "auto" }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionProvinsi(option)}
            className="flex w-[300px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] text-center font-regular items-center justify-left cursor-pointer mt-[5px] hover:bg-[#E4E5F0]"
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    );
  };

  //DROPDOWN KOTA
  const [selectedKota, setSelectedKota] = useState("Pilih");
  const [dropdownKota, setDropdownKota] = useState(false);

  const handleDropdownKota = () => {
    setDropdownKota(!dropdownKota);
  };

  const handleOptionKota = (option) => {
    setSelectedKota(option);
    setDropdownKota(false);
  };

  const renderDropdownKota = () => {
    const options = ["Ambon Misalnya", "Anggap Ambon Lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi", "Kali ini ambon lagi"];
    return (
      <div
        className="flex flex-col mt-[5px] cursor-pointer items-center"
        style={{ maxHeight: "100px", overflowY: "auto" }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionKota(option)}
            className="flex w-[300px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] text-center font-regular items-center justify-left cursor-pointer mt-[5px] hover:bg-[#E4E5F0]"
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    );
  };

  //DROPDOWN AKTIVITAS
  const [selectedAktivitas, setSelectedAktivitas] = useState("Pilih");
  const [dropdownAktivitas, setDropdownAktivitas] = useState(false);

  const handleDropdownAktivitas = () => {
    setDropdownAktivitas(!dropdownAktivitas);
  };

  const handleOptionAktivitas = (option) => {
    setSelectedAktivitas(option);
    setDropdownAktivitas(false);
  };

  const renderDropdownAktivitas = () => {
    const options = ["Hidup","Mahasiswa","Hidup","Mahasiswa"];
    return (
      <div
        className="flex flex-col mt-[5px] cursor-pointer items-center"
        style={{ maxHeight: "100px", overflowY: "auto" }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionAktivitas(option)}
            className="flex w-[300px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] text-center font-regular items-center justify-left cursor-pointer mt-[5px] hover:bg-[#E4E5F0]"
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
    );
  }

  const submitBerhasil = async () => {
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
              className="button bg-secondary hover:bg-third font-medium mt-[10px]"
              onClick={togglePopup} // Add onClick event handler here
            >
              Perbarui data diri
            </button>
             {/* Popup Form Update data diri*/}
             {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                  <ToastContainer />
                      {
                        formNo === 1 && 
                              <div className="flex flex-col bg-white p-8 rounded-[50px] px-[100px] justify-center items-center">
                              <h1 className="text-[34px] font-bold text-secondary mt-[20px] ">Perbaharui Data Profile</h1>
                              <div className="relative mb-4">
                                <img
                                  src={ProfileImage}
                                  alt="Profile"
                                  className="mt-[20px] mx-auto"
                                  style={{ width: "100px", height: "100px" }}
                                />
                                <button className="absolute top-[85px] right-[5px] bg-white w-[30px] h-[30px] rounded-full opacity-90 hover:opacity-100" onClick={togglePopup}>
                                  <img src={editicon} alt="Edit" className="py-[2px] px-[6px]"/>
                                </button>
                                </div>
                                <form className="mb-[10px]">
                                {/* EMAIL */}
                                {/* EMAIL TIDAK DAPAT DIUBAH ALIAS DISABLE */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="email">Email</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular placeholder-secondary"
                                    placeholder="emailuser@gmail.com"
                                    // placeholder={userEmail}
                                    // value={userEmail} // Jika Anda ingin menampilkan nilai email
                                    style={{ fontStyle: 'italic' }}
                                    disabled
                                  />
                                </div>
                                {/* TITLE DAN NAMA */}
                                <div className="flex gap-[10px] mb-[10px]">
                                  <div>
                                    <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Title</label>
                                    <div
                                    onClick={handleDropdownClick}
                                    className="flex w-[78px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] font-regular cursor-pointer items-center"
                                    >
                                      <p>{selectedOption}</p>
                                      <FontAwesomeIcon
                                        icon={dropdownOpen ? faChevronUp : faChevronDown}
                                        color="#24445A"
                                        className="fixed ml-[40px] w-[12px] h-[15px]"
                                      />
                                    </div>
                                    {dropdownOpen && (
                                      <div className="flex mt-[10px] gap-[10px] cursor-pointer">
                                        {renderDropdownOptions()}
                                      </div>
                                    )}
                                  </div>
                                  <div className="absolute ml-[87px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Nama Lengkap</label>
                                  <input
                                    className="w-[225px] h-[40px] border rounded-[8px] text-secondary py-2 px-3 leading-tight text-[14px] focus:outline-none focus:shadow-outline font-regular"
                                    id="namalengkap"
                                    type="namalengkap"
                                    placeholder="Nama Lengkap"
                                    name="namalengkap"
                                    required
                                    value={state.namalengkap} onChange={inputHandle}
                                  />
                                  </div>
                                </div>
                                {/* TANGGAL LAHIR */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="birthDate">Tanggal Lahir</label>
                                  <div className="infield focus:outline-none focus:shadow-outline font-regular">
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
                                {/* PROVINSI */}
                                <div className="mb-[10px]">
                                  <div>
                                      <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Provinsi</label>
                                      <div
                                      onClick={handleDropdownProvinsi}
                                      className="infield font-regular cursor-pointer"
                                      >
                                        <p>{selectedProvinsi}</p>
                                        <FontAwesomeIcon
                                          icon={dropdownProvinsi ? faChevronUp : faChevronDown}
                                          color="#24445A"
                                          className="fixed ml-[275px] w-[12px] h-[15px]"
                                        />
                                      </div>
                                      {dropdownProvinsi && (
                                        <div className="flex flex-col mt-[5px] cursor-pointer justify-center items-center">
                                          {renderDropdownProvinsi()}
                                        </div>
                                      )}
                                  </div>
                                </div>
                                {/* KOTA */}
                                <div className="mb-[10px]">
                                  <div>
                                      <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Kabupaten/Kota</label>
                                      <div
                                      onClick={handleDropdownKota}
                                      className="infield font-regular cursor-pointer"
                                      >
                                        <p>{selectedKota}</p>
                                        <FontAwesomeIcon
                                          icon={dropdownKota ? faChevronUp : faChevronDown}
                                          color="#24445A"
                                          className="fixed ml-[275px] w-[12px] h-[15px]"
                                        />
                                      </div>
                                      {dropdownKota && (
                                        <div className="flex flex-col mt-[5px] cursor-pointer justify-center items-center">
                                          {renderDropdownKota()}
                                        </div>
                                      )}
                                  </div>
                                </div>
                                {/* KODEPOS */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Kode POS</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="kodepos"
                                    type="numeric"
                                    minLength="5"
                                    maxLength="5"
                                    placeholder="Kode POS"
                                    name="kodepos"
                                    value={state.kodepos} onChange={inputHandle}
                                    required
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <button
                                    className="button focus:outline-none  focus:shadow-outline w-full bg-secondary hover:bg-third font-medium mt-[10px]"
                                    type="button"
                                    onClick={next}
                                  >
                                    Selanjutnya
                                  </button>

                                  <button
                                    className="button focus:outline-none  focus:shadow-outline w-full bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px]"
                                    type="button"
                                    onClick={togglePopup}
                                  >
                                    Batalkan
                                  </button>
                                </div>
                              </form>
                            </div>
                      }
                      {
                        formNo === 2 &&
                          <div className="flex flex-col bg-white p-8 rounded-[50px] px-[100px] justify-center items-center">
                              <h1 className="text-[34px] font-bold text-secondary mt-[20px] ">Perbaharui Data Profile</h1>
                              <div className="relative mb-4">
                                </div>
                                <form className="mb-[10px]">
                                {/* KTP */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">ID/NIK</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="nik"
                                    type="numeric"
                                    minLength="16"
                                    maxLength="16"
                                    placeholder="ID/NIK"
                                    name="nik"
                                    value={state.nik} onChange={inputHandle}
                                    required
                                  />
                                </div>

                                <button
                                    className="button bg-secondary hover:bg-third font-medium mb-[10px]"
                                    type="button"
                                    // onClick=
                                >UPLOAD KTPNYA DONG MAS</button>

                                {/* Nomor Telepon */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Nomor Telepon</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="telepon"
                                    type="numeric"
                                    placeholder="Nomor Telepon"
                                    name="telepon"
                                    value={state.telepon} onChange={inputHandle}
                                    required
                                  />
                                </div>

                                {/* Website */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Website</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="web"
                                    type="numeric"
                                    minLength="16"
                                    maxLength="16"
                                    placeholder="Website"
                                    name="web"
                                    value={state.web} onChange={inputHandle}
                                  />
                                </div>
                                {/* Aktivitas */}
                                <div className="mb-[10px]">
                                  <div>
                                      <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Aktivitas</label>
                                      <div
                                      onClick={handleDropdownAktivitas}
                                      className="infield font-regular cursor-pointer"
                                      >
                                        <p>{selectedAktivitas}</p>
                                        <FontAwesomeIcon
                                          icon={dropdownAktivitas ? faChevronUp : faChevronDown}
                                          color="#24445A"
                                          className="fixed ml-[275px] w-[12px] h-[15px]"
                                        />
                                      </div>
                                      {dropdownAktivitas && (
                                        <div className="flex flex-col mt-[5px] cursor-pointer justify-center items-center">
                                          {renderDropdownAktivitas()}
                                        </div>
                                      )}
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <button
                                    className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                    type="button"
                                    onClick={next}
                                  >
                                    Selanjutnya
                                  </button>
                                  <button
                                    className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                    type="button"
                                    onClick={pre}
                                  >
                                    Sebelumnya
                                  </button>

                                  <button
                                    className="button bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px]"
                                    type="button"
                                    onClick={togglePopup}
                                  >
                                    Batalkan
                                  </button>
                                </div>
                              </form>
                            </div>
                      }

                      {
                        formNo === 3 && 
                        <div className="flex flex-col bg-white p-8 rounded-[50px] px-[100px] justify-center items-center">
                              <h1 className="text-[34px] font-bold text-secondary mt-[20px] ">Perbaharui Data Profile</h1>
                              <div className="relative mb-4">
                                </div>
                                <form className="mb-[10px] flex flex-col">
                                <button
                                  className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                  type="button"
                                  onClick={finalSubmit}
                                >
                                  Tambah Alamat Baru
                                </button>

                                <button
                                  className="button bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px] mb-[200px]"
                                  type="button"
                                  onClick={finalSubmit}
                                >
                                  Hapus Alamat
                                </button>
                                <button
                                  className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                  type="button"
                                  onClick={this.submitBerhasil}
                                >
                                  Simpan
                                </button>
                                <button
                                  className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                  type="button"
                                  onClick={pre}
                                >
                                  Sebelumnya
                                </button>

                                <button
                                  className="button bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px]"
                                  type="button"
                                  onClick={togglePopup}
                                >
                                  Batalkan
                                </button>
                              </form>
                            </div>

                        //TOLONG JANGAN HAPUSSS YANG DIBAWAH INI

                        // <div>
                        //   <div className='flex flex-col mb-2'>
                        //     <label htmlFor="district">District</label>
                        //     <input value={state.district} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='district' placeholder='district name' id='district' />
                        //   </div>
                        //   <div className='flex flex-col mb-2'>
                        //     <label htmlFor="thana">Thana</label>
                        //     <input value={state.thana} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='thana' placeholder='thana' id='thana' />
                        //   </div>
                        //   <div className='flex flex-col mb-2'>
                        //     <label htmlFor="post">Post</label>
                        //     <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='post' placeholder='post' id='post' />
                        //   </div>
                        //   <div className='mt-4 gap-3 flex justify-center items-center'>
                        //     <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                        //     <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
                        //   </div>
                        // </div>
                      }

                  
                 </div>
              )}
            {/* End of Popup Form */}
            <button
              className="button bg-secondary hover:bg-third font-medium mt-[10px]"
              onClick={togglePopupPass}
            >
              Ubah Kata Sandi
            </button>
            {showPopupPass && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <ToastContainer />
                {
                formNo === 1 && 
                    <div className="flex flex-col bg-white p-8 rounded-[50px] px-[100px] justify-center items-center w-[606px]">
                      <h1 className="text-[34px] font-bold text-secondary mt-[20px] ">Ubah Kata Sandi</h1>
                         <div className="relative mb-10">
                    </div>
                    <form className="mb-[10px]">
                                {/* Kata Sandi */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Kata Sandi</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="pass"
                                    type="Password"
                                    placeholder="Masukkan Kata Sandi"
                                    name="pass"
                                    value={statekata.pass} onChange={inputHandlekata}
                                    required
                                  />
                                </div>
                                {/* Konfirm */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Konfirmasi Kata Sandi</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="pass2"
                                    type="Password"
                                    placeholder="Konfirmasikan Kata Sandi"
                                    name="pass2"
                                    value={statekata.pass2} onChange={inputHandlekata}
                                    required
                                  />
                                </div>
                                {/* Pass2 */}
                                <div className="mb-[10px]">
                                  <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]">Kata Sandi Baru</label>
                                  <input
                                    className="infield focus:outline-none focus:shadow-outline font-regular"
                                    id="nyupass"
                                    type="Password"
                                    placeholder="Buat Kata Sandi"
                                    name="nyupass"
                                    value={statekata.nyupass} onChange={inputHandlekata}
                                    required
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <button
                                    className="button focus:outline-none  focus:shadow-outline w-full bg-secondary hover:bg-third font-medium mt-[10px]"
                                    type="button"
                                    onClick={submitBerhasil}
                                  >
                                    Selanjutnya
                                  </button>

                                  <button
                                    className="button focus:outline-none  focus:shadow-outline w-full bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px]"
                                    type="button"
                                    onClick={togglePopupPass}
                                  >
                                    Batalkan
                                  </button>
                                </div>
                              </form>
                            </div>
                      }
                      {
                        formNo === 2 &&
                          <div className="flex flex-col bg-white p-8 rounded-[50px] px-[100px] justify-center items-center">
                          </div>
                      }

                      {
                        formNo === 3 && 
                        <div className="flex flex-col bg-white p-8 rounded-[50px] px-[100px] justify-center items-center">
                              <h1 className="text-[34px] font-bold text-secondary mt-[20px] ">Perbaharui Data Profile</h1>
                              <div className="relative mb-4">
                                </div>
                                <form className="mb-[10px] flex flex-col">
                                <button
                                  className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                  type="button"
                                  onClick={finalSubmit}
                                >
                                  Tambah Alamat Baru
                                </button>

                                <button
                                  className="button bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px] mb-[200px]"
                                  type="button"
                                  onClick={finalSubmit}
                                >
                                  Hapus Alamat
                                </button>
                                <button
                                  className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                  type="button"
                                  onClick={submitBerhasil}
                                >
                                  Simpan
                                </button>
                                <button
                                  className="button bg-secondary hover:bg-third font-medium mt-[10px]"
                                  type="button"
                                  onClick={pre}
                                >
                                  Sebelumnya
                                </button>

                                <button
                                  className="button bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px]"
                                  type="button"
                                  onClick={togglePopup}
                                >
                                  Batalkan
                                </button>
                              </form>
                            </div>

                        //TOLONG JANGAN HAPUSSS YANG DIBAWAH INI

                        // <div>
                        //   <div className='flex flex-col mb-2'>
                        //     <label htmlFor="district">District</label>
                        //     <input value={state.district} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='district' placeholder='district name' id='district' />
                        //   </div>
                        //   <div className='flex flex-col mb-2'>
                        //     <label htmlFor="thana">Thana</label>
                        //     <input value={state.thana} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='thana' placeholder='thana' id='thana' />
                        //   </div>
                        //   <div className='flex flex-col mb-2'>
                        //     <label htmlFor="post">Post</label>
                        //     <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='post' placeholder='post' id='post' />
                        //   </div>
                        //   <div className='mt-4 gap-3 flex justify-center items-center'>
                        //     <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                        //     <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
                        //   </div>
                        // </div>
                      }

                  
                 </div>
              )}
              
            <button
              className="button bg-secondary hover:bg-third font-medium mt-[10px]"
            >
              Pilih Paket Berlangganan
            </button>
            <button
              className="button bg-[#CD3838] hover:bg-[#E54747] font-medium mt-[10px]"
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
                      <span className="font-bold">168</span> km²
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={polusi} alt="loading" className="hover:" />
                    <p className="text-lg">
                      <span className="font-bold">2.453</span> 10³ jiwa
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
