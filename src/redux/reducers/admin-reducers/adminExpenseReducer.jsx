// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  expenses: null,
  message: null,
  totalAmount: null,
  isUpdated: null,
};

// ADMIN EXPENSE -
export const adminExpenseReducer = createReducer(initialState, {
  GET_ADMIN_EXPENSE_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ADMIN_EXPENSE_SUCCESS: (state, action) => {
    state.loading = false;
    state.expenses = action.payload.expenses;
    state.totalAmount = action.payload.totalAmount;
  },

  GET_ADMIN_EXPENSE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_ADMIN_EXPENSE_REQUEST: (state) => {
    state.loading = true;
  },

  UPDATE_ADMIN_EXPENSE_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload.success;
    state.message = action.payload.message;
  },

  UPDATE_ADMIN_EXPENSE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_ADMIN_EXPENSE_RESET: (state) => {
    state.isUpdated = false;
  },

  DELETE_ADMIN_EXPENSE_REQUEST: (state) => {
    state.loading = true;
  },

  DELETE_ADMIN_EXPENSE_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  DELETE_ADMIN_EXPENSE_FAIL: (state, action) => {
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
