import React, { useState, useEffect } from 'react';
import '../style/Carousel.css';
import imageSources from '../data/imagecircle';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
  
    const jelajah = require('../assets/jelajah.png');
    const utak = require('../assets/utak.png');
    const berkaca = require('../assets/berkaca.png');
    const lens = require('../assets/lens.png');
    
    const imageSources = [jelajah, utak, berkaca, lens];
    const controlLinks = [1, 2, 3, 4];
  
    useEffect(() => {
        // Your interval logic here
        const id = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
        }, 4000);
        setIntervalId(id);
      
        return () => {
          clearInterval(id);
        };
      }, [imageSources]);
  
    const handleControlClick = (index) => {
      clearInterval(intervalId);
      setActiveIndex(index - 1);
    };
  
    const handleMouseEnter = () => {
      clearInterval(intervalId);
      console.log("Pause");
    };
  
    const handleMouseLeave = () => {
      // Restart interval on mouse leave
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
      }, 4000);
    };

  return (
    <div className="slideshow">
      <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {imageSources.map((image, index) => (
          <div key={index} className={`slide ${index === activeIndex ? "active" : ""}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
      {/* {controlLinks.map((index) => (
          <a
            key={index}
            href="#"
            data-index={index}
            className={`${index === activeIndex + 1 ? "active" : ""}`}
            onClick={() => handleControlClick(index)}
          >
            <img src={imageSources[index - 1]} alt={`Control ${index}`} />
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default Carousel;
