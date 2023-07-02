// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  GET_FORMULA_PRODUCTS_REQUEST,
  GET_FORMULA_PRODUCTS_SUCCESS,
  GET_FORMULA_PRODUCTS_FAIL,
  CREATE_FORMULA_REQUEST,
  CREATE_FORMULA_SUCCESS,
  CREATE_FORMULA_FAIL,
  GET_ALL_USER_FORMULA_REQUEST,
  GET_ALL_USER_FORMULA_SUCCESS,
  GET_ALL_USER_FORMULA_FAIL,
  CREATE_BATCH_REQUEST,
  CREATE_BATCH_SUCCESS,
  CREATE_BATCH_FAIL,
  GET_ALL_BATCHES_REQUEST,
  GET_ALL_BATCHES_SUCCESS,
  GET_ALL_BATCHES_FAIL,
  USE_BATCH_REQUEST,
  USE_BATCH_SUCCESS,
  USE_BATCH_FAIL,
  CLEAR_SUCCESS,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
} from "../../helpers/Constants";

// PARTIALS -
import {
  GET_FORMULA_PRODUCTS,
  CREATE_FORMULA,
  GET_ALL_USER_FORMULA,
  CREATE_BATCH,
  GET_ALL_BATCHES,
  USE_BATCH,
} from "../../helpers/Paths";

// GET FORMULA PRODUCTS -
export const getFormulaProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_FORMULA_PRODUCTS_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_FORMULA_PRODUCTS, config);

    dispatch({ type: GET_FORMULA_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_FORMULA_PRODUCTS_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// CREATE FORMULA -
export const createFormula = (name, formulaDetails) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_FORMULA_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      CREATE_FORMULA,
      {
        name,
        formulaDetails,
      },
      config
    );

    dispatch({ type: CREATE_FORMULA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CREATE_FORMULA_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// GET ALL USER FORMULA -
export const getUserFormula = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_FORMULA_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_ALL_USER_FORMULA, config);

    dispatch({ type: GET_ALL_USER_FORMULA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ALL_USER_FORMULA_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// CREATE BATCH -
export const createBatch = (id, name, batchNumber) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_BATCH_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      CREATE_BATCH,
      { id, name, batchNumber },
      config
    );

    dispatch({ type: CREATE_BATCH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CREATE_BATCH_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// GET BATCHES -
export const getBatch = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_BATCHES_REQUEST,
    });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(GET_ALL_BATCHES, config);

    dispatch({ type: GET_ALL_BATCHES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ALL_BATCHES_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// USE BATCH -
export const useBatch = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USE_BATCH_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(USE_BATCH, { id }, config);

    dispatch({ type: USE_BATCH_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: USE_BATCH_FAIL,
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

// CLEAR SUCCESS -
export const clearSuccess = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SUCCESS,
  });
};
