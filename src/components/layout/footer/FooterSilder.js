import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
const  FooterSlider = ()=> {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
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
  const imgPath = [
    {
      id: 1,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/01.png",
      altText: "logo Image",
    },
    {
      id: 2,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/02.png",
      altText: "logo Image",
    },
    {
      id: 3,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/03.png",
      altText: "logo Image",
    },
    {
      id: 4,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/04.png",
      altText: "logo Image",
    },
    {
      id: 5,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/05.png",
      altText: "logo Image",
    },
    {
      id: 6,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/06.png",
      altText: "logo Image",
    },
    {
      id: 7,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/07.png",
      altText: "logo Image",
    },
    {
      id: 8,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/08.png",
      altText: "logo Image",
    },
    {
      id: 9,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/09.png",
      altText: "logo Image",
    },
    {
      id: 10,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/10.png",
      altText: "logo Image",
    },
    {
      id: 11,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/11.png",
      altText: "logo Image",
    },
    {
      id: 12,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/12.png",
      altText: "logo Image",
    },
    {
      id: 13,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/13.png",
      altText: "logo Image",
    },
    {
      id: 14,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/14.png",
      altText: "logo Image",
    },
    {
      id: 15,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/15.png",
      altText: "logo Image",
    },
    {
      id: 16,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/16.png",
      altText: "logo Image",
    },
    {
      id: 17,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/17.png",
      altText: "logo Image",
    },
    {
      id: 18,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/18.png",
      altText: "logo Image",
    },
    {
      id: 19,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/19.png",
      altText: "logo Image",
    },
    {
      id: 20,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/20.png",
      altText: "logo Image",
    },
    {
      id: 21,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/21.png",
      altText: "logo Image",
    },
    {
      id: 22,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/22.png",
      altText: "logo Image",
    },
    {
      id: 23,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/23.png",
      altText: "logo Image",
    },
    {
      id: 24,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/24.png",
      altText: "logo Image",
    },
    {
      id: 25,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/25.png",
      altText: "logo Image",
    },
    {
      id: 26,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/26.png",
      altText: "logo Image",
    },
    {
      id: 27,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/27.png",
      altText: "logo Image",
    },
    {
      id: 28,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/28.png",
      altText: "logo Image",
    },
    {
      id: 29,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/29.png",
      altText: "logo Image",
    },
    {
      id: 30,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/30.png",
      altText: "logo Image",
    },
    {
      id: 31,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/31.png",
      altText: "logo Image",
    },
    {
      id: 32,
      linkPath: "#",
      imgpath: "/assets/footerimges/sliderimges/32.png",
      altText: "logo Image",
    },
  ];
  console.log(imgPath, "imgPathimgPath");
  return (
    <div className="silder_mainn">
      <Slider {...settings}>
        {imgPath.map((imgData) => (
          <div key={imgData.id} className="main_logo_wraper">
            <Link href={imgData.linkPath} className="link">
              <Image priority={true} src={imgData.imgpath} alt={imgData.altText} fill />
            </Link>
          </div>
        ))}

        {/* <div className="main_logo_wraper">
          <Link href="#" className="link">
            <Image
              src="/assets/footerimges/sliderimges/01.png"
              alt="Picture of the author"
              fill
            />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/02.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/03.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/04.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/05.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/06.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/07.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/08.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div>
        <div className="main_logo_wraper">
        <Link href="#" className="link">
          <Image
            src="/assets/footerimges/sliderimges/09.png"
            alt="Picture of the author"
            fill
          />
          </Link>
        </div> */}
      </Slider>
    </div>
  );
}
export default FooterSlider;
