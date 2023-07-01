// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: null,
  user: null,
  message: null,
  isAuth: null,
  isUpdated: null,
  isPassUpdated: null,
  success: null,
};

// AUTH -
export const userReducer = createReducer(initialState, {
  LOGIN_REQUEST: (state) => {
    state.loading = true;
    state.isAuth = false;
  },

  LOGIN_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.user = action.payload;
  },

  LOGIN_FAIL: (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.user = null;
    state.error = action.payload;
  },

  REGISTER_REQUEST: (state) => {
    state.loading = true;
  },

  REGISTER_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },

  REGISTER_FAIL: (state, action) => {
    state.loading = false;
    state.message = action.payload;
    state.error = action.payload;
  },

  LOAD_REQUEST: (state) => {
    state.loading = true;
    state.isAuth = false;
  },

  LOAD_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.user = action.payload;
  },

  LOAD_FAIL: (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.user = null;
    state.error = action.payload;
  },

  LOGOUT_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = null;
    state.isAuth = false;
    state.message = action.payload;
  },

  LOGOUT_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },

  CLEAR_MESSAGES: (state) => {
    state.message = null;
  }
});

// PROFILE -
export const profileReducer = createReducer(initialState, {
  UPDATE_PROFILE_REQUEST: (state) => {
    state.loading = true;
  },

  UPDATE_PROFILE_SUCCESS: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },

  UPDATE_PROFILE_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_PROFILE_RESET: (state) => {
    state.isUpdated = false;
  },

  UPDATE_PASSWORD_REQUEST: (state) => {
    state.loading = true;
  },

  UPDATE_PASSWORD_SUCCESS: (state, action) => {
    state.loading = false;
    state.isPassUpdated = action.payload;
  },

  UPDATE_PASSWORD_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UPDATE_PASSWORD_RESET: (state) => {
    state.isPassUpdated = false;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },
});

// FORGOT PASSWORD -
export const forgotPasswordReducer = createReducer(initialState, {
  FORGOT_PASSWORD_REQUEST: (state) => {
    state.loading = true;
  },

  FORGOT_PASSWORD_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },

  FORGOT_PASSWORD_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  RESET_PASSWORD_REQUEST: (state) => {
    state.loading = true;
  },

  RESET_PASSWORD_SUCCESS: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },

  RESET_PASSWORD_FAIL: (state, action) => {
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
