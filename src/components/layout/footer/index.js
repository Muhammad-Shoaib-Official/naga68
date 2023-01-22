import { Divider, Grid, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../../../public/assets/footerimges/f1.png";
import img2 from "../../../../public/assets/footerimges/f2.png";
import { gammingLinks, FeatueLinks, promoLinks, aboutusLinks, helpLinks, socialIcon } from "./FooterMockData"

import SimpleSlider from "./FooterSilder";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useMediaQuery from '@mui/material/useMediaQuery';


const Footer = () => {
  const min_600 = useMediaQuery('(min-width:600px)');
  //   handle mobile clik for toggle footers link
  const handleMobilClick = () => {
    alert("heloo");
  };
  return (
    <footer className="footer_main">
      <div className="footer_container">
        <Grid container spacing={2} style={{ marginBottom: "40px" }}>
          <Grid item xs={12} sm={2} md={1.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p className="main_top_heading">I-gaming</p>
                {!min_600 &&
                  <p onClick={handleMobilClick}>click</p>
                }
              </div>
              {min_600 &&
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
              }
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={1.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>Features</p>
                {!min_600 &&
                  <p onClick={handleMobilClick}>click</p>
                }
              </div>
              {min_600 &&
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
              }
            </div>
          </Grid>
          <Grid item xs={12} sm={2} md={1.5}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>Promo</p>
                {!min_600 &&
                  <p onClick={handleMobilClick}>click</p>
                }
              </div>
              {min_600 &&
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
              }
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>About us</p>
                {!min_600 &&
                  <p onClick={handleMobilClick}>click</p>
                }
              </div>

              {min_600 &&
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
              }
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <div className="footer_colum_content_wrapper">
              <div className="footer_linK_label_wraper flex-between ">
                <p>Help</p>
                {!min_600 &&
                  <p onClick={handleMobilClick}>click</p>
                }
              </div>
              {min_600 &&
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
              }
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
        <SimpleSlider />
        <Divider className="divider" />
        <div className="social_media_wraper flex-between ">
          <div className="social_icon_wrapper_inner">
            {socialIcon.map((icon) => (
              <Tooltip PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    borderRadius: "50Px",
                    color: "#55657e",
                    backgroundColor: "#202a39",
                  }
                }
              }} key={icon.id} title={icon.tooltip} placement="top">
                <Link href={icon.linkPath} className="_icon_styled_div flex-center">
                  <Image src={icon.imgPath} alt={icon.alttext} width={22} height={22} />
                </Link>
              </Tooltip>

            ))}
          </div>
          {min_600 && <div className="coin_detail_wrapper">
            <div className="first_one">
              <div className="coin_logo_wraper">
                <Image src="/assets/footerimges/bfg.svg" alt="logo" className="img" width={20} height={20} />
                <span className="fw-600" >BFG</span>
              </div>
              <ArrowRightAltIcon sx={{ color: "#fff", fontSize: "16px", margin: "0 5px" }} />
              <div className="coin_logo_wraper">
                <Image src="/assets/footerimges/dog.svg" alt="logo" className="img" width={20} height={20} />
                <span className="fw-600" >Metamask</span>
              </div>
            </div>
            <div className="first_one">
              <div className="coin_logo_wraper">
                <Image src="assets/footerimges/btccoin.svg" alt="logo" className="img" width={20} height={20} />
                <span className="fw-600" >1 BTC = <span>$22724.3200</span></span>
              </div>
            </div>
          </div>}
        </div>
        <Divider className="divider" />
        <div className="copy_write_main flex-between">
          <p className="Copywrite_text">Copyright © 2023 NAGA. All rights reserved.</p>
          <div className="first_one">
            <div className="coin_logo_wraper">
              <Image src="assets/footerimges/btccoin.svg" alt="logo" className="img" width={20} height={20} />
              <span className="fw-600" >1 BTC = <span>$22724.3200</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
