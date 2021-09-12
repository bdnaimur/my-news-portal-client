import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const SliderShow = ({ postData }) => {
    console.log(postData);
  return (
    <div>
     <img src={postData[0]} alt=""/>
     <br/>
     <img src={postData[1]} alt=""/>
      <br/>
      <img src={postData[2]} alt=""/>
    </div>
  );
};

export default SliderShow;
