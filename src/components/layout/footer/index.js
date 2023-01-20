import { Divider, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../../../public/assets/footerimges/f1.png";
import img2 from "../../../../public/assets/footerimges/f2.png";
import teligram from "../../../../public/assets/footerimges/socialicon/teligram.svg";
import FooterSlider from "./footerSilder";
const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  //   handle mobile clik for toggle footers link
  const handleMobilClick = () => {
    alert("heloo");
  };
  const gammingLinks = [
    {
      id: 1,
      name: "All games",
      linkPath: "/all-games",
      target: "",
    },
    {
      id: 2,
      name: "Dice",
      linkPath: "#",
      target: "",
    },
    {
      id: 3,
      name: "Slots",
      linkPath: "#",
      target: "",
    },
    {
      id: 4,
      name: "Rank system",
      linkPath: "#",
      target: "_blank",
    },
  ];
  const FeatueLinks = [
    {
      id: 1,
      name: " Staking",
      linkPath: "#",
      target: "",
    },
    {
      id: 2,
      name: " BetFury Box",
      linkPath: "#",
      target: "",
    },
    {
      id: 3,
      name: "Cashback",
      linkPath: "#",
      target: "",
    },
    {
      id: 4,
      name: "  Daily tasks",
      linkPath: "#",
      target: "_blank",
    },
  ];
  const promoLinks = [
    {
      id: 1,
      name: "Promotions",
      linkPath: "#",
      target: "",
    },
  ];
  const aboutusLinks = [
    {
      id: 1,
      name: "News",
      linkPath: "#",
      target: "",
    },
    {
      id: 2,
      name: " About BFG",
      linkPath: "#",
      target: "",
    },
    {
      id: 3,
      name: " About BetFury team",
      linkPath: "#",
      target: "",
    },
    {
      id: 4,
      name: " BetFury Whitepaper",
      linkPath: "#",
      target: "_blank",
    },
    {
      id: 5,
      name: "  BetFury Docs",
      linkPath: "#",
      target: "_blank",
    },
    {
      id: 6,
      name: "Official Mirrors",
      linkPath: "#",
      target: "_blank",
    },
  ];
  const helpLinks = [
    {
      id: 1,
      name: "Fairness",
      linkPath: "#",
      target: "",
    },
    {
      id: 2,
      name: " Privacy Policy",
      linkPath: "#",
      target: "",
    },
    {
      id: 3,
      name: "  Terms of Service",
      linkPath: "#",
      target: "",
    },
    {
      id: 4,
      name: "Sportsbetting T&C",
      linkPath: "#",
      target: "_blank",
    },
    {
      id: 5,
      name: " Bug Bounty Program",
      linkPath: "#",
      target: "_blank",
    },
    {
      id: 6,
      name: "  Live Support",
      linkPath: "#",
      target: "_blank",
    },
    {
      id: 7,
      name: " Responsible Gambling",
      linkPath: "#",
      target: "_blank",
    },
  ];
  const socialIcon = [
    {
      id: 1,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/teligram.svg",
      alttext: "icon Img",
    },
    {
      id: 2,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/twitter.svg",
      alttext: "icon Img",
    },
    {
      id: 3,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/instagram.svg",
      alttext: "icon Img",
    },
    {
      id: 4,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/youtube.svg",
      alttext: "icon Img",
    },
    {
      id: 5,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/setmeet.svg",
      alttext: "icon Img",
    },
    {
      id: 6,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/bitcointalk.svg",
      alttext: "icon Img",
    },
    {
      id: 7,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/tikto.svg",
      alttext: "icon Img",
    },
    {
      id: 8,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/pentirest.svg",
      alttext: "icon Img",
    },
    {
      id: 9,
      linkPath: "#",
      imgPath: "/assets/footerimges/socialicon/discord.svg",
      alttext: "icon Img",
    },
    {
      id: 10,
      linkPath: "#",
      imgPath: '/assets/footerimges/socialicon/reddit.svg',
      alttext: "icon Img",
    },
  ];
  return (
    <footer className="footer_main">
      {/* <h2>Width: {windowWidth}</h2> */}
      <div className="footer_container">
        <Grid container spacing={2} style={{ marginBottom: "40px" }}>
          <Grid item xs={12} sm={2} md={1.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <div className="main_top_heading">I-gaming</div>
                {windowWidth <= "599" && (
                  <div onClick={handleMobilClick}>click</div>
                )}
              </div>
              {windowWidth >= "600" && (
                <ul>
                  {gammingLinks.map((linkData) => (
                    <li key={linkData.id}>
                      <Link
                        href={linkData.linkPath}
                        className="footer_link fw-600"
                      >
                        {linkData.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={1.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>Features</p>
                {windowWidth <= "599" && (
                  <p onClick={handleMobilClick}>click</p>
                )}
              </div>
              {windowWidth >= "600" && (
                <ul>
                  {FeatueLinks.map((linkData) => (
                    <li key={linkData.id}>
                      <Link
                        href={linkData.linkPath}
                        className="footer_link fw-600"
                      >
                        {linkData.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={1.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>Promo</p>
                {windowWidth <= "599" && (
                  <p onClick={handleMobilClick}>click</p>
                )}
              </div>
              {windowWidth >= "600" && (
                <ul>
                  {promoLinks.map((linkData) => (
                    <li key={linkData.id}>
                      <Link
                        href={linkData.linkPath}
                        className="footer_link fw-600"
                      >
                        {linkData.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>About us</p>
                {windowWidth <= "599" && (
                  <p onClick={handleMobilClick}>click</p>
                )}
              </div>

              {windowWidth >= "600" && (
                <ul>
                  {aboutusLinks.map((linkData) => (
                    <li key={linkData.id}>
                      <Link
                        href={linkData.linkPath}
                        className="footer_link fw-600"
                      >
                        {linkData.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>Help</p>
                {windowWidth <= "599" && (
                  <p onClick={handleMobilClick}>click</p>
                )}
              </div>
              {windowWidth >= "600" && (
                <ul>
                  {helpLinks.map((linkData) => (
                    <li key={linkData.id}>
                      <Link
                        href={linkData.linkPath}
                        className="footer_link fw-600"
                      >
                        {linkData.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_logo_wrapper flex-between">
                <i className="fw-600 flex-center">18+</i>
                <div className="imag_wraper1">
                  <Link href="#">
                    <Image src={img} alt="Picture of the author" fill />
                  </Link>
                </div>
                <div className="imag_wraper">
                  <Link href="#" className="">
                    <Image src={img2} alt="Picture of the author" fill />
                  </Link>
                </div>
              </div>
              <div className="footer_logo_text_wrapper">
                <p className="fw-500">
                  This website offers gaming with risk experience. To be a user
                  of our site you must be over 18 y.o. We are not responsible
                  for the violation of your local laws related to i-gaming. Play
                  responsibly and have fun on BetFury.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Divider className="divider" />
        <FooterSlider />
        <Divider className="divider" />
        <div className="social_media_wraper">
          <div className="social_icon_wrapper_inner">
            {socialIcon.map((icon) => (
              <Link key={icon.id} href={icon.linkPath} className="_icon_styled_div flex-center">
                <Image src={icon.imgPath} alt={icon.alttext} width={22} height={22} />
              </Link>
            ))}
          </div>
        </div>
        <Divider className="divider" />
        <div className="copy_write_main">
          <p className="Copywrite_text">Copyright © 2023 NAGA. All rights reserved.</p>
          

        </div>
      </div>
    </footer>
  );
};
export default Footer;
