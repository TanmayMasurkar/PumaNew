import axios from "axios";

export const GET_CATEGORY= "GET_CATEGORY";

const api = "http://localhost:5000/category";

export const allCategory = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/all`);
    dispatch({
      type:GET_CATEGORY,
      payload: res.data,
    });
  };
};