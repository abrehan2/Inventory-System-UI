// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  GET_ADMIN_FORMULA_REQUEST,
  GET_ADMIN_FORMULA_SUCCESS,
  GET_ADMIN_FORMULA_FAIL,
  ADMIN_FORMULA_STATUS_REQUEST,
  ADMIN_FORMULA_STATUS_SUCCESS,
  ADMIN_FORMULA_STATUS_FAIL,
  ADMIN_FORMULA_UPDATE_REQUEST,
  ADMIN_FORMULA_UPDATE_SUCCESS,
  ADMIN_FORMULA_UPDATE_FAIL,
  ADMIN_FORMULA_DELETE_REQUEST,
  ADMIN_FORMULA_DELETE_SUCCESS,
  ADMIN_FORMULA_DELETE_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../../helpers/Constants";

// PARTIALS -
import {
  GET_ADMIN_FORMULA,
  FORMULA_STATUS,
  ADMIN_FORMULA_ACTION,
} from "../../../helpers/Paths";

// GET ADMIN FORMULA -
export const getAdminFormula = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_FORMULA_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_ADMIN_FORMULA, config);

    dispatch({ type: GET_ADMIN_FORMULA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ADMIN_FORMULA_FAIL,
      payload: err.response?.data?.message,
    });
  }
};
// GET ADMIN FORMULA -
export const updateAdminFormulaStatus = (id, status) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_FORMULA_STATUS_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${FORMULA_STATUS}/${id}`;

    const { data } = await axios.put(link, { status }, config);

    dispatch({ type: ADMIN_FORMULA_STATUS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_FORMULA_STATUS_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// UPDATE ADMIN FORMULA -
export const updateAdminFormula = (id, name) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_FORMULA_UPDATE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${ADMIN_FORMULA_ACTION}/${id}`;

    const { data } = await axios.put(link, { name }, config);

    dispatch({ type: ADMIN_FORMULA_UPDATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_FORMULA_UPDATE_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// DELETE ADMIN FORMULA -
export const deleteAdminFormula = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_FORMULA_DELETE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${ADMIN_FORMULA_ACTION}/${id}`;

    const { data } = await axios.delete(link, config);

    dispatch({ type: ADMIN_FORMULA_DELETE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_FORMULA_DELETE_FAIL,
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
