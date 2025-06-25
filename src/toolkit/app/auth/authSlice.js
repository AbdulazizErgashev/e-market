import { createSlice } from "@reduxjs/toolkit";

const getStoredUser = () => {
  const localUser = localStorage.getItem("user");
  const sessionUser = sessionStorage.getItem("user");

  return localUser
    ? JSON.parse(localUser)
    : sessionUser
    ? JSON.parse(sessionUser)
    : null;
};

const initialState = {
  user: getStoredUser(),
  isAuthenticated: !!getStoredUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { user, remember } = action.payload;

      state.user = user;
      state.isAuthenticated = true;

      if (remember) {
        localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.removeItem("user");
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
        localStorage.removeItem("user");
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
