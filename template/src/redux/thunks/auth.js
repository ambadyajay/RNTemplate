import {
  attemptLogin,
  loginSuccess,
  loginFailed,
  attemptLogout,
} from '../slices/auth';

// import API from '../../services/api/APIRoutes';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const login = payload => async dispatch => {
  try {
    // const res = await API.login(payload);
    // if (res.status.code == 200) {
    dispatch(loginSuccess(payload));
    // }
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const tryAutoLogin = () => async dispatch => {
  dispatch(attemptLogin());
};

export const logout = () => async dispatch => {
  dispatch(attemptLogout());
};
