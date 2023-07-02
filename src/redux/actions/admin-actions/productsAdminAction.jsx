// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  GET_ADMIN_PRODUCTS_REQUEST,
  GET_ADMIN_PRODUCTS_SUCCESS,
  GET_ADMIN_PRODUCTS_FAIL,
  CREATE_ADMIN_PRODUCTS_REQUEST,
  CREATE_ADMIN_PRODUCTS_SUCCESS,
  CREATE_ADMIN_PRODUCTS_FAIL,
  DELETE_ADMIN_PRODUCTS_REQUEST,
  DELETE_ADMIN_PRODUCTS_SUCCESS,
  DELETE_ADMIN_PRODUCTS_FAIL,
  UPDATE_ADMIN_PRODUCT_REQUEST,
  UPDATE_ADMIN_PRODUCT_SUCCESS,
  UPDATE_ADMIN_PRODUCT_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS
} from "../../../helpers/Constants";

// PARTIALS -
import {
  ADMIN_PRODUCTS,
  ADMIN_ACTION,
  CREATE_PRODUCT,
} from "../../../helpers/Paths";

// GET ADMIN PRODUCTS -
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_PRODUCTS_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(ADMIN_PRODUCTS, config);

    dispatch({ type: GET_ADMIN_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ADMIN_PRODUCTS_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// CREATE ADMIN PRODUCTS -
export const createAdminProducts =
  (name, description, stock, price, image) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_ADMIN_PRODUCTS_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      };
      const { data } = await axios.post(
        CREATE_PRODUCT,
        { name, description, stock, price, image },
        config
      );

      dispatch({ type: CREATE_ADMIN_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: CREATE_ADMIN_PRODUCTS_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };

// UPDATE ADMIN PRODUCTS -
export const updateAdminProduct =
  (id, name, description, price, stock, image, active) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_ADMIN_PRODUCT_REQUEST,
      });

      const config = {
        withCredentials: true,
      };

      const link = `${ADMIN_ACTION}/${id}`;

      const { data } = await axios.put(
        link,
        { name, description, price, stock, image, active },
        config
      );

      dispatch({ type: UPDATE_ADMIN_PRODUCT_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: UPDATE_ADMIN_PRODUCT_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };

// DELETE ADMIN PRODUCTS -
export const deleteAdminProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ADMIN_PRODUCTS_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${ADMIN_ACTION}/${id}`;

    const { data } = await axios.delete(link, config);

    dispatch({ type: DELETE_ADMIN_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: DELETE_ADMIN_PRODUCTS_FAIL,
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
