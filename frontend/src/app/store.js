import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userAuthApi } from '../services/userAuthApi';
import { storyInputApi } from '../services/storyInputApi';
import { emergencyApi } from '../services/emergencyApi';

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [storyInputApi.reducerPath]: storyInputApi.reducer,
    [emergencyApi.reducerPath]: emergencyApi.reducer,  // Add this line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuthApi.middleware)
      .concat(storyInputApi.middleware)
      .concat(emergencyApi.middleware),  // Add this line
});

setupListeners(store.dispatch);
