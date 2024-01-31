import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addCart: (state, action) => {
          // Add the payload (product) to the cart array
          state.cart.push(action.payload);
       },
    },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
