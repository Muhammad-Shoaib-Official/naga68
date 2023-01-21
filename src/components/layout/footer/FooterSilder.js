import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import {imgPath} from "./SliderImagesmock"
const  FooterSlider = ()=> {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    arrows: false,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
 
  console.log(imgPath, "imgPathimgPath");
  return (
    <div className="silder_mainn">
      <Slider {...settings}>
        {imgPath.map((imgData) => (
            <Link key={imgData.id} href={imgData.linkPath} className="_link">
              <Image className="apply_grayScal"  src={imgData.imgpath} alt={imgData.altText}  fill/>
            </Link>
        ))}

          {/* <Link href="#" className="link">
            <Image
              src="/assets/footerimges/sliderimges/01.png"
              alt="Picture of the author"
              width={200}
              height={100}
        
            />
          </Link>
       
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/02.png"
            alt="Picture of the author"
            width={200}
            height={100}
           
          />
          </Link>
          <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/02.png"
            alt="Picture of the author"
            width={200}
            height={100}
           
          />
          </Link>
          <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/02.png"
            alt="Picture of the author"
            width={200}
            height={100}
           
          />
          </Link>
          <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/02.png"
            alt="Picture of the author"
            width={200}
            height={100}
           
          />
          </Link> */}
      
      </Slider>
    </div>
  );
}
export default FooterSlider;
