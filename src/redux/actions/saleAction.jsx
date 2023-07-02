// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  CREATE_SALES_REQUEST,
  CREATE_SALES_SUCCESS,
  CREATE_SALES_FAIL,
  GET_SALES_REQUEST,
  GET_SALES_SUCCESS,
  GET_SALES_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../helpers/Constants";

// PARTIALS -
import { CREATE_SALES, GET_SALES } from "../../helpers/Paths";

// CREATE SLAES -
export const createSales = (details) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_SALES_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(CREATE_SALES, details, config);

    dispatch({ type: CREATE_SALES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CREATE_SALES_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// GET SALES -
export const getSales = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SALES_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_SALES, config);

    dispatch({ type: GET_SALES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_SALES_FAIL,
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
