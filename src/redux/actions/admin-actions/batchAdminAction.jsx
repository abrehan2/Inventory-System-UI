// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  ADMIN_BATCHES_GET_REQUEST,
  ADMIN_BATCHES_GET_SUCCESS,
  ADMIN_BATCHES_GET_FAIL,
  ADMIN_BATCHES_UPDATE_REQUEST,
  ADMIN_BATCHES_UPDATE_SUCCESS,
  ADMIN_BATCHES_UPDATE_FAIL,
  ADMIN_BATCHES_DELETE_REQUEST,
  ADMIN_BATCHES_DELETE_SUCCESS,
  ADMIN_BATCHES_DELETE_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../../helpers/Constants";

// PARTIALS -
import { ADMIN_BATCHES, ADMIN_BATCH_ACTION } from "../../../helpers/Paths";

// GET ADMIN BATCHES -
export const getAdminBatches = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_BATCHES_GET_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(ADMIN_BATCHES, config);

    dispatch({ type: ADMIN_BATCHES_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_BATCHES_GET_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// UPDATE ADMIN BATCH -
export const updateAdminBatches = (id, name) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_BATCHES_UPDATE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${ADMIN_BATCH_ACTION}/${id}`;
    const { data } = await axios.put(link, { name }, config);

    dispatch({ type: ADMIN_BATCHES_UPDATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_BATCHES_UPDATE_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// DELETE ADMIN BATCH -
export const deleteAdminBatches = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_BATCHES_DELETE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${ADMIN_BATCH_ACTION}/${id}`;
    const { data } = await axios.delete(link, config);

    dispatch({ type: ADMIN_BATCHES_DELETE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_BATCHES_DELETE_FAIL,
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
