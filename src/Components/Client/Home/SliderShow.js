import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Autoplay, Pagination
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
const SliderShow = ({ postData }) => {
    console.log(postData);
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <section >
            <div className="pb-4 text-center">
                <Swiper spaceBetween={30} centeredSlides={false} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                        <a href="#" className="w-full block h-100">
                            <img alt="covid 19" src={postData[0].imgUrl}  className="w-full object-cover" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="w-full block h-100">
                            <img alt="covid 19" src={postData[1].imgUrl}  className="w-full object-cover" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="w-full block h-100">
                            <img alt="covid 19" src={postData[2].imgUrl} className="w-full object-cover" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
  );
};

export default SliderShow;
