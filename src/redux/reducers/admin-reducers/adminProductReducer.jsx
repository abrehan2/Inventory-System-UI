// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  products: null,
  message: null,
  isUpdated: null,
};

// ADMIN EXPENSE -
export const adminProductReducer = createReducer(initialState, {
  GET_ADMIN_PRODUCTS_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ADMIN_PRODUCTS_SUCCESS: (state, action) => {
    state.loading = false;
    state.products = action.payload.products;
  },

  GET_ADMIN_PRODUCTS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CREATE_ADMIN_PRODUCTS_REQUEST: (state) => {
    state.loading = true;
  },

  CREATE_ADMIN_PRODUCTS_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  CREATE_ADMIN_PRODUCTS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_ADMIN_PRODUCT_REQUEST: (state) => {
    state.loading = true;
  },

  UPDATE_ADMIN_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
    state.isUpdated = action.payload.success;
  },

  UPDATE_ADMIN_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_ADMIN_PRODUCT_RESET: (state) => {
    state.isUpdated = false;
  },

  DELETE_ADMIN_PRODUCTS_REQUEST: (state) => {
    state.loading = true;
  },

  DELETE_ADMIN_PRODUCTS_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  DELETE_ADMIN_PRODUCTS_FAIL: (state, action) => {
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
