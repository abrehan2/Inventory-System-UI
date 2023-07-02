// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  GET_ADMIN_EXPENSE_REQUEST,
  GET_ADMIN_EXPENSE_SUCCESS,
  GET_ADMIN_EXPENSE_FAIL,
  DELETE_ADMIN_EXPENSE_REQUEST,
  DELETE_ADMIN_EXPENSE_SUCCESS,
  DELETE_ADMIN_EXPENSE_FAIL,
  UPDATE_ADMIN_EXPENSE_REQUEST,
  UPDATE_ADMIN_EXPENSE_SUCCESS,
  UPDATE_ADMIN_EXPENSE_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../../helpers/Constants";

// PARTIALS -
import { GET_ADMIN_EXPENSE, ADMIN_EXPENSE } from "../../../helpers/Paths";

// GET ADMIN EXPENSE -
export const getAdminExpense = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADMIN_EXPENSE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_ADMIN_EXPENSE, config);

    dispatch({ type: GET_ADMIN_EXPENSE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ADMIN_EXPENSE_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// UPDATE ADMIN EXPENSE -
export const updateAdminExpense =
  (id, name, date, description, amount) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_ADMIN_EXPENSE_REQUEST,
      });

      const config = {
        withCredentials: true,
      };

      const link = `${ADMIN_EXPENSE}/${id}`;

      const { data } = await axios.put(link, {
        name, date, description, amount
      }, config);

      dispatch({ type: UPDATE_ADMIN_EXPENSE_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: UPDATE_ADMIN_EXPENSE_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };

// DELETE ADMIN EXPENSE -
export const deleteAdminExpense = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ADMIN_EXPENSE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const link = `${ADMIN_EXPENSE}/${id}`;

    const { data } = await axios.delete(link, config);

    dispatch({ type: DELETE_ADMIN_EXPENSE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: DELETE_ADMIN_EXPENSE_FAIL,
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
