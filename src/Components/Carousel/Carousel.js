import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

import CardUI from "../Card/CardUI";

const Carousel = ({ data }) => {
  return (
    <Swiper
      slidesPerView={7}
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 3,
        },
        768: {
          width: 768,
          slidesPerView: 4,
        },
        998: {
          width: 998,
          slidesPerView: 6,
        },
        1200: {
          width: 1200,
          slidesPerView: 6,
        },
        1400: {
          width: 1400,
          slidesPerView: 7,
        },
        1600: {
          width: 1500,
          slidesPerView: 7,
        },
      }}
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
    >
      {data.map((card) => (
        <SwiperSlide>
          <CardUI data={card} type={"album"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
