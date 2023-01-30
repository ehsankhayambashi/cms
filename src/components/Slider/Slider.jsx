import React, { useState, useEffect } from "react";
import "./Slider.scss";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const data = [
  "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  const autoPlayTime = 3000;
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${(data.length + 1) * 100}vw`,
        }}
      >
        {data.map((imgSrc, index) => (
          <img src={imgSrc} alt="" key={index} />
        ))}
      </div>
      <div className="buttons">
        <div className="button-container">
          <div className="icon" onClick={prevSlide}>
            <WestIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastIcon />
          </div>
        </div>
        <div className="dots">
          {Array.from({ length: data.length }).map((item, index) => (
            <div
              key={index}
              className={currentSlide === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
