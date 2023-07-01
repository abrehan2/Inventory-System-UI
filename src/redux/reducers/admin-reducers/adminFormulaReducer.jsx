// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  formulas: null,
  message: null,
  isUpdated: null,
};

// ADMIN EXPENSE -
export const adminFormulaReducer = createReducer(initialState, {
  GET_ADMIN_FORMULA_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ADMIN_FORMULA_SUCCESS: (state, action) => {
    state.loading = false;
    state.formulas = action.payload.formulas;
  },

  GET_ADMIN_FORMULA_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ADMIN_FORMULA_STATUS_REQUEST: (state) => {
    state.loading = true;
  },

  ADMIN_FORMULA_STATUS_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  ADMIN_FORMULA_STATUS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ADMIN_FORMULA_UPDATE_REQUEST: (state) => {
    state.loading = true;
  },

  ADMIN_FORMULA_UPDATE_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload.success;
    state.message = action.payload.message;
  },

  ADMIN_FORMULA_UPDATE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ADMIN_FORMULA_UPDATE_RESET: (state) => {
    state.isUpdated = false;
  },

  ADMIN_FORMULA_DELETE_REQUEST: (state) => {
    state.loading = true;
  },

  ADMIN_FORMULA_DELETE_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  ADMIN_FORMULA_DELETE_FAIL: (state, action) => {
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
