// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  message: null,
  products: null,
  success: null,
  formulas: null,
  batch: null,
};

// CREATE FORMULA -
export const formulaReducer = createReducer(initialState, {
  GET_FORMULA_PRODUCTS_REQUEST: (state) => {
    state.loading = true;
  },

  GET_FORMULA_PRODUCTS_SUCCESS: (state, action) => {
    state.loading = false;
    state.products = action.payload.products;
  },

  GET_FORMULA_PRODUCTS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CREATE_FORMULA_REQUEST: (state) => {
    state.loading = true;
  },

  CREATE_FORMULA_SUCCESS: (state, action) => {
    state.loading = false;
    state.success = action.payload.success;
  },

  CREATE_FORMULA_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GET_ALL_USER_FORMULA_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ALL_USER_FORMULA_SUCCESS: (state, action) => {
    state.loading = false;
    state.formulas = action.payload.formulas;
  },

  GET_ALL_USER_FORMULA_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CREATE_BATCH_REQUEST: (state) => {
    state.loading = true;
  },

  CREATE_BATCH_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  CREATE_BATCH_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GET_ALL_BATCHES_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ALL_BATCHES_SUCCESS: (state, action) => {
    state.loading = false;
    state.batch = action.payload.batch;
  },

  GET_ALL_BATCHES_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  USE_BATCH_REQUEST: (state) => {
    state.loading = true;
  },

  USE_BATCH_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  USE_BATCH_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },

  CLEAR_MESSAGES: (state) => {
    state.message = null;
  },

  CLEAR_SUCCESS: (state) => {
    state.success = null;
  },
});
