import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import img from "../../../../public/assets/footerimges/sliderimges/01.png";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="silder_mainn">
      <Slider {...settings}>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
        <div className="main_logo_wraper">
          <Image src={img} alt="Picture of the author" fill />
        </div>
      </Slider>
    </div>
  );
}
