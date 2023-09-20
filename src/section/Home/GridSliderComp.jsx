import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Item = styled(Paper)(({ theme, value }) => ({
  padding: "80px 0px", // 80px 0px
  backgroundColor: "#000",
}));

const ShopButton = styled("button")(({ theme }) => ({
  width: "max-content",
  borderRadius: "20px",
  padding: "8px 35px",
  background: "#000",
  color: "#fff",
  border: "1px solid white",
  fontSize: "20px",
}));

const OverlayBg = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 3,
  backgroundColor: "black",
  // border: "1px solid white",
}));

const animateElement = (selector, transformOrigin, scaleXStart, scaleXEnd) => {
  gsap.fromTo(
    selector,
    {
      opacity: 1,
      scaleX: scaleXEnd,
    },
    {
      transformOrigin,
      scaleX: scaleXStart,
      opacity: 0.9,
      duration: 2,
      //   delay:0.2,
      ease: "Power1.easeOut",
      scrollTrigger: {
        trigger: selector,
        start: "top 70%",
        end: "bottom 50%",
      },
    }
  );
};

const GridSliderComp = () => {
  const bgStaticRef = useRef(null);
  const bgStaticRef2 = useRef(null);
  const bgStaticRef3 = useRef(null);

  const circleRef = useRef(null);
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const windowTop = window.scrollY || window.pageYOffset;
      const elementTop = bgStaticRef.current.offsetTop;
      const elementTop2 = bgStaticRef2.current.offsetTop;
      const elementTop3 = bgStaticRef3.current.offsetTop;

      const leftPosition = (windowTop - elementTop) / 8;
      const rightPosition = (windowTop - elementTop2) / 8;
      const leftPosition1 = (windowTop - elementTop3) / 8;

      bgStaticRef.current.querySelector(".bg-move").style.left = `${
        leftPosition - 150
      }px`;
      bgStaticRef2.current.querySelector(".bg-move").style.right = `${
        rightPosition - 200
      }px`;
      bgStaticRef3.current.querySelector(".bg-move").style.left = `${
        leftPosition1 - 260
      }px`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    animateElement("#thirdCircle", "0% 100%", 0, 1);
    animateElement("#thirdCircle1", "100% 100%", 0, 1);
    animateElement("#thirdCircle2", "0% 100%", 0, 1);
  }, []);

  return (
    <Grid
      container
      className="gridCont"
      style={{ backgroundColor: "#000"}}
    >
      <Grid
        item
        xs={12}
        md={6}
        className="girdItem"
        style={{ position: "relative" }}
      >
        <Item value={1} className="item bg-static" ref={bgStaticRef}>
          <div className="bg-move">
            <img
              src="https://www.locus-x.com/wp-content/uploads/2106shinhanlife02.webp"
              alt="Img 1"
              style={{
                maxWidth: "100%",
              }}
            />
          </div>
        </Item>
        <OverlayBg ref={circleRef} id="thirdCircle"></OverlayBg>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item
          value={2}
          className="item"
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <Stack style={{ width: "80%" }}>
            <Typography variant="h4" my={3}>
              Mischief & Hip, Virtual Family
            </Typography>
            <Typography variant="h1">HOGONHEIL</Typography>
            <Typography variant="subtitle2" my={3}>
              안녕하세요. 류이드에요. 👋 제 이름은 끝없이 새로운 아이디𝕀𝔻를
              만들어간다는 뜻이고, 그래서 항상 인간👫을 공부합니다. 인간의 모든
              영역💖🎶🌈☔️🍕🍷⚽️✈️🎡📷을 다 업데이트✏️하는 그날까지 여러분도
              많이 응원👏해주세요.
            </Typography>
            <ShopButton>Shop Now</ShopButton>
          </Stack>
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item
          value={2}
          className="item"
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <Stack style={{ width: "80%" }}>
            <Typography variant="h4" my={3}>
              Mischief & Hip, Virtual Family
            </Typography>
            <Typography variant="h1">HOGONHEIL</Typography>
            <Typography variant="subtitle2" my={3}>
              안녕하세요. 류이드에요. 👋 제 이름은 끝없이 새로운 아이디𝕀𝔻를
              만들어간다는 뜻이고, 그래서 항상 인간👫을 공부합니다. 인간의 모든
              영역💖🎶🌈☔️🍕🍷⚽️✈️🎡📷을 다 업데이트✏️하는 그날까지 여러분도
              많이 응원👏해주세요.
            </Typography>
            <ShopButton>Shop Now</ShopButton>
          </Stack>
        </Item>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="girdItem"
        style={{ position: "relative" }}
      >
        <Item value={1} className="item bg-static" ref={bgStaticRef2}>
          <div className="bg-move">
            <img
              src="https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp"
              alt="Img 2"
            />
          </div>
        </Item>
        <OverlayBg ref={circleRef1} id="thirdCircle1"></OverlayBg>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="girdItem"
        style={{ position: "relative" }}
      >
        <Item value={1} className="item bg-static" ref={bgStaticRef3}>
          <div className="bg-move">
            <img
              src="https://www.locus-x.com/wp-content/uploads/home_vi_ryuid.webp"
              alt="Img 3"
            />
          </div>
        </Item>
        <OverlayBg ref={circleRef2} id="thirdCircle2"></OverlayBg>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item
          value={2}
          className="item"
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <Stack style={{ width: "80%" }}>
            <Typography variant="h4" my={3}>
              Mischief & Hip, Virtual Family
            </Typography>
            <Typography variant="h1">HOGONHEIL</Typography>
            <Typography variant="subtitle2" my={3}>
              안녕하세요. 류이드에요. 👋 제 이름은 끝없이 새로운 아이디𝕀𝔻를
              만들어간다는 뜻이고, 그래서 항상 인간👫을 공부합니다. 인간의 모든
              영역💖🎶🌈☔️🍕🍷⚽️✈️🎡📷을 다 업데이트✏️하는 그날까지 여러분도
              많이 응원👏해주세요.
            </Typography>
            <ShopButton>Shop Now</ShopButton>
          </Stack>
        </Item>
      </Grid>
    </Grid>
  );
};

export default GridSliderComp;
