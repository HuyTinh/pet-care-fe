import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../page/site/product.slice'
import { productApi } from '../page/site/product.service'
import cartReducer from '../page/site/cart/cart.slice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart : cartReducer,
    [productApi.reducerPath] : productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false, // Disable the serializable check for non-serializable values (needed for things like `SecureStore`)
    }).concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch