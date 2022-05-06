import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import "./style.css";

export const JustSlider = () => {
  return (
    <div>
      <Carousel
        className='sliderWrapper container'
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}>
        <div className='heroImg'>
          <img
            src='https://klike.net/uploads/posts/2019-12/1575879877_2.jpg'
            alt='heroSlider'
          />
        </div>
        <div>
          <img
            src='https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg'
            alt='heroSlider'
          />
        </div>
        <div>
          <img
            src='https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg'
            alt='heroSlider'
          />
        </div>
        <div>
          <img
            src='https://wallpapershome.ru/images/wallpapers/aston-martin-2560x1440-4k-hd-koncept-superkar-2070.jpg'
            alt='heroSlider'
          />
        </div>
      </Carousel>
    </div>
  );
};
