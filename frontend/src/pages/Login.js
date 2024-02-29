import React from 'react';
import Illustration from '../assets/Auth/ilustrasi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as AppleIcon } from '../assets/icons/apple.svg';
import { ReactComponent as GoogleIcon } from '../assets/icons/google.svg';
import { ReactComponent as MicrosoftIcon } from '../assets/icons/microsoft.svg';
import { ReactComponent as NeracaIcon } from '../assets/icons/neracaruang.svg';
import { Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false, // State untuk mengontrol visibilitas password
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

  render() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
         {/* Bagian Kiri: Ilustrasi (Hanya ditampilkan pada layar laptop atau komputer) */}
         <div className="hidden md:block md:w-1/2 bg-gray-200 flex justify-center items-center">
            <img src={Illustration} alt="Illustration" className="max-h-full w-full" style={{ maxWidth: '100%' }} />
          </div>
        {/* Bagian Kanan: Form Login */}
        <div className="md:w-1/2 flex justify-center items-center">
          <form onSubmit={this.handleSubmit} className="max-w-md bg-white rounded px-8 pt-6 pb-8">
            <h1 className="text-6xl font-bold mb-4 text-center" style={{ color: '#24445A' }}>Masuk</h1>
            {/* Tulisan di bawah judul */}
            <p className="text-sm mb-8" style={{ color: '#064878' }}>Masuk ke akun Anda untuk mengakses <span className="font-bold" style={{ color: '#24445A' }}>fitur lainnya</span> Otonometer</p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Kata Sandi
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={this.state.showPassword ? 'text' : 'password'}
                placeholder="Masukkan Kata Sandi"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <button
                type="button"
                onClick={this.togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                style={{ top: '50%', transform: 'translateY(-30%)' }}
              >
                <FontAwesomeIcon icon={this.state.showPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                style={{ backgroundColor: '#86BBD8' }}
                type="submit"
              >
                Masuk
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
            </div>

            <div className="flex items-center justify-center mt-4">
              <span >Belum memiliki akun?</span>
              <span className="ml-1">
              <Link to="/register" className="font-bold" style={{ color: '#24445A' }}>Daftar</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;