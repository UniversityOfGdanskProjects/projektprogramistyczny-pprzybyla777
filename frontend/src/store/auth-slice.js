import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    logOut: (state, action) => {
      state.token = null
    }
  }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;