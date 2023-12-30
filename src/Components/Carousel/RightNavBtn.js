import React from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from "swiper/react";
const RightNavBtn = ({ slideIndex, numOfCards }) => {
  const swiper = useSwiper();
  console.log({ slideIndex, numOfCards });

  return (
    <>
      {slideIndex !== numOfCards && (
        <img
          className={styles.rightNavArrow}
          src="assets/right.png"
          alt="rightNav"
          onClick={() => swiper.slideNext()}
        />
      )}
    </>
  );
};

export default RightNavBtn;
