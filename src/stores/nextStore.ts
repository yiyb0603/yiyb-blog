import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import dotenv from '@/libs/dotenv';
import { rootReducer } from '@/stores';

export const createNextStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: dotenv.DEV_MODE,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
}

export const wrapper = createWrapper(createNextStore);