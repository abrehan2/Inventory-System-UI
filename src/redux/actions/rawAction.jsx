// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../../helpers/Constants";

// PARTIALS -
import { GET_RAW_MATERIALS, GET_RAW_DETAILS } from "../../helpers/Paths";

// GET ALL RAW MATERIALS -
export const getProducts =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });

      const config = {
        withCredentials: true,
      };

      let link = `${GET_RAW_MATERIALS}?keyword=${keyword}&page=${currentPage}`;
      const { data } = await axios.get(link, config);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// GET RAW MATERIAL DETAILS -
export const getRawDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`${GET_RAW_DETAILS}/${id}`, config);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// CLEAR ERRORS -
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
