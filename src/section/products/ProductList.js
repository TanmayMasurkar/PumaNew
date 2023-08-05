import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import {  Grid, Stack, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { allProduct } from '../../redux/product/Action'

const ProductList = () => {
//    const products = [{
//     name: "Product 1",
//     price: 1000,
//     cover:"https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg", 
//     colors:"red",
//     status:"sale", 
//     priceSale:2000,
//    },
//    {
//     name: "Product 1",
//     price: 1000,
//     cover:"https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg", 
//     colors:"red",
//     status:"sale", 
//     priceSale:2000,
//    },
//    {
//     name: "Product 1",
//     price: 1000,
//     cover:"https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg", 
//     colors:"red",
//     status:"Active", 
//     priceSale:2000,
//    },
//    {
//     name: "Product 1",
//     price: 1000,
//     cover:"https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg", 
//     colors:"red",
//     status:"Active", 
//     priceSale:2000,
//    },
//    {
//     name: "Product 1",
//     price: 1000,
//     cover:"https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg", 
//     colors:"red",
//     status:"Active", 
//     priceSale:2000,
//    }
// ] 

const dispatch = useDispatch();
const products = useSelector((state) => state?.proStore?.products?.data);
console.log(products)
const [productData, setProductData] = useState([]);
useEffect(() => {
  dispatch(allProduct());
}, [dispatch]);

useEffect(() => {
  if (products === undefined) {
    setProductData([]);
  } else {
    setProductData([...products]);
  }
}, [products]);
   
  return (
    <Grid container my={5} px={2}>
    {productData.map((product,index) => (
      <Grid key={index} item xs={12} sm={6} md={3} p={1}>
        <ProductCard product={product}/>
      </Grid>
    ))}
  </Grid>
  )
}

export default ProductList