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
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            //filter item
            state.cart.filter(item => item.pizzaId !== action.payload.id)

        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++;

            item.totalPrice = item.quantity * item.unitPrice


        },
        decreaseItemQuantity(staet, action) { },
        clearCart(state, action) { }
    }

})
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;