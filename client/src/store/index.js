import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { safetyReducer } from './slices/safetySlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		safety: safetyReducer,
	},
});

export * from './thunks/fetchUser';
export * from './thunks/fetchData';
