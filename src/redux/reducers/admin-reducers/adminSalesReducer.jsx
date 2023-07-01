// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  sales: null,
  message: null,
};

// ADMIN SALES -
export const adminSalesReducer = createReducer(initialState, {
  GET_ADMIN_SALES_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ADMIN_SALES_SUCCESS: (state, action) => {
    state.loading = false;
    state.sales = action.payload.sales;
  },

  GET_ADMIN_SALES_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  DELETE_ADMIN_SALE_REQUEST: (state) => {
    state.loading = true;
  },

  DELETE_ADMIN_SALE_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  DELETE_ADMIN_SALE_FAIL: (state, action) => {
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
