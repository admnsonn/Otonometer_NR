import React from "react";
import PropTypes from "prop-types";

const Circleimage = ({ src, alt, size }) => {
  const styles = {
    borderRadius: "80%",
    border: "20px solid #FFFFFF", // Add border style
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.60)", // Box shadow style
    width: size,
    height: size,
  };

  return <img src={src} alt={alt} style={styles} />;
};

Circleimage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Circleimage;
