import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = 'LOGOUT';

export const login = (userName, userPassword) => async (dispatch) => {
    console.log(userName , userPassword)
  try {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      { userName, userPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { user, token } = response.data;
    dispatch({ type: LOGIN_SUCCESS, payload: { user, token } });
    localStorage.setItem('token', token);
  } catch (error) {
    // Handle login failure
    const errorMessage =
      error.response?.data?.message || "An error occurred during login";
    dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
    throw new Error(errorMessage);
  }
};



export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };