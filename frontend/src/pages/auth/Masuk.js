import React from 'react'
import Illustration from "../../assets/Auth/ilustrasi.jpg";
import logo from "../../assets/biglogo.svg";
import { Link } from "react-router-dom";
import AppleIcon from "../../assets/icons/apel.svg";
import GoogleIcon from "../../assets/icons/gugol.svg";
import MicrosoftIcon from "../../assets/icons/microsoft.svg";
import NeracaIcon from "../../assets/icons/neracaruangqu.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Masuk = () => {
  return (
    <section className='w-full h-screen xl:flex xl:items-start xl:justify-between flex justify-center items-start'>
      <div className="flex hidden xl:block xl:relative xl:w-1/2 h-full xl:flex-col">
        <img
          src={Illustration}
          alt="Illustration"
          className="w-full h-full object-cover"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <button 
        className="xl:absolute xl:left-[50%] w-8 p-2 mt-4 xl:ml-4"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          color="#24445A"
          className="fa-xl"
          onclick=""
        />
      </button>

      <div className="mt-[40px] sm:w-full md:w-1/2 md:flex md:flex-col justify-center items-center">
        <form
            // onSubmit={this.handleSubmit}
        >
          <img
            src={logo}
            alt='Logo Otonometer'
            className='hidden md:block w-full h-[40px] my-[30px]'
          >
          </img>

          <h1 className="text-6xl font-bold mb-4 text-left text-secondary xl:mt-2 mt-[30px]">
            Masuk
          </h1>
          <p className="text-sm mb-8 text-secondary">
            Masuk ke akun Anda untuk mengakses{" "}
            <span className="font-bold">fitur lainnya</span> Otonometer
          </p>
          
          <div className="mb-4">
            <label
              className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="infield md:w-full focus:outline-none focus:shadow-outline font-regular"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              // value={this.state.email}
              // onChange={this.handleChange}
              required
            />
          </div>

          <div className="input-icons">
            <label
              className="block text-secondary text-sm font-medium mb-[4px] text-[14px]"
              htmlFor="password"
            >
              Kata Sandi
            </label>
            <input
              className="infield md:w-full focus:outline-none focus:shadow-outline font-regular"
              id="password"
              // type={this.state.showPassword ? "text" : "password"}
              placeholder="Masukkan Kata Sandi"
              name="password"
              // value={this.state.password}
              // onChange={this.handleChange}
              required
            />
            <button
              type="button"
              // onClick={this.togglePasswordVisibility}
              className="absolute md:inset-y-0 md:right-0 px-4 inset-y-0 right-[350px]"
              style={{ top: "45%", color: "#24445A" }}
            >
                
            </button>
          </div>

          <div className="text-right mb-6 mt-2 text-medium text-[14px] text-secondary hover:text-third">
            <button>Lupa Kata Sandi?</button>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="text-white py-2 px-4 rounded-[8px] focus:outline-none text-[14px] font-medium focus:shadow-outline w-full bg-secondary hover:bg-third"
              type="submit"
                // onClick={this.handleSubmit}
            >
              Masuk
            </button>
          </div>

          <div className="flex items-center mt-4">
            <hr
              className="flex-1 border-t-2 border-gray-500 mr-3"
              style={{ borderWidth: "1px" }}
            />
            <span className="text-24445A text-sm font-medium">atau</span>
            <hr
              className="flex-1 border-t-2 border-gray-500 ml-3"
              style={{ borderWidth: "1px" }}
            />
          </div>

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
            <span>Belum memiliki akun?</span>
            <span className="ml-1">
              <Link
                to="/register"
                className="font-bold"
                style={{ color: "#24445A" }}
              >
                Daftar
              </Link>
            </span>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Masuk