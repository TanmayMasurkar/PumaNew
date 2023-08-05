import {
  Box,
  Breadcrumbs,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Divider,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../layouts/Banner/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { allProduct } from "../../redux/product/Action";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const img = [
    "https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp",
    "https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp",
    "https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp",
    "https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp",
    "https://www.locus-x.com/wp-content/uploads/home_vi_hogonheil.webp",
  ];

  const { id } = useParams();

  const [productData, setProductData] = useState({
    proName: "",
    proSku: "",
    proDesc: "",
    shortDesc: "",
    proQuantity: "",
    proPrice: "",
    category: "",
    subCategory: "",
    visible: false,
    proStatus: "",
    proImage: [],
    proTag: [],
    discount: "",
    manufacturerName: "",
    manufacturerBrand: "",
  });

  useMemo(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/products/single/${id}`
        );
        console.log(res);
        const productData = res.data.data;
        setProductData(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state?.proStore?.products?.data);

  const [recomData, setRecomData] = useState([]);
  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);

  console.log(productData)
  
  useEffect(() => {
    if (products === undefined) {
      setRecomData([]);
    } else {
      setRecomData([...products]);
    }
  }, [products]);

  const theme = createTheme(); // Create an empty theme object

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const CustomPrevArrow = ({ onClick }) => (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        position: "absolute",
        left: 0,
        zIndex: 10,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <span>&#8249;</span>
    </Box>
  );

  const CustomNextArrow = ({ onClick }) => (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 0,
        zIndex: 10,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <span>&#8250;</span>
    </Box>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          zIndex: 9,
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </Box>
    ),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(productData)

  return (
    <ThemeProvider theme={theme} style={{ overflow: "hidden" }}>
      <>
        <Banner />
        <Box p={4} pb={0}>
          <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ my: 2 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Products
            </Link>
            <Link underline="hover" color="inherit" href="/">
             Data
            </Link>
            <Typography color="text.primary">{productData.proName} </Typography>
          </Breadcrumbs>

          <Grid container spacing={2} my={3}>
            <Grid item xs={12} md={8} className="extraPadding">
              {isMobile ? (
                <Slider {...settings}>
                  {productData.proImage.map((elem, index) => (
                    <div key={index}>
                      <img
                        src={`http://localhost:5000/uploads/${elem}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        alt={`Images ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <Grid container py={2}>
                  {productData.proImage.map((elem, index) => (
                    <Grid item key={index} xs={6} p={1}>
                      <img
                        src={`http://localhost:5000/uploads/${elem}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        alt={`Images ${index + 1}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                // border: "1px solid black",
                textAlign: "start",
              }}
              p={1}
            >
              <Stack>
                <Typography
                  mb={2}
                  sx={{ fontWeight: "bold", fontSize: "32px", lineHeight: 1.2 }}
                >
                  {productData.proName} {/* {productData.categorySchema} */}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#BA2B20" }}
                >
                  ₹{productData.proPrice}
                </Typography>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    color: "black",
                    textDecoration: "line-through",
                    fontWeight: "bold",
                    marginTop: "-2px",
                  }}
                >
                  ₹{/* {priceSale && fCurrency(priceSale)} */}2000
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "text.disabled",
                    fontSize: "13px",
                  }}
                  mb={1}
                >
                  Prices include GST
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Color
                </Typography>
                <span>PUMA White-Royal Sapphire</span>

                <Divider sx={{ borderStyle: "solid" }} />

                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#DC2625",
                  }}
                  align="left"
                  mt={3}
                >
                  Extra 5% off on online payments
                </Typography>

                <Grid container py={2} pb={3}>
                  {img.map((elem, index) => (
                    <Grid
                      item
                      key={index}
                      xs={2}
                      sx={{
                        padding: "4px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // border: "1px solid black",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "60px",
                          border: "1px solid black",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "2px",
                          borderColor: "#E4E7EB",
                          color: "#50565E",
                        }}
                      >
                        S
                      </div>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ borderStyle: "solid" }} />

                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <FormControl fullWidth sx={{bgcolor:"#DFE0E1" , color:"#fff" , borderRadius: "2px" , marginTop:"20px" , border:"none"}}>
                      <Select
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={9}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "16px",
                        borderRadius: "2px",
                        padding: "10px",
                        margin: "20px 0px 0px",
                        width: "100%",
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="outlined"
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "16px",
                        borderRadius: "2px",
                        padding: "10px",
                        border: "1px solid #E4E7EB",
                        margin: "10px 0px",
                        width: "100%",
                      }}
                    >
                      ADD TO WISHLIST
                    </Button>
                  </Grid>
                </Grid>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "text.disabled",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  my={2}
                  mb={3}
                >
                  Free returns on all qualifying orders.
                </Typography>

                <Divider sx={{ borderStyle: "solid" }} />
                {/* <Stack></Stack> */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "light",
                  }}
                  my={2}
                >
                  Please enter PIN code to check delivery time
                </Typography>

                <Divider sx={{ borderStyle: "solid" }} />
                <Typography
                  variant="h6"
                  mt={2}
                  mb={1}
                  sx={{ fontWeight: "bold" }}
                >
                  Description
                </Typography>
                <Typography variant="subtitle2">
                  {productData.shortDesc}
                </Typography>

                <Typography
                  variant="h6"
                  mt={3}
                  mb={1}
                  sx={{ fontWeight: "bold" }}
                >
                  Shipping and Returns
                </Typography>
                <Typography variant="subtitle2">
                  Free standard delivery on all orders and free return for all
                  qualifying orders within 14 days of your order delivery date.
                  Visit our Return Policy for more information.
                </Typography>

                <Typography variant="subtitle2">
                  For any queries, please contact Customer Service at 080-353 or
                  via customer@puma.com .
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{ bgcolor: "#EFEFEF", borderRadius: "1px" }}
          m={4}
          mt={0}
          p={4}
        >
          <div className="proDescDiv" style={{ textAlign: "left"}} dangerouslySetInnerHTML={{ __html: productData.proDesc }} />
        </Box>

        <Box px={4} py={2}>
          <Typography
            variant="h5"
            my={3}
            sx={{ fontWeight: "bold", textAlign: "start" }}
          >
            RECOMMENDED FOR YOU
          </Typography>

          <Grid container>
            {recomData
              .filter((elem) => (elem.category === productData.category) && (productData.proName !== elem.proName))
              .map((product, index) => (
                <Grid key={index} item xs={12} sm={6} md={3} p={1}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default ProductDetails;
