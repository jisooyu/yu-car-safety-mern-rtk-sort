import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchData = createAsyncThunk('safety/fetchData', async () => {
	try {
		const res = await axios.get('/api/safety');
		return res.data;
	} catch (error) {
		throw error;
	}
});

export { fetchData };
