
import { createSlice } from "@reduxjs/toolkit";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState = {
  username: 'Islam Saeed',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    }
  }
})

export const getUser = (state) => state.user.username;

export const { updateName } = userSlice.actions;
export default userSlice.reducer;


