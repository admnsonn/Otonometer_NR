import React, { useState, useEffect } from 'react';
import '../style/Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const imageSources = [
    { src: require('../assets/jelajah.png'), href: '/Jelajah'},
    { src: require('../assets/utak.png'), href: '/Utak' },
    { src: require('../assets/berkaca.png'), href: '/Berkaca' },
    { src: require('../assets/lens.png'), href: '/' }
  ];

  useEffect(() => {
    const id = setInterval(() => {
      rotateCarousel();
    }, 3000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [activeIndex]);

  const rotateCarousel = () => {
    const newIndex = (activeIndex + 1) % imageSources.length;
    const rotationDegree = newIndex * 90;
    document.querySelector(".carousel").style.transform = `rotate(${rotationDegree}deg)`;
    setActiveIndex(newIndex);
  };

  const handleControlClick = (index) => {
    clearInterval(intervalId);
    const rotationDegree = (index * 90);
    document.querySelector(".carousel").style.transform = `rotate(${rotationDegree}deg)`;
    setActiveIndex(index);
    const newIntervalId = setInterval(() => {
      rotateCarousel();
    }, 3000);
    setIntervalId(newIntervalId);
  };

  return (
    <div className="slideshow">
      <div className="carousel">
        {imageSources.map(({ src, href }, index) => (
          <div key={index} className={`slide ${index === activeIndex ? "active" : ""}`}>
            <a href={href} target="_self" rel="noopener noreferrer">
              <img src={src} alt={`Slide ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>

      <div className="controls">
        {imageSources.map((_, index) => (
          <a
            key={index}
            href="#"
            data-index={index}
            className={`${index === activeIndex ? "active" : ""}`}
            onClick={() => handleControlClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
