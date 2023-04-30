import { configureStore } from '@reduxjs/toolkit';
import Slice from './Slice/Slice';

export const Store = configureStore({
	reducer: {
		slice: Slice,
	},
});

export type RootState = ReturnType<typeof Store.getState>
