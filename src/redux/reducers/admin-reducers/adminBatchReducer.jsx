// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  batches: null,
  message: null,
  isUpdated: null,
};

// ADMIN EXPENSE -
export const adminBatchReducer = createReducer(initialState, {
  ADMIN_BATCHES_GET_REQUEST: (state) => {
    state.loading = true;
  },

  ADMIN_BATCHES_GET_SUCCESS: (state, action) => {
    state.loading = false;
    state.batches = action.payload.batches;
  },

  ADMIN_BATCHES_GET_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ADMIN_BATCHES_UPDATE_REQUEST: (state) => {
    state.loading = true;
  },

  ADMIN_BATCHES_UPDATE_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload.success;
    state.message = action.payload.message;
  },

  ADMIN_BATCHES_UPDATE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ADMIN_BATCHES_UPDATE_RESET: (state) => {
    state.isUpdated = false;
  },

  ADMIN_BATCHES_DELETE_REQUEST: (state) => {
    state.loading = true;
  },

  ADMIN_BATCHES_DELETE_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  ADMIN_BATCHES_DELETE_FAIL: (state, action) => {
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
