import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import msilprojimage from "../../img/msilprojimage.png";
import recipeimg from "../../img/recipeimg.png";
import HOC from "../../img/hoc.png";
import cdashimg from "../../img/cdashimg.png";

import Screenshot from "../../img/Screenshot 2023-08-14 174315.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://msildg.onrender.com/" target="blank"><img src={msilprojimage} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://recibook.onrender.com/" target="blank"><img src={recipeimg} alt="" /></a>
          
        </SwiperSlide>
        <SwiperSlide>
        
          <img src={cdashimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Screenshot} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
