import React, { useEffect, useMemo, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Slider from "react-slick";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Test from "./Test";
import Footer from "../layouts/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../redux/product/Action";
import ProductCard from "../section/products/ProductCard";
import Trends from "../section/products/Trends";

const Item = styled(Paper)(({ theme, value }) => ({
  backgroundColor:
    value % 2 === 0
      ? "#000"
      : theme.palette.mode === "dark"
      ? "#1A2027"
      : "#fff",
  padding: "80px 0px",
}));

const ScreenDiv = styled("div")(({ theme, value }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
}));

const ScreenText = styled("h1")(({ theme, value }) => ({
  color: "white",
  fontSize: "6rem",
  fontWeight: "lighter",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
  // width:"90%",
  // margin:"0px auto"
}));

const ShopButton = styled("button")(({ theme }) => ({
  width: "max-Content",
  borderRadius: "20px",
  padding: "8px 35px",
  background: "#000",
  color: "#fff",
  border: "1px solid white",
  fontSize: "20px",
}));

const Home = () => {
  const [leftPosition, setLeftPosition] = useState(0);
  const [rightPosition, setRightPosition] = useState(0);
  const [leftPosition1, setLeftPosition1] = useState(0);
  const bgStaticRef = useRef(null);
  const bgStaticRef2 = useRef(null);
  const bgStaticRef3 = useRef(null);

  useEffect(() => {
    // function handleScroll() {
    //   const windowTop = window.scrollY || window.pageYOffset;
    //   const elementTop = bgStaticRef.current.offsetTop;
    //   const elementTop2 = bgStaticRef2.current.offsetTop;
    //   const elementTop3 = bgStaticRef3.current.offsetTop;

    //   setLeftPosition((windowTop - elementTop) / 8);
    //   setRightPosition((windowTop - elementTop2) / 8);
    //   setLeftPosition1((windowTop - elementTop3) / 8);
    // }

    function handleScroll() {
      const windowTop = window.scrollY || window.pageYOffset;
      const elementTop = bgStaticRef.current.offsetTop;
      const elementTop2 = bgStaticRef2.current.offsetTop;
      const elementTop3 = bgStaticRef3.current.offsetTop;

      const leftPosition = (windowTop - elementTop) / 8;
      const rightPosition = (windowTop - elementTop2) / 8;
      const leftPosition1 = (windowTop - elementTop3) / 8;

      // Apply the updated left and right positions using classList
      bgStaticRef.current.querySelector(
        ".bg-move"
      ).style.left = `${leftPosition}px`;
      bgStaticRef2.current.querySelector(
        ".bg-move"
      ).style.right = `${rightPosition}px`;
      bgStaticRef3.current.querySelector(
        ".bg-move"
      ).style.left = `${leftPosition1}px`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch = useDispatch();
  const products = useSelector((state) => state?.proStore?.products?.data);

  const [recomData, setRecomData] = useState([]);
  useMemo(() => {
    dispatch(allProduct());
  }, [dispatch]);

  useMemo(() => {
    if (products === undefined) {
      setRecomData([]);
    } else {
      setRecomData([...products]);
    }
  }, [products]);

  return (
    <div>
      <ScreenDiv>
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/732047047/rendition/1080p/file.mp4?loc=external&signature=8f7b0930895a27014374f2888e76f3d664c30b28659c044a3e0580fcb3c874f6"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translate(0%, -50%)",
            textAlign: "center",
          }}
        >
          <ScreenText>
            Enter the metaverse universe beyond virtual reality, LOCUS-X
          </ScreenText>
        </div>
      </ScreenDiv>

      {/* section 2 */}
      <Box p={3} pb={0}>
        <Typography mt={5} variant="h4">
          TRY ON WHAT'S TRENDING
        </Typography>
        <Grid container mt={4}>
          <Grid item xs={12} md={6} p={2}>
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <img
                // src="https://res.cloudinary.com/dotcom-prod/images/c_fill,f_auto,g_faces:center,q_auto,w_1920/v1/wt-cms-assets/2020/07/awauxxw0mrcieekgwnym/indiapumasockthem.jpg"
                src="https://www.horizont.net/news/media/14/Puma---Forever-Faster-Training-Usain-Bolt-139406.jpeg"
                alt="Img 2"
                style={{
                  width: "100%",
                  objectFit: "100% 100%",
                  height: "500px",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Stack p={1}>
                <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                  SNEAKER
                </Typography>
                <Typography variant="subtitle2">KICK UP A NOTCH</Typography>
                <Button
                  style={{
                    width: "max-content",
                    padding: "8px 50px",
                    background: "#000",
                    color: "#fff",
                    fontSize: "18px",
                    margin: "5px auto",
                  }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </div>
          </Grid>

          <Grid item xs={12} md={6} p={2}>
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src="https://www.fitnessmag.co.za/wp-content/uploads/2020/08/Banele-Shabangu-by-David-Tarpey.jpg"
                alt="Img 2"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "500px",
                }}
              />
              <Stack p={1}>
                <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                  SNEAKER
                </Typography>
                <Typography variant="subtitle2">KICK UP A NOTCH</Typography>
                <Button
                  style={{
                    width: "max-content",
                    padding: "8px 50px",
                    background: "#000",
                    color: "#fff",
                    fontSize: "18px",
                    margin: "5px auto",
                  }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Trends />

      <Grid container className="gridCont">
        <Grid item xs={12} md={6} className="girdItem">
          <Item value={1} className="item bg-static" ref={bgStaticRef}>
            <div
              className="bg-move"
              style={{
                left: leftPosition,
              }}
            >
              <img
                src="https://www.locus-x.com/wp-content/uploads/2106shinhanlife02.webp"
                alt="Img 1"
              />
            </div>
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
                만들어간다는 뜻이고, 그래서 항상 인간👫을 공부합니다. 인간의
                모든 영역💖🎶🌈☔️🍕🍷⚽️✈️🎡📷을 다 업데이트✏️하는 그날까지
                여러분도 많이 응원👏해주세요.
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
                만들어간다는 뜻이고, 그래서 항상 인간👫을 공부합니다. 인간의
                모든 영역💖🎶🌈☔️🍕🍷⚽️✈️🎡📷을 다 업데이트✏️하는 그날까지
                여러분도 많이 응원👏해주세요.
              </Typography>
              <ShopButton>Shop Now</ShopButton>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item value={1} className="item bg-static" ref={bgStaticRef2}>
            <div
              className="bg-move"
              style={{
                right: rightPosition,
              }}
            >
              <img
                src="https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp"
                alt="Img 2"
              />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} className="girdItem">
          <Item value={1} className="item bg-static" ref={bgStaticRef3}>
            <div
              className="bg-move"
              style={{
                left: leftPosition1,
              }}
            >
              <img
                src="https://www.locus-x.com/wp-content/uploads/home_vi_ryuid.webp"
                alt="Img 3"
              />
            </div>
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
                만들어간다는 뜻이고, 그래서 항상 인간👫을 공부합니다. 인간의
                모든 영역💖🎶🌈☔️🍕🍷⚽️✈️🎡📷을 다 업데이트✏️하는 그날까지
                여러분도 많이 응원👏해주세요.
              </Typography>
              <ShopButton>Shop Now</ShopButton>
            </Stack>
          </Item>
        </Grid>
      </Grid>

      <Test />

      <Box px={4} py={4}>
        <Typography
          variant="h5"
          my={1}
          sx={{ fontWeight: "bold", textAlign: "start" }}
        >
          RECOMMENDED FOR YOU
        </Typography>
        <Grid container>
          {recomData
            .filter((elem) => elem.categoryschemas.categoryName === "Shoes")
            .map((product, index) => (
              <Grid key={index} item xs={12} sm={6} md={3} p={1}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
