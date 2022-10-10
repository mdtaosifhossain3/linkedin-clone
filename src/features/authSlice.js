import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state,action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null
    }
  },
});

// Actions 
export const { signIn, logout } = authSlice.actions;

export default authSlice.reducer;
