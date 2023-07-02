// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  GET_ADMIN_USERS_REQUEST,
  GET_ADMIN_USERS_SUCCESS,
  GET_ADMIN_USERS_FAIL,
  UPDATE_ADMIN_USER_REQUEST,
  UPDATE_ADMIN_USER_SUCCESS,
  UPDATE_ADMIN_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_ADMIN_USER_REQUEST,
  GET_ADMIN_USER_SUCCESS,
  GET_ADMIN_USER_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../../helpers/Constants";

// PARTIALS -
import { GET_ADMIN_USERS, USER_ACTION } from "../../../helpers/Paths";

// GET USERS -
export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_USERS_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_ADMIN_USERS, config);

    dispatch({ type: GET_ADMIN_USERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ADMIN_USERS_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

export const getAdminUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_USER_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${USER_ACTION}/${id}`;
    const { data } = await axios.get(link, config);

    dispatch({ type: GET_ADMIN_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ADMIN_USER_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// UPDATE USER -
export const updateAdminUsers = (form, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ADMIN_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const link = `${USER_ACTION}/${id}`;
    const { data } = await axios.put(link, form, config);

    dispatch({ type: UPDATE_ADMIN_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: UPDATE_ADMIN_USER_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// DELETE USER -
export const deleteAdminUsers = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${USER_ACTION}/${id}`;
    const { data } = await axios.delete(link, config);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAIL,
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
