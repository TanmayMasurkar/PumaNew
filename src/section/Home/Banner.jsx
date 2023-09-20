import React from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerStyle = {
    height: "100vh",
    backgroundColor: "#E1ECED",
    position: "relative",
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage:
      "url(https://www.locus-x.com/wp-content/uploads/home_ryuid.webp)",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };


  const textContStyle = {
    position:"absolute",
    top:'50%',
    left:'20%',
    transform: "translate(-50%,-50%)",
    width:"30%",
    textAlign:"start",
    // border:"1px solid black"
  }

  const animateTextOnScroll = () => {
    const textContainer = document.querySelector("#textContainer");
    gsap.to(textContainer, {
      y: window.scrollY * -0.3,
      ease: "Power1.easeOut",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", animateTextOnScroll);
    return () => {
      window.removeEventListener("scroll", animateTextOnScroll);
    };
  }, []);
  
  return (
    <Box style={bannerStyle}>
      <div style={imageStyle}></div>
      <div style={textContStyle}  id="textContainer">
        <h1 style={{fontSize:"50px", fontWeight:"lighter",fontFamily:"sans-serif"}}>Virtual humans beyond human communication, LOCUS-X</h1>
        <p style={{fontSize:"22px", fontWeight:"bold"}}>인간의 소통을 초월한 버추얼 휴먼, LOCUS-X</p>
      </div>
    </Box>
  );
};

export default Banner;
