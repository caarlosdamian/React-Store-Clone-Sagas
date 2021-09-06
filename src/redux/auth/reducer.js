import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.isAuth = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const login = createAction("auth/login");

export default authSlice.reducer;
export const { setToken, setUser, signOut } = authSlice.actions;