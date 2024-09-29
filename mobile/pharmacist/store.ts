import { configureStore } from '@reduxjs/toolkit'
import prescriptionReducer from './prescription'
import { pharmacistApi } from './pharmacist.service'
// ...

export const store = configureStore({
    reducer: {
        prescription: prescriptionReducer,
        [pharmacistApi.reducerPath]: pharmacistApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pharmacistApi.middleware)
})
// setupListeners(store.dispatch) 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch