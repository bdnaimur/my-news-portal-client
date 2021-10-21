import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import MarqueTitle from "./MarqueTitle";
const SliderShow = ({ postData }) => {
    console.log(postData);
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section >
            <div className="pb-4 text-center">
                <Swiper spaceBetween={30} centeredSlides={false} autoplay={{
                    "delay": 4500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    {postData.map(singleSlide => <SwiperSlide>
                        <a href="#" className="w-100 block h-100">
                            <img style={{ "width": "100%", "height": "500px" }} alt="covid 19 w-100" src={singleSlide.imgUrl} className="w-full object-cover" />
                        </a>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    );
};

export default SliderShow;
