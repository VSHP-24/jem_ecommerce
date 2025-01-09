import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newITem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = product.id
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      // payload = product.id
      const item = state.cart.find(
        (item) => item.product.id === action.payload,
      );

      item.quantity++;
      item.totalPrice = item.quantity * item.product.price;
    },
    decreaseItemQuantity(state, action) {
      // payload = product.id
      const item = state.cart.find(
        (item) => item.product.id === action.payload,
      );

      item.quantity--;
      item.totalPrice = item.quantity * item.product.price;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.totalPrice, 0);
