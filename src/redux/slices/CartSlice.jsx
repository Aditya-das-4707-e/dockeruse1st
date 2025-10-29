import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // find if the element is already exist or not 
            const existItem = state.cart.find((item) => item.id === action.payload.id);

            if (existItem) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                state.cart.push(action.payload);
            }

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
           
        },
        
        increamentItem: (state, action) => {
            console.log("hi");
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
        },
        decreamentItem: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: Math.max(item.qty - 1, 0) } : item)
        }
    }
});

export const { addToCart, removeFromCart, increamentItem, decreamentItem } = CartSlice.actions;
export default CartSlice.reducer;