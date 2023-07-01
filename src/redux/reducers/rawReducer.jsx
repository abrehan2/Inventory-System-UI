// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

// GET ALL RAW MATERIALS -
const initialState = {
  products: null,
  productCount: null,
  loading: null,
  error: null,
  resultPerPage: null,
};

export const rawReducer = createReducer(initialState, {
  ALL_PRODUCT_REQUEST: (state) => {
    state.loading = true;
  },

  ALL_PRODUCT_SUCCESS: (state, action) => {
    state.loading = false;
    state.products = action.payload.products;
    state.productCount = action.payload.productCount;
    state.resultPerPage = action.payload.resultPerPage;
  },

  ALL_PRODUCT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});

// GET RAW MATERIAL DETAILS -
const rawDetails = {
  product: null,
  loading: null,
  error: null,
};

export const rawDetailsReducer = createReducer(rawDetails, {
  PRODUCT_DETAILS_REQUEST: (state) => {
    state.loading = true;
  },

  PRODUCT_DETAILS_SUCCESS: (state, action) => {
    state.loading = false;
    state.product = action.payload.product;
  },

  PRODUCT_DETAILS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});
