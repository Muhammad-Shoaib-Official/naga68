import React from 'react'
// import Image from "next/image";
// import Link from "next/link";
import Slider from "react-slick";
const DynamicSlider = ({ children }) => {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: false,
        autoplay: false,
        lazyLoad: true,
        arrows: true,
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
                {children}
            </Slider>
        </div>
    );
}

export default DynamicSlider