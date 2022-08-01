import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  NEW_PRODUCTS,
  NEW_PRODUCTS_FAIL,
  NEW_PRODUCTS_SUCCESS,
} from "../actionTypes";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const { data } = await axios.get("/product/get_products");
    console.log(data);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const newProducts = () => async (dispatch) => {
  dispatch({
    type: NEW_PRODUCTS,
  });
  try {
    const { data } = await axios.get("/product/newProducts");
    console.log(data);
    dispatch({
      type: NEW_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};
