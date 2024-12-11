import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Importing necessary functions from Redux Toolkit

// Defining the shape of the state for the pharmacist profile
interface ProductState {
    id: number; // The unique identifier for the pharmacist
}

// Initial state of the pharmacist, with default values
const initialState: ProductState = {
    id: 0 // Initially no product ID
}

// Creating a slice of the Redux store to manage the pharmacist state
const productSlice = createSlice({
    name: 'product', // The name of the slice, used in the reducer
    initialState, // The initial state of the slice
    reducers: {
        // Reducer to set the product's profile ID
       productId: (state, action: PayloadAction<number>) => {
            state.id = action.payload; // Update the product ID with the action payload
        },
    },
})

// Exporting the reducer to be used in the store configuration
const productReducer = productSlice.reducer;

// Exporting the actions for use in components or other parts of the app
export const {
    productId, // Action to set the pharmacist profile ID
} = productSlice.actions;

// Exporting the reducer as the default export to integrate into the Redux store
export default productReducer;
