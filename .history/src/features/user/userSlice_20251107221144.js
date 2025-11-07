import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  const positionObj = await getPosition();
  return const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  }

}
const addressObj = await getAddress(position);
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


