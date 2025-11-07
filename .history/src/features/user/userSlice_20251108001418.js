import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


export const fetchAddress = createAsyncThunk('user/fetchAddress',

  async function () {

    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    }
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city},${addressObj.postcode}, ${addressObj?.countryName}`

    return { position, address }
  }
)


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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.state = 'loading'
      })
  }
})

export const getUser = (state) => state.user.username;

export const { updateName } = userSlice.actions;
export default userSlice.reducer;


