// IMPORTS -
import axios from "axios";

// CONSTANTS -
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
} from "../../helpers/Constants";

// PARTIALS -
import {
  LOAD_USER,
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../../helpers/Paths";

// LOGIN -
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.post(LOGIN, { email, password }, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// REGISTER -
export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    };

    const { data } = await axios.post(REGISTER, formData, config);

    dispatch({ type: REGISTER_SUCCESS, payload: data.message });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

// LOAD USER -
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_REQUEST,
    });
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(LOAD_USER, config);

    dispatch({
      type: LOAD_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// LOGOUT -
export const logout = () => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(LOGOUT, config);

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// UPDATE PROFILE -
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.put(UPDATE_PROFILE, userData, config);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// UPDATE PASSWORD  -
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.put(UPDATE_PASSWORD, passwords, config);

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// FORGOT PASSWORD -
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(FORGOT_PASSWORD, email, config);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// RESET PASSWORD -
export const resetPassword = (token, passwords) => async (dispatch) => {
try{

  dispatch({
    type: RESET_PASSWORD_REQUEST
  });

   const config = {
     headers: {
       "Content-Type": "application/json",
     },
   };

   const {data} = await axios.put(`${RESET_PASSWORD}/${token}`, passwords, config);

   dispatch({
    type: RESET_PASSWORD_SUCCESS,
    payload: data.success
   })

}
catch(error)
{
   dispatch({
     type: RESET_PASSWORD_FAIL,
     payload: error.response?.data?.message,
   });
}


} 

// CLEAR ERRORS -
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

// CLEAR MESSAGES -
export const clearMessages = () => async (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGES,
  });
};
