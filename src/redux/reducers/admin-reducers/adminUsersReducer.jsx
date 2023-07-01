// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  users: null,
  userCount: null,
  message: null,
  isUpdated: null,
  resultPerPage: null,
  user: null,
};

// ADMIN USERS -
export const adminUsersReducer = createReducer(initialState, {
  GET_ADMIN_USERS_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ADMIN_USERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.users = action.payload.users;
    state.userCount = action.payload.userCount;
    state.resultPerPage = action.payload.resultPerPage;
  },

  GET_ADMIN_USERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GET_ADMIN_USER_REQUEST: (state) => {
    state.loading = true;
  },

  GET_ADMIN_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
  },

  GET_ADMIN_USER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_ADMIN_USER_REQUEST: (state) => {
    state.loading = true;
  },

  UPDATE_ADMIN_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload.success;
  },
  UPDATE_ADMIN_USER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  UPDATE_ADMIN_USER_RESET: (state) => {
    state.isUpdated = false;
  },

  DELETE_USER_REQUEST: (state) => {
    state.loading = true;
  },

  DELETE_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  },

  DELETE_USER_FAIL: (state, action) => {
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
