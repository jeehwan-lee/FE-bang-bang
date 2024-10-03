import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Home() {
  return (
    <div>
      <Swiper slidesPerView={2}>
        <SwiperSlide>hello</SwiperSlide>
        <SwiperSlide>hello</SwiperSlide>
        <SwiperSlide>hello</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
