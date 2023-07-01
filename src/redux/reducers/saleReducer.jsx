// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  message: null,
  sales: null,
};

// CREATE SALES -
export const salesReducer = createReducer(initialState, {
  CREATE_SALES_REQUEST: (state) => {
    state.loading = true;
  },

  CREATE_SALES_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  CREATE_SALES_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GET_SALES_REQUEST: (state) => {
    state.loading = true;
  },

  GET_SALES_SUCCESS: (state, action) => {
    state.loading = false;
    state.sales = action.payload.sales;
  },

  GET_SALES_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },

  CLEAR_MESSAGES: (state) => {
    state.message = null;
  },
});
