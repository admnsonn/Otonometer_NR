import React from 'react';
import Illustration from '../assets/Auth/ilustrasi.jpg';
import DatePicker from 'react-datepicker'; // Import komponen datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS untuk datepicker
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCalendar, faArrowAltCircleLeft, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'; // Import ikon kalender
import { ReactComponent as AppleIcon } from '../assets/icons/apple.svg';
import { ReactComponent as GoogleIcon } from '../assets/icons/google.svg';
import { ReactComponent as MicrosoftIcon } from '../assets/icons/microsoft.svg';
import { ReactComponent as NeracaIcon } from '../assets/icons/neracaruang.svg';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false, // State untuk mengontrol visibilitas password
      step: 1, // Langkah saat ini dalam proses pendaftaran
      title: '', // State untuk menyimpan gelar
      birthDate: null, // State untuk menyimpan tanggal lahir
      province: '', // State untuk menyimpan provinsi
      district: '', // State untuk menyimpan kabupaten/kota
      postalCode: '' // State untuk menyimpan kodepos
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
      step: this.state.step + 1 // Pindah ke langkah selanjutnya
    });
  };

  render() {
    const { step } = this.state;
    

    // Render form berdasarkan langkah saat ini
    let form;
    
    if (step === 1) {
      form = (
        
        <form onSubmit={this.handleSubmit} className="max-w-md bg-white rounded px-8 pt-6 pb-8">
            <h1 className="text-6xl font-bold mb-4 text-left text-secondary">Daftar</h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8 text-secondary">Daftarkan diri Anda untuk mengakses <span className="font-bold">fitur lainnya</span> Otonometer</p>
            <div className="mb-4">
              <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="email">
                Email
              </label>
              <input
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-white py-2 px-4 rounded-[8px] focus:outline-none text-[14px] font-medium focus:shadow-outline w-full bg-third hover:bg-secondary"
                type="submit"
              >
                Daftar
              </button>
            </div>
            {/* Garis Atau */}
            <div className="flex items-center mt-4">
              <hr className="flex-1 border-t-2 border-gray-500 mr-3" style={{ borderWidth: '1px' }} />
              <span className="text-24445A text-sm font-medium">atau</span>
              <hr className="flex-1 border-t-2 border-gray-500 ml-3" style={{ borderWidth: '1px' }} />
            </div>
            {/* Button Login dengan cara lain */}
            <div className="flex flex-col items-center mt-4 space-y-4">
            <button 
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]" 
              >
                <div className='flex items-center justify-center gap-4'>
                  <NeracaIcon />
                  <span className=''>Masuk dengan Neraca Ruang</span>
                </div>
                
              </button>

              <button 
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]" 
              >
                <div className='flex items-center justify-center gap-4'>
                  <AppleIcon />
                  <span className=''>Masuk dengan Apple</span>
                </div>
                
              </button>

              <button 
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]" 
              >
                <div className='flex items-center justify-center gap-4'>
                  <GoogleIcon />
                  <span className=''>Masuk dengan Google</span>
                </div>
                
              </button>

              <button 
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline hover:bg-secondary hover:text-white font-regular text-[14px]" 
              >
                <div className='flex items-center justify-center gap-4'>
                  <MicrosoftIcon />
                  <span className=''>Masuk dengan Microsoft</span>
                </div>
                
              </button>
            </div>
            {/* <div className="flex flex-col items-center mt-4 space-y-4">
              <button 
                className="bg-white border-2 border-A7A7A7 py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline w-full" 
                onClick={() => {}}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#86BBD8'; e.target.style.color = '#fff' }} 
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#A7A7A7' }} 
              >
                <NeracaIcon className="w-5 h-5 mr-2" />
                <span style={{ fontSize: '16px' }} className="font-normal">Masuk dengan Neraca Ruang</span>
              </button>
              <button 
                className="bg-white border-2 border-A7A7A7 py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline w-full" 
                onClick={() => {}}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#86BBD8'; e.target.style.color = '#fff' }} 
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#A7A7A7' }} 
              >
                <AppleIcon className="w-5 h-5 mr-2" />
                <span style={{ fontSize: '16px' }} className="font-normal">Masuk dengan Apple</span>
              </button>
              <button 
                className="bg-white border-2 border-A7A7A7 py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline w-full" 
                onClick={() => {}}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#86BBD8'; e.target.style.color = '#fff' }} 
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#A7A7A7' }} 
              >
                <GoogleIcon className="w-5 h-5 mr-2" />
                <span style={{ fontSize: '16px' }} className="font-normal">Masuk dengan Google</span>
              </button>
              <button 
                className="bg-white border-2 border-A7A7A7 py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline w-full" 
                onClick={() => {}}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#86BBD8'; e.target.style.color = '#fff' }} 
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#A7A7A7' }} 
              >
                <MicrosoftIcon className="w-5 h-5 mr-2" />
                <span style={{ fontSize: '16px' }} className="font-normal">Masuk dengan Microsoft</span>
              </button>
            </div> */}

            <div className="flex items-center justify-center mt-4 font-regular text-[14px] text-secondary">
              <span >Sudah memiliki akun?</span>
              <span className="ml-1">
                <Link to="/login" className="font-bold" style={{ color: '#24445A' }}>Masuk</Link>
              </span>
            </div>
          </form>
      );
    } else if (step === 2) {
      form = (
        <form onSubmit={this.handleSubmit} className="max-w-md bg-white rounded px-8 pt-6 pb-8">
          <h1 className="text-6xl font-bold mb-4 text-left" style={{ color: '#24445A' }}>Daftar</h1>
          {/* Tulisan di bawah judul */}
          <p className="text-sm mb-8 " style={{ color: '#064878' }}>Daftarkan diri Anda untuk mengakses <span className="font-bold" style={{ color: '#24445A' }}>fitur lainnya</span> Otonometer</p>
          <div className="mb-4 flex w-[384px]">
            <div className="w-full sm:w-1/2 md:w-auto pr-2">
              <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="title">
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
                <option value="Nona">Nyonya</option>
              </select>
            </div>
            <div className="w-[376px] sm:w-1/2 md:w-auto pl-2">
              <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px] " htmlFor="email">
                Nama Lengkap
              </label>
              <input
                className="border rounded-[8px] h-[40px] w-[280px] py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
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
          <div className="w-full mb-4">
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
                    placeholderText="Pilih Tanggal" // Placeholder
                    required
                  />
                  <div className="absolute top-0 right-0 px-[30px] py-2 pointer-events-none">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
                  </div>
                </div>
              </div>
              {/* Dropdown untuk memilih provinsi */}
              <div className="w-full sm:w-1/2 md:w-auto pr-2 mb-4">
                <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="province">
                  Provinsi
                </label>
                <select
                  className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                  id="province"
                  name="province"
                  value={this.state.province}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Pilih Provinsi</option>
                  {/* Daftar provinsi */}
                </select>
              </div>
              {/* Dropdown untuk memilih kabupaten/kota */}
              <div className="w-full sm:w-1/2 md:w-auto pr-2 mb-4">
                <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="district">
                  Kabupaten/Kota
                </label>
                <select
                  className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                  id="district"
                  name="district"
                  value={this.state.district}
                  onChange={this.handleChange}
                  required
                >
                  <option value="">Pilih Kabupaten/Kota</option>
                  {/* Daftar kabupaten/kota */}
                </select>
              </div>
              {/* Field untuk mengisi kodepos */}
              <div className="w-full mb-4">
                <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="postalCode">
                  Kodepos
                </label>
                <input
                  className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
                  id="postalCode"
                  type="text"
                  placeholder="Kodepos"
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
              <button
                className="text-white py-2 px-4 rounded-[8px] focus:outline-none text-[14px] font-medium focus:shadow-outline w-full bg-third hover:bg-secondary"
                // style={{ backgroundColor: '#86BBD8' }}
                type="submit"
              >
                Daftar
              </button>
            </div>

          <div className="flex items-center justify-center mt-4 font-regular text-[14px] text-secondary">
            <span>Sudah memiliki akun?</span>
            <span className="ml-1">
              <Link to="/login" className="font-bold" style={{ color: '#24445A' }}>Masuk</Link>
            </span>
          </div>
        </form>

      );
    } else {
      // Jika Anda memiliki lebih banyak langkah, tambahkan kondisi di sini
      // Contoh: else if (step === 3) { ... }
    }

    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Bagian Kiri: Ilustrasi (Hanya ditampilkan pada layar laptop atau komputer) */}
        <div className="hidden md:block md:w-1/2 bg-gray-200 flex justify-center items-center">
            <img src={Illustration} alt="Illustration" className="max-h-full w-full" style={{ maxWidth: '100%' }} />
          </div>
        {/* Bagian Kanan: Form Register */}
        <button className='flex align-top ml-[50px] mt-[50px] h-[20px] w-[20px]
        ' onclick="">
          <FontAwesomeIcon icon={faArrowCircleLeft} color='#24445A' className='fa-2x' />
        </button>
        <div className="md:w-1/2 flex justify-center items-center">
          {form}
        </div>
      </div>
    );
  }
}

export default Register;
