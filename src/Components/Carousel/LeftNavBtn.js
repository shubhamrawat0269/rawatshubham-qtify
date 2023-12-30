import React from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from "swiper/react";
const LeftNavBtn = ({ slideIndex }) => {
  const swiper = useSwiper();
  return (
    <>
      {slideIndex !== 0 && (
        <img
          className={styles.leftNavArrow}
          src="assets/left.png"
          alt="leftNav"
          onClick={() => swiper.slidePrev()}
        />
      )}
    </>
  );
};

export default LeftNavBtn;
