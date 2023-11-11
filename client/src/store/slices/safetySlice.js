import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../thunks/fetchData';

const safetySlice = createSlice({
	name: 'safety',
	initialState: {
		data: [],
		isLoading: false,
		error: null,
	},
	extraReducers(builder) {
		builder.addCase(fetchData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message; // Log the error message
		});
	},
});
export const safetyReducer = safetySlice.reducer;
