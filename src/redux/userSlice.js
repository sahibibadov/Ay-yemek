import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = JSON.stringify(action.payload);
    },
  },
});


export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
