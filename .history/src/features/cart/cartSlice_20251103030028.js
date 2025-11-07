import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [
        {
            pizzaId: 23,
            name: 'miditerranean',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,

        }
    ]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {

        }
        deleteItem(state, action)
    }

})
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;