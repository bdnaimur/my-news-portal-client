import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const SliderShow = ({ postData }) => {
  // console.log(postData);
  // const [slide, setSlide] = useState("");
  // const [index, setIndex] = useState(0);
  // setInterval(() => {
  //   setIndex(index+1);
  //   changeSlide(index)
  // }, 2000);
  // const changeSlide = index =>{
  //   if(index>2){
  //     setIndex(0)
  //   }
  //   setSlide(postData[index].imgUrl)
  // }
   return (
    <>
    <img src={postData[0].imgUrl} alt=""/>
    {/* <Carousel>
      {/* <div>
        <img src={postData[0].imgUrl} />
        <p className="legend">{postData[0].title}</p>
      </div>
      <div>
        <img src={postData[1].imgUrl} />
        <p className="legend">{postData[1].title}</p>
      </div>
      <div>
        <img src={postData[2].imgUrl} />
        <p className="legend">{postData[2].title}</p>
      </div> */}
    {/* </Carousel> */} 
    </>
  );
};

export default SliderShow;
