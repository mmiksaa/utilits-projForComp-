import { configureStore } from '@reduxjs/toolkit';
import palitraSlice from './palitraSlice';

export const store = configureStore({
  reducer: { palitraSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
