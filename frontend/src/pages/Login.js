import React from 'react';
import Illustration from '../assets/Auth/ilustrasi.jpg';
import Swal from 'sweetalert2';
import '../style/Components.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as AppleIcon } from '../assets/icons/apel.svg';
import { ReactComponent as GoogleIcon } from '../assets/icons/gugol.svg';
import { ReactComponent as MicrosoftIcon } from '../assets/icons/microsoft.svg';
import { ReactComponent as NeracaIcon } from '../assets/icons/neracaruangqu.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
  
    if (isEmailValid) {
      Swal.fire({
        iconHtml: '<img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" class="custom-icon" />',
        title: 'SUCCESS!',
        text: 'Berhasil Login!',
        confirmButtonText: 'Berhasil',
        confirmButtonColor: '#27AE60',
        customClass: {
          customClass: 'dsd',
          icon: 'no-border',
          title: 'title-icon',
          text: 'text-icon',
          confirmButton: 'confirm-icon',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const navigate = useNavigate();
          navigate('/profile');
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ERROR!',
        text: 'Harap login terlebih dahulu!',
      });
    }
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
         {/* Bagian Kiri: Ilustrasi */}
         <div className="hidden md:block md:w-1/2 bg-gray-200 flex justify-center items-center">
            <img src={Illustration} alt="Illustration" className="max-h-full w-full" style={{ maxWidth: '100%' }} />
          </div>
        {/* Bagian Kanan: Form Login */}
        <div className="md:w-1/2 flex justify-center items-center">
          <form onSubmit={this.handleSubmit} className="max-w-md bg-white rounded px-8 pt-6 pb-8">
            <h1 className="text-6xl font-bold mb-4 text-left text-secondary">Masuk</h1>
            <p className="text-sm mb-8 text-secondary">Masuk ke akun Anda untuk mengakses <span className="font-bold">fitur lainnya</span> Otonometer</p>
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
            <div className="relative">
              <label className="block text-secondary text-sm font-medium mb-[4px] text-[14px]" htmlFor="password">
                Kata Sandi
              </label>
              <div className='flex justify-between'>

              </div>
              <input
                className="border rounded-[8px] h-[40px] w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline text-[14px] font-regular"
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
                className="absolute inset-y-0 right-0 px-4"
                style={{ top: '45%', color:'#24445A'}}
              >
                <FontAwesomeIcon icon={this.state.showPassword ? faEye : faEyeSlash} color='#24445A' />
              </button>
            </div>
            <div className='text-right mb-6 mt-2 text-medium text-[14px] text-secondary hover:text-third'>
              <button>
                Lupa Kata Sandi?
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-white py-2 px-4 rounded-[8px] focus:outline-none text-[14px] font-medium focus:shadow-outline w-full bg-secondary hover:bg-third"
                type="submit"
                onClick={this.handleSubmit}
              >
                Masuk
              </button>
            </div>
            <div className="flex items-center mt-4">
              <hr className="flex-1 border-t-2 border-gray-500 mr-3" style={{ borderWidth: '1px' }} />
              <span className="text-24445A text-sm font-medium">atau</span>
              <hr className="flex-1 border-t-2 border-gray-500 ml-3" style={{ borderWidth: '1px' }} />
            </div>
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

            <div className="flex items-center justify-center mt-4 font-regular text-[14px] text-secondary">
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
