import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ProductSort from "../products/ProductSort";
import ProductFilterSidebar from "../products/ProductFilterSidebar";
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../../redux/product/Action";
import ProductCard from "../products/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const Banner = styled("div")({
  backgroundImage:
    "url(https://cdn.sanity.io/images/qa41whrn/prod/7881608ab589c6e1396f773971047a3b423acb75-1440x85.jpg?w=2160&q=80&auto=format)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "18px 0px",
  color: "white",
  marginTop: "90px",
});

const MaxWidth = styled("div")({
  maxWidth: "1600px",
  margin: "0px auto",
  padding: "0px 10px",
});

const CategoryRelat = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const [cateRelateData, setCateRelateData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setCateRelateData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Banner>
        <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
          FLAT 40% OFF ON LATEST STYLES
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "16px", mt: "3px" }}>
          END OF SEASON SALES
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              mx: 1,
              borderBottom: "2px solid",
            }}
          >
            SHOP MEN
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              mx: 1,
              borderBottom: "2px solid",
            }}
          >
            SHOP WOMEN
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              mx: 1,
              borderBottom: "2px solid",
            }}
          >
            SHOP KIDS
          </Typography>
        </Stack>
      </Banner>

      <MaxWidth>
        <Stack textAlign="start" sx={{ py: 2, px: 4 }}>
          <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ my: 2 }}>
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>

          <Typography variant="h4" sx={{ my: 2, fontWeight: "bold" }}>
            PRODUCTS
          </Typography>
        </Stack>

        <Divider />
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2 }}
        >
          <Typography sx={{ px: 4 }}>{cateRelateData.length} PRODUCTS</Typography>
          <Stack
            direction="row"
            spacing={1}
            flexShrink={0}
            sx={{ my: 1, px: 4 }}
          >
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />

            <Button border={"1px solid black"}>4</Button>
            <Button>6</Button>
          </Stack>
        </Stack>
        <Divider />

        <Box px={4} py={4}>
          <Grid container>
            {cateRelateData
              ?.map((product, index) => (
                <Grid key={index} item xs={12} sm={6} md={3} p={1}>
                  <ProductCard product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </MaxWidth>
    </>
  );
};

export default CategoryRelat;
