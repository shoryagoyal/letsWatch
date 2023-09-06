import { configureStore } from '@reduxjs/toolkit';
import watchListSlice from './slices/watchListSlice';

const store = configureStore({
    reducer: {
        watchList: watchListSlice,
    },
});

export default store;
