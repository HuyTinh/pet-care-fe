import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Importing necessary functions from Redux Toolkit


// Defining the shape of the state for the pharmacist profile
interface CartState {
    cart: any // The unique identifier for the pharmacist
}

// Initial state of the pharmacist, with default values
const initialState: CartState = {
    cart: []// Initially no product ID
}

// Creating a slice of the Redux store to manage the pharmacist state
const cartSlice = createSlice({
    name: 'cart', // The name of the slice, used in the reducer
    initialState, // The initial state of the slice
    reducers: {
        // add product to cart
        updateCart: (state, action: PayloadAction<any>) => {
            let { product, updateQty } = action.payload
            let cartItem = {
                product: product,
                quantity: 1,
                price: product.price
            }
            const existingProductIndex = state.cart.findIndex(
                (item: any) => item.product.id === cartItem.product.id
            );
            if (existingProductIndex >= 0) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
                state.cart[existingProductIndex].quantity += updateQty;
                state.cart[existingProductIndex].price = state.cart[existingProductIndex].quantity * cartItem.product.price
                if (state.cart[existingProductIndex].quantity === 0) {
                    state.cart.splice(existingProductIndex, 1);
                }
            } else {
                // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào
                state.cart.push(cartItem);
            }
            // Cập nhật lại giỏ hàng trong localStorage
            localStorage.setItem("carts", JSON.stringify(state.cart))
        },
        removeCart: (state, action: PayloadAction<any>) => {
            // const existingProductIndex = state.cart.findIndex(
            //     (item: any) => item.productId === action.payload
            // );
            // state.cart.splice(existingProductIndex, 1);

            state.cart = state.cart.filter((e : any) => e.product.id !== action.payload)
            localStorage.setItem("carts", JSON.stringify(state.cart))
        }
    },
})

// Exporting the reducer to be used in the store configuration
const cartReducer = cartSlice.reducer;

// Exporting the actions for use in components or other parts of the app
export const {
    updateCart,
    removeCart
    // Action to set the pharmacist profile ID
} = cartSlice.actions;

// Exporting the reducer as the default export to integrate into the Redux store
export default cartReducer;
