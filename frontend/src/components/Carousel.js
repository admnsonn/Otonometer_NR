import React, { useState, useEffect } from 'react';
import '../style/Carousel.css';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    const imageSources = [require('../assets/jelajah.png'), require('../assets/utak.png'), require('../assets/berkaca.png'), require('../assets/lens.png')];
    const controlLinks = [1, 2, 3, 4];

    useEffect(() => {
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
        const rotationDegree = -((index - 1) * 90);
        document.querySelector(".carousel").style.transform = `rotate(${rotationDegree}deg)`;
        setActiveIndex(index - 1);
    };

    const handleMouseEnter = () => {
        clearInterval(intervalId);
    };

    return (
        <div className="slideshow">
            <div className="carousel" onMouseEnter={handleMouseEnter}>
                {imageSources.map((image, index) => (
                    <div key={index} className={`slide ${index === activeIndex ? "active" : ""}`}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            
            <div className="controls">
                {controlLinks.map((index) => (
                    <a
                        key={index}
                        href="#"
                        data-index={index}
                        className={`${index === activeIndex + 1 ? "active" : ""}`}
                        onClick={() => handleControlClick(index)}
                    >
                        <img src={imageSources[index - 1]} alt={`Control ${index}`} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
