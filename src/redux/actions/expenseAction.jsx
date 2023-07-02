// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  EXPENSE_REQUEST,
  EXPENSE_SUCCESS,
  EXPENSE_FAIL,
  GET_ALL_EXPENSE_REQUEST,
  GET_ALL_EXPENSE_SUCCESS,
  GET_ALL_EXPENSE_FAIL,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../helpers/Constants";

// PARTIALS -
import { CREATE_EXPENSE, GET_ALL_EXPENSE } from "../../helpers/Paths";

// CREATE EXPENSE -
export const createExpense = (details) => async (dispatch) => {
  try {
    dispatch({
      type: EXPENSE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(CREATE_EXPENSE, details, config);

    dispatch({ type: EXPENSE_SUCCESS, payload: data.message });
  } catch (err) {
    dispatch({
      type: EXPENSE_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// GET EXPENSE -
export const getExpenses = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_EXPENSE_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_ALL_EXPENSE, config);

    dispatch({ type: GET_ALL_EXPENSE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ALL_EXPENSE_FAIL,
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
