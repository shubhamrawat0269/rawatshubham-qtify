import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

import CardUI from "../Card/CardUI";
import LeftNavBtn from "./LeftNavBtn";
import RightNavBtn from "./RightNavBtn";

const Carousel = ({ data }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <Swiper
      slidesPerView={7}
      breakpoints={{
        345: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      }}
      modules={[Navigation]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
      onActiveIndexChange={(swiperCore) => {
        setSwiperIndex(swiperCore.activeIndex);
      }}
    >
      <LeftNavBtn slideIndex={swiperIndex} />
      {data.map((card) => (
        <SwiperSlide>
          <CardUI data={card} type={"album"} />
        </SwiperSlide>
      ))}
      <RightNavBtn slideIndex={swiperIndex} numOfCards={data.length - 8} />
    </Swiper>
  );
};

export default Carousel;
