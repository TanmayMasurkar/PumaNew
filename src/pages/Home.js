import React, { useEffect, useMemo, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack, Typography } from "@mui/material";
import Test from "./Test";
import Footer from "../layouts/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../redux/product/Action";
import ProductCard from "../section/products/ProductCard";
import Trends from "../section/products/Trends";
import GridSliderComp from "../section/Home/GridSliderComp";
import TrendsComp from "../section/Home/TrendsComp";
import Banner from "../section/Home/Banner";

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

const Home = () => {
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

       <Banner/>

      {/* section 2 */}
         {/* <TrendsComp/> */}

      {/* <Trends /> */}

      <GridSliderComp/>
      
      {/* <TrendsComp/> */}


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
