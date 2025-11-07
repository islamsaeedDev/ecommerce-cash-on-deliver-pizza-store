// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

import { createSlice } from "@reduxjs/toolkit";

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


export const { updateName } = userSlice.actions;
export default userSlice.reducer;


export const getUser = (state) => state.user.username;
