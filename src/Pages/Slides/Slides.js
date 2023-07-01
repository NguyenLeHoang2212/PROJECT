import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slides.css";
import h11 from "./11.jpg";
import h12 from "./12.jpg";
import h13 from "./13.jpg";
import h14 from "./14.jpg";
import h15 from "./15.jpg";
import h16 from "./16.jpg";
import h17 from "./17.jpg";
import h18 from "./18.jpg";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slides() {
  return (
    <div className="sli">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwipers"
      >
        <SwiperSlide>
          <img src={h11} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h12} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h13} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h14} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h15} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h16} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h17} title="ghế gỗ sang trọng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h18} title="ghế gỗ sang trọng" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
