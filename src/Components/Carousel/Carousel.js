import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./Carousel.module.css";

import CardUI from "../Card/CardUI";
import LeftNavBtn from "./LeftNavBtn";
import RightNavBtn from "./RightNavBtn";

const Carousel = ({ data, type, auto = false }) => {
  const [showRightNavBtn, setShowRightNavBtn] = useState(true);
  const [showLeftNavBtn, setShowLeftNavBtn] = useState(false);

  const handleSwiper = (swiper) => {
    swiper.on("slideChange", () => {
      const isLastCard = swiper.isEnd;
      const isStartCard = swiper.isBeginning;
      setShowRightNavBtn(!isLastCard);
      setShowLeftNavBtn(!isStartCard);
    });
  };
  return (
    <Swiper
      slidesPerView={7}
      autoplay={
        auto && {
          delay: 1500,
        }
      }
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
      modules={[Navigation, Autoplay]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
      onSwiper={handleSwiper}
    >
      {data.map((card) => (
        <SwiperSlide>
          <CardUI data={card} type={type} />
        </SwiperSlide>
      ))}
      <div className={styles.navBtns}>
        <LeftNavBtn show={showLeftNavBtn} />
        <RightNavBtn show={showRightNavBtn} />
      </div>
    </Swiper>
  );
};

export default Carousel;
