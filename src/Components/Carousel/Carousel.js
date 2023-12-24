import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

import CardUI from "../Card/CardUI";

const Carousel = ({ data }) => {
  return (
    <Swiper
      slidesPerView={7}
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
