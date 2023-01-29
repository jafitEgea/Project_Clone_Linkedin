import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/useSlice'

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
