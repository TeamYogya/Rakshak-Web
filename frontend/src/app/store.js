import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { storyInputApi } from "../services/storyInputApi";
// import authReducer from '../features/authSlice'
// import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,[storyInputApi.reducerPath]: storyInputApi.reducer,
    // accounts: authReducer,
    // user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware).concat(storyInputApi.middleware),
})

setupListeners(store.dispatch)