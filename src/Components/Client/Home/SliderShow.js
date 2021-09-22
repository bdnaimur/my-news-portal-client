import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';
const SliderShow = ({ postData }) => {
    console.log(postData);

  SwiperCore.use([Pagination, Autoplay]);
  return (
    <section >
    <div className="pb-4 text-center">
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": false
        }} className="mySwiper">
            <SwiperSlide>
                <a href="#" className="w-full block h-100">
                    <img alt="covid 19" src={postData[0]} className="w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="w-full block h-100">
                    <img alt="covid 19" src={postData[1]} className="w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="w-full block h-100">
                    <img alt="covid 19" src={postData[2]} className="w-full object-cover" />
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
</section>
  );
};

export default SliderShow;
