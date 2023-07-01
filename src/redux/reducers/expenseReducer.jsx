// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  message: null,
  expenses: null,
  totalAmount: null,
};

// EXPENSE -
export const expenseReducer = createReducer(initialState, {
  EXPENSE_REQUEST: (state) => {
    state.loading = true;
  },

  EXPENSE_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },

  EXPENSE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GET_ALL_EXPENSE_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ALL_EXPENSE_SUCCESS: (state, action) => {
    state.loading = false;
    state.expenses = action.payload.expenses;
    state.totalAmount = action.payload.totalAmount;
  },

  GET_ALL_EXPENSE_FAIL: (state, action) => {
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
