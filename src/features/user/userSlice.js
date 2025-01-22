import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  shippingName: "",
  shippingEmail: "",
  shippingAddress: "",
  shippingCity: "",
  shippingState: "",
  shippingPostCode: "",
  shippingCountry: "",
  billingAddress: "",
  billingCity: "",
  billingState: "",
  billingPostCode: "",
  billingCountry: "",
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    loggedOut(state, action) {
      state.id = "";
      state.name = "";
      state.email = "";
      state.shippingName = "";
      state.shippingEmail = "";
      state.shippingAddress = "";
      state.shippingCity = "";
      state.shippingState = "";
      state.shippingPostCode = "";
      state.shippingCountry = "";
      state.billingAddress = "";
      state.billingCity = "";
      state.billingState = "";
      state.billingPostCode = "";
      state.billingCountry = "";
      state.phoneNumber = "";
    },
    saveAddress(state, action) {
      state.shippingName = action.payload.name;
      state.shippingEmail = action.payload.email;
      state.shippingAddress = action.payload.shippingAddress;
      state.shippingCity = action.payload.shippingCity;
      state.shippingState = action.payload.shippingState;
      state.shippingPostCode = action.payload.shippingPostCode;
      state.shippingCountry = action.payload.shippingCountry;
      state.billingAddress = action.payload.billingAddress;
      state.billingCity = action.payload.billingCity;
      state.billingState = action.payload.billingState;
      state.billingPostCode = action.payload.billingPostCode;
      state.billingCountry = action.payload.billingCountry;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const { loggedIn, loggedOut, saveAddress } = userSlice.actions;
export default userSlice.reducer;

export const getUserId = (state) => state.user.id;
export const getUserName = (state) => state.user.name;
export const getUserEmail = (state) => state.user.email;
export const getUserDetails = (state) => state.user;
