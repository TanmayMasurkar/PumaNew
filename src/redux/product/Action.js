import axios from "axios";

export const GET_PRODUCTS= "GET_PRODUCTS";

const api = "http://localhost:5000/products";

export const allProduct = (queryParams) => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/all`,{ params: queryParams });
    // console.log(res.data);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  };
};