// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  GET_ADMIN_SALES_REQUEST,
  GET_ADMIN_SALES_SUCCESS,
  GET_ADMIN_SALES_FAIL,
  DELETE_ADMIN_SALE_REQUEST,
  DELETE_ADMIN_SALE_SUCCESS,
  DELETE_ADMIN_SALE_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../../helpers/Constants";

// PARTIALS -
import { ADMIN_SALES, DELETE_ADMIN_SALE } from "../../../helpers/Paths";

// GET ADMIN SALES -
export const getAdminSales = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_SALES_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(ADMIN_SALES, config);

    dispatch({ type: GET_ADMIN_SALES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ADMIN_SALES_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// DELETE ADMIN SALES -
export const deleteAdminSales = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ADMIN_SALE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${DELETE_ADMIN_SALE}/${id}`;
    const { data } = await axios.delete(link, config);

    dispatch({ type: DELETE_ADMIN_SALE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: DELETE_ADMIN_SALE_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// CLEAR ERRORS -
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

// CLEAR MESSAGES -
export const clearMessages = () => async (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGES,
  });
};
