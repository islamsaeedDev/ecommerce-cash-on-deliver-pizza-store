import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
            console.log('cart', state.cart);
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
        decreaseItemQuantity(state, action) {
            const item = state.cart.find((item) => item.pizzaId === action.payload);

            item.quantity--;
            if (item.quantity === 0) {
                state.cart.filter((item) => item.pizzaId !== action.payload);
            }
            item.totalPrice = item.quantity * item.unitPrice;


        },
        clearCart(state) {
            state.cart = []
        }
    }

})
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0)
export const getTotalCartQuntity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)