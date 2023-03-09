import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Blurb2 from "./cards/Blurb2";

import Image from 'next/image';
import { LoadingButton } from "@mui/lab";
import { Container, Divider, TextField , Stack, TextareaAutosize,  } from "@mui/material";
import { Box, Typography } from '@mui/material';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          // style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        >
          <Image width='100px' height='100px' src='/img/rightNav.svg' alt='movement'/>
          
          </div>
      );
    
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          // style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
        >
          <Image width='100px' height='100px' src='/img/leftNav.svg' alt='movement'/>
        </div>
      );
  }
const SliderComp = () => {
    // regular slider settings
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    //   slide to view next slider settings
    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 5,
    //     swipeToSlide: true,
    //     afterChange: function(index) {
    //       console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //       );
    //     }}
// custom arrow settings
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />
    //   };

    // swipe to slide settings
    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,

    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     swipeToSlide: true,
    //     afterChange: function(index) {
    //       console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //       );
    //     }
    //   };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <div className="">
        <Slider {...settings} >
        <Blurb2
          title='“Yebox helped us identify our user pain points and also helped us simplify our processes. i really enjoyed working with them. ”' 
          name='Chimeke Nnamdi' 
          // firm='Microsoft Nigeria1'
          />
        <Blurb2
          title='“Yebox is unarguably one of the best teams I’ve ever worked with, offering the best product and services and also the customer experience is amazing.  ”' 
          name='Timothy Ndu' 
          // firm='Microsoft Nigeria2'
          />
        <Blurb2
          title='“I had worked with yebox before and I had the time of my life…. Their team is very swift and experienced”' 
          name='Ngozi Solomon' 
          // firm='Microsoft Nigeria3'
          />
        <Blurb2
          title='“Yebox helped us identify our user pain points and also helped us simplify our processes. i really enjoyed working with them. ”' 
          name='Chimeke Nnamdi' 
          // firm='Microsoft Nigeria1'
          />
        <Blurb2
          title='“Yebox is unarguably one of the best teams I’ve ever worked with, offering the best product and services and also the customer experience is amazing.  ”' 
          name='Timothy Ndu' 
          // firm='Microsoft Nigeria2'
          />
        <Blurb2
          title='“I had worked with yebox before and I had the time of my life…. Their team is very swift and experienced”' 
          name='Ngozi Solomon' 
          // firm='Microsoft Nigeria3'
          />
        </Slider>
      </div>
  )
}

export default SliderComp;