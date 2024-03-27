import React, { useState } from 'react';
import PropTypes from "prop-types";

const Circleimage = ({ src, alt, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const containerStyle = {
    position: "relative",
    display: "inline-block" // Mengubah display agar dapat menempatkan elemen secara horizontal
  };

  const imageStyle = {
    width: size,
    height: size,
    borderRadius: "80%",
    border: "8px solid #FFFFFF",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.60)",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "calc(100% + 5px)", // Memperbaiki posisi dropdown agar muncul tepat di bawah gambar
    right: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    zIndex: 999,
    marginTop: "10px",
    paddingLeft: "20px", // Menambah padding kiri sebesar 20px
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Menambah bayangan untuk efek kejelasan
    minWidth: "120px", // Menetapkan lebar minimum dropdown
    textAlign: "left", // Menetapkan teks ke kiri
    lineHeight: "1.5", // Menetapkan ketinggian baris
    fontSize: "14px", // Menetapkan ukuran font
    color: "#333", // Menetapkan warna teks
    // Anda dapat menambahkan properti styling tambahan sesuai kebutuhan Anda
  };

  return (
    <div style={containerStyle}>
      <img
        src={src}
        alt={alt}
        style={imageStyle}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div style={dropdownStyle}>
          <ul>
            <li>Profile</li>
            <li>Keluar Akun</li>
          </ul>
        </div>
      )}
    </div>
  );
};

Circleimage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Circleimage;
