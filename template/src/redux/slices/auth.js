import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userId: null,
    didTryAutoLogin: false,
    message: '',
  },
  reducers: {
    attemptLogin: (state, action) => {
      state;
      state.didTryAutoLogin = true;
    },
    attemptLogout: (state, action) => {
      state.token = null;
      state.userId = null;
      state.didTryAutoLogin = true;
    },
    loginSuccess: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.message = action.payload.message
        ? action.payload.message
        : 'Login Successful';
    },
    loginFailed: (state, action) => {
      state;
      state.message = action.payload.message
        ? action.payload.message
        : 'Login Failed';
    },
  },
});

export const {attemptLogin, loginSuccess, loginFailed, attemptLogout} =
  authSlice.actions;

export default authSlice.reducer;
