import { configureStore } from '@reduxjs/toolkit'
import prescriptionReducer from '../app/prescription.slice'
import { pharmacistApi } from '../app/pharmacist.service'
// ...

export const store = configureStore({
    reducer: {
        prescription: prescriptionReducer,
        [pharmacistApi.reducerPath]: pharmacistApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disable the serializable check
    }).concat(pharmacistApi.middleware)
})
// setupListeners(store.dispatch) 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch