import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { imgPath } from "./SliderImagesmock";

const SimpleSlider = () => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    arrows: false,
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
        {imgPath.map((data) => (
          <Link key={data.id} href={data.linkPath} className="_link">
            <Image className="apply_grayScal" src={data.imgpath} alt={data.altText} fill />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
export default SimpleSlider 
